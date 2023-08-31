import CommunityTargeting from './community-targeting';
import CreatorsQuestions from './creator-questions';

const UtilityRequirements = () => {
  return (
    <div className="flex flex-col gap-5">
      <CommunityTargeting />
      <CreatorsQuestions />
    </div>
  );
};

export default UtilityRequirements;
