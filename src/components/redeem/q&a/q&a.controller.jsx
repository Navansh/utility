import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAccount } from 'wagmi';

import { claimUtility } from '../../../helper/utility';
import { QuestionAndAnswersComponent } from './q&a.component';

export const QuestionAndAnswers = ({
  creatorQuestions,
  utilityId,
  isAlreadyClaimed,
  isEligible,
}) => {
  const { address } = useAccount();
  const [formData, setFormData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [claimedData, setClaimedData] = useState();
  const formRef = useRef();
  const { data } = useSession();
  const router = useRouter();
  const redeemUtility = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    let answers = [];
    Object.entries(formData).forEach(([key, value]) => {
      let res = {
        question: key,
        answer: value,
      };
      answers.push(res);
    });

    const claimPromise = claimUtility(utilityId, address, answers);
    toast.promise(claimPromise, {
      loading: 'Claiming utility...',
      success: 'Delivered to your Profile 🚀',
      error: 'Something went wrong',
    });
    const claimedData = await claimPromise;
    setIsLoading(false);
    setClaimedData(claimedData);
    formRef.current.reset();
  };
  const redirectToProfile = () => {
    router.push(`/dashboard/${data?.user?.id}`);
  };

  return (
    <QuestionAndAnswersComponent
      creatorQuestions={creatorQuestions}
      redeemUtility={redeemUtility}
      setFormData={setFormData}
      formRef={formRef}
      isLoading={isLoading}
      claimedData={claimedData}
      setClaimedData={setClaimedData}
      isAlreadyClaimed={isAlreadyClaimed}
      isEligible={isEligible}
      redirectToProfile={redirectToProfile}
    />
  );
};
