import axios from 'axios';
import { getSession } from 'next-auth/react';

import ProfileUpdate from '../../components/userdashboard/ProfileUpdate';
import RootLayout from '../../layouts/layout';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const session = await getSession(context);
  if (session?.user?.id !== id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const data = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${id}/profile`
  );
  const result = data?.data?.user || {};
  return { props: { data: result } };
}

const Profile = ({ data }) => {
  return (
    <div>
      {/* <Sidebar /> */}
      {/* <GridsandTabs/> */}
      <ProfileUpdate data={data} />
    </div>
  );
};

Profile.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Profile;
