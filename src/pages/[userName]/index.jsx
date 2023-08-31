import axios from 'axios';

import UtilityCardSection from '../../components/profile/card-section';
import Sidebar from '../../components/profile/sidebar';
import RootLayout from '../../layouts/layout';

export async function getServerSideProps(context) {
  try {
    const { userName } = context.params;
    const data = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userName}/user-offering`
    );

    if (!data?.data?.user) {
      return {
        redirect: {
          destination: '/404',
          permanent: false,
        },
      };
    }
    const result = data?.data?.user || {};
    return { props: { data: result } };
  } catch (error) {
    return { props: { data: {} } };
  }
}

const UserProfilePage = ({ data }) => {
  return (
    <div className="h-screen flex flex-col-reverse bg-background overflow-hidden">
      <div className="h-[92%] flex">
        <Sidebar
          userName={data?.userName || ''}
          userAddress={data?.address || ''}
          userDescription={data?.userDescription || ''}
          userProfilePicture={data?.profilePhoto || ''}
          utilitiesCreated={data?.utilities?.created?.length || 0}
        />
        <UtilityCardSection utilities={data?.utilities?.created || []} />
      </div>
    </div>
  );
};

UserProfilePage.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default UserProfilePage;
