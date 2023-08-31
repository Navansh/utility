import MaxClaims from './max-claims';
import Schedule from './schedule';
import Tags from './tags';

const UtilitySetting = () => {
  return (
    <div className="mt-5 flex flex-col gap-5">
      <span>
        <span className="text-red-600">*</span>Required fields
      </span>
      <Schedule />
      <MaxClaims />
      <Tags />
    </div>
  );
};

export default UtilitySetting;
