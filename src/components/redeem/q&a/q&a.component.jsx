import { ConfirmationDialog } from '../../widgets/elements/confirmation/confirmation.controller';
import Checkbox from './checkbox';
import Email from './email';
import RadioQuestion from './radio';
import TextQuestion from './text';

const questionComponents = {
  email: Email,
  radio: RadioQuestion,
  checkbox: Checkbox,
  text: TextQuestion,
};

export const QuestionAndAnswersComponent = ({
  creatorQuestions,
  redeemUtility,
  setFormData,
  formRef,
  isLoading,
  claimedData,
  setClaimedData,
  isAlreadyClaimed,
  isEligible,
  redirectToProfile,
}) => {
  const renderQuestion = (creatorQuestion) => {
    const QuestionComponent =
      questionComponents[creatorQuestion?.type] || TextQuestion;
    return (
      <QuestionComponent
        creatorQuestion={creatorQuestion}
        setFormData={setFormData}
      />
    );
  };

  return (
    <>
      {claimedData && (
        <ConfirmationDialog
          title={claimedData?.confirmationTitle}
          description={claimedData?.confirmationDesc}
          reward={claimedData?.claimData}
          resetState={setClaimedData}
          callback={redirectToProfile}
        />
      )}
      <form onSubmit={redeemUtility} ref={formRef}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-8 space-y-6">
            {creatorQuestions?.map((creatorQuestion, index) => (
              <div key={index}>{renderQuestion(creatorQuestion)}</div>
            ))}
          </div>
        </div>
        <span className="text-xs text-yellow-500">
          Your answers will be shared with creator*
        </span>
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4">
          <button
            type="submit"
            disabled={isLoading || isAlreadyClaimed || !isEligible}
            className={`${
              isLoading || isAlreadyClaimed || !isEligible
                ? 'bg-secondary'
                : 'bg-primary hover:bg-primary/90'
            } flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50`}
          >
            {isEligible
              ? isAlreadyClaimed
                ? 'Claimed'
                : 'Submit'
              : 'Not Eligible'}
          </button>
          {/* <button
          type="submit"
          className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-50 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          Submit Details
        </button> */}
        </div>
      </form>
    </>
  );
};
