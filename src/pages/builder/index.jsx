import axios from 'axios';
import { getSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';

import UtilityBuilder from '../../components/builder/builder.container';
import { API_URL } from '../../constants/url';
import RootLayout from '../../layouts/layout';
import Meta from '../../layouts/Meta';
import { useUtilityStore } from '../../store/utility-store';

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session?.user?.id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: session,
    },
  };
}

const Builder = ({ data }) => {
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (data?.user?.id) {
      useUtilityStore.getState().setActiveUser(data?.user?.id);
    }
  }, [data]);

  useEffect(() => {
    if (address) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL || API_URL}/users/nfts`, {
          params: {
            owner: address,
          },
        })
        .then((collection) => {
          useUtilityStore
            .getState()
            .setCollectionList(collection?.data?.result);
          if (collection?.data?.result?.length !== 0) {
            useUtilityStore
              .getState()
              .setCollection(collection?.data?.result[0]);
          }
        });
    }
  }, [isConnected]);

  return <UtilityBuilder />;
};

Builder.getLayout = (page) => {
  return (
    <RootLayout
      meta={
        <Meta
          title="Builder"
          description="Give life to your NFTs in three steps"
        />
      }
    >
      {page}
    </RootLayout>
  );
};

export default Builder;
