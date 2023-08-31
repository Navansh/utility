import { useRouter } from 'next/router';

import Redeem from '../../components/redeem';
import RootLayout from '../../layouts/layout';

const UtilityRedeem = () => {
  const router = useRouter();
  const { utilityId } = router.query;
  // If the router is not ready yet, render a loading state or return null
  if (!router.isReady) {
    return null; // Replace with your loading state if needed
  }
  return (
    <div>
      <Redeem id={utilityId} />
    </div>
  );
};

UtilityRedeem.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default UtilityRedeem;
