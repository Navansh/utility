import axios from 'axios';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getCsrfToken } from 'next-auth/react';
import { SiweMessage } from 'siwe';

import connectToDB from '../../../../database/lib/connectToDB';
import User from '../../../../database/Schema/User';
import { generateUsername } from '../../../lib/upload-utility/helpers';

// const authOptions = {
//   callbacks: {
//     // token.sub will refer to the id of the wallet address
//     session: ({ session, token }) => ({
//       ...session,
//       user: {
//         ...session.user,
//         id: token.sub,
//       },
//     }),
//   // Configure one or more authentication providers
//   providers: [
//     CredentialsProvider({
//       // ! Don't add this
//       // - it will assume more than one auth provider
//       // - and redirect to a sign-in page meant for oauth
//       // - id: 'siwe',
//       name: "Ethereum",
//       type: "credentials", // default for Credentials
//       // Default values if it was a form
//       credentials: {
//         message: {
//           label: "Message",
//           type: "text",
//           placeholder: "0x0",
//         },
//         signature: {
//           label: "Signature",
//           type: "text",
//           placeholder: "0x0",
//         },
//       },
//       authorize: async (credentials) => {
//         try {
//           const siwe = new SiweMessage(JSON.parse(credentials?.message ?? "{}"));
//           const nonce = await getCsrfToken({ req });
//           const fields = await siwe.validate(credentials?.signature || "")

//           if (fields.nonce !== nonce) {
//             return null;
//           }
//           return {
//             id: fields.address
//           };
//         } catch (error) {
//           // Uncomment or add logging if needed
//           console.error({ error });
//           return null;
//         }
//       },
//     })
//     /**
//      * ...add more providers here.
//      *
//      * Most other providers require a bit more work than the Discord provider. For example, the
//      * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
//      * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
//      *
//      * @see https://next-auth.js.org/providers/github
//      */
//   ],
// }

export const authOptions = ({ req }) => ({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      // ! Don't add this
      // - it will assume more than one auth provider
      // - and redirect to a sign-in page meant for oauth
      // - id: 'siwe',
      name: 'Ethereum',
      type: 'credentials', // default for Credentials
      // Default values if it was a form
      credentials: {
        message: {
          label: 'Message',
          type: 'text',
          placeholder: '0x0',
        },
        signature: {
          label: 'Signature',
          type: 'text',
          placeholder: '0x0',
        },
      },
      authorize: async (credentials) => {
        try {
          const siwe = new SiweMessage(
            JSON.parse(credentials?.message ?? '{}')
          );
          const nonce = await getCsrfToken({ req });

          const verifyParams = {
            signature: credentials?.signature || '',
            nonce: nonce,
          };

          const verifyOpts = {};

          // const fields = await siwe.validate(credentials?.signature || "");
          const verificationResult = await siwe.verify(
            verifyParams,
            verifyOpts
          );

          // if (fields.nonce !== nonce) {
          if (!verificationResult.success) {
            return null;
          }

          /**
           * --------For Refrence---------
           * verificationResult.data=SiweMessage {
                domain: 'localhost:3000',
                address: '0x4BF20785a0B2E6a375B1d49Ba64c6145AC50AAD6',
                statement: 'Sign in to PointSix NFT Utility.',
                uri: 'http://localhost:3000',
                version: '1',
                chainId: 80001,
                nonce: '52d59d18ebf28d9228ea7720ebabb7de9e9e3c22dbd7677fb1cf60700abc5acd',
                issuedAt: '2023-07-09T16:47:52.285Z'
              }
           */

          // Create User Account
          await connectToDB();

          let user;
          user = await User.findOne({
            address: verificationResult.data.address,
          }).lean();

          if (!user) {
            const userName = await generateUsername();
            const randomNumber =
              Math.floor(Math.random() * (1000000000 - 100000 + 1)) + 100000;
            const api = 'https://api.multiavatar.com';
            const image = await axios.get(`${api}/${randomNumber}`);
            const buffer = new Buffer(image.data).toString('base64');
            const pfp = `data:image/svg+xml;base64,${buffer}`;
            user = await User.create({
              address: verificationResult.data.address,
              chainUsed: [verificationResult.data.chainId],
              profilePhoto: pfp,
              userName: userName,
            });
          }
          // Create User Account End

          return {
            id: user._id.toString(),
          };
        } catch (error) {
          console.error({ error });
          return null;
        }
      },
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  callbacks: {
    // token.sub will refer to the id of the wallet address
    session: async ({ session, token }) => {
      await connectToDB();
      const user = await User.findById(token?.sub).lean();
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          userName: user?.userName,
        },
      };
    },
  },
});

const Auth = (req, res) => {
  const authOpts = authOptions({ req });

  const isDefaultSigninPage =
    req.method === 'GET' && req?.query?.nextauth?.includes('signin');

  // Hide Sign-In with Ethereum from default sign page
  if (isDefaultSigninPage) {
    // Removes from the authOptions.providers array
    authOpts.providers.pop();
  }

  return NextAuth(req, res, authOpts);
};

export default Auth;
