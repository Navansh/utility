import { useState } from 'react';

import BuilderComponent from './builder.component';

const UtilityBuilder = () => {
  const [steps, setSteps] = useState([
    { id: 1, name: 'Template', href: '#', status: 'complete' },
    { id: 2, name: 'Utility', href: '#', status: 'current' },
    { id: 3, name: 'Requirement', href: '#', status: 'upcoming' },
    { id: 4, name: 'Settings', href: '#', status: 'upcoming' },
  ]);
  const [utility, setUtility] = useState({
    id: '',
    name: '',
    claims: '',
  });
  return (
    <BuilderComponent
      steps={steps}
      setSteps={setSteps}
      utility={utility}
      setUtility={setUtility}
    />
  );
};

export default UtilityBuilder;
