import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import { getUtilityById } from '../../helper/utility';
import RedeemComponent from './redeem.component';

const Redeem = ({ id }) => {
  const { data } = useSession();
  const [utility, setUtility] = useState();

  useEffect(() => {
    const getUtility = async () => {
      const result = await getUtilityById(id, data?.user.id);
      setUtility(result?.utility);
    };
    if (data?.user.id) {
      getUtility();
    }
  }, [id, data?.user?.id]);
  return <RedeemComponent utility={utility} utilityId={id} />;
};

export default Redeem;
