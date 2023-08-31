// import React from 'react'

import ClaimLink from './claimlink';
import ConfirmationMessage from './confirmation-message';
import Information from './information';

const UtilityInformation = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <Information />
      <ConfirmationMessage />
      <ClaimLink />
    </div>
  );
};

export default UtilityInformation;
