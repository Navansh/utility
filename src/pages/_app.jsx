import '../styles/global.scss';
import '@rainbow-me/rainbowkit/styles.css';
import '../styles/dashboard.scss';

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth';
import { SessionProvider } from 'next-auth/react';
import React from 'react';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';

import HeaderController from '../components/header/header.controller';
import { getAlchemyRPCUrl } from '../constants/url';

const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        const rpcLookup = {
          [polygonMumbai.id]:
            process.env.NEXT_PUBLIC_POLYGON_RPC_URL || getAlchemyRPCUrl(80001),
        };
        return {
          http: rpcLookup[chain.id],
        };
      },
    }),
    // This Public Key is exposed on the client.
    publicProvider(),
    alchemyProvider({
      apiKey: process.env.NEXT_PUBLIC_MUMBAI_ALCHEMY_API_KEY,
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'PointSix Utility',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getSiweMessageOptions = () => ({
    statement: 'Sign in to PointSix NFT Utility.',
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <SessionProvider session={session}>
      {mounted && (
        <div>
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitSiweNextAuthProvider
              getSiweMessageOptions={getSiweMessageOptions}
            >
              <RainbowKitProvider chains={chains}>
                <div>
                  <Toaster />
                </div>
                <HeaderController />
                <Component {...pageProps} />
              </RainbowKitProvider>
            </RainbowKitSiweNextAuthProvider>
          </WagmiConfig>
        </div>
      )}
    </SessionProvider>
  );
}
