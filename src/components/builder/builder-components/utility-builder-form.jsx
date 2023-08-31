import UtilityRequirements from './FormComponents/utilittyRequirments/utilityRequirements';
import UtilityInformation from './FormComponents/utilityInformation/utilityInformation';
import UtilitySetting from './FormComponents/utlitySetting/utilitySetting';
import UtilityBuilderCard from './utilityBuilderCard';

const UtilityBuilderForm = ({ activeTab, setUtility, utilities }) => {
  const featuredCollection = [
    {
      key: 1,
      collectionName: 'collection',
      claims: '10000',
      utilityName: 'utility1',
    },
    {
      key: 2,
      collectionName: 'collection',
      claims: '10000',
      utilityName: 'utility2',
    },
    {
      key: 3,
      collectionName: 'collection',
      claims: '10000',
      utilityName: 'utility3',
    },
    {
      key: 4,
      collectionName: 'collection',
      claims: '10000',
      utilityName: 'utility4',
    },
    {
      key: 5,
      collectionName: 'collection',
      claims: '10000',
      utilityName: 'utility5',
    },
    {
      key: 6,
      collectionName: 'collection',
      claims: '10000',
      utilityName: 'utility6',
    },
    {
      key: 7,
      collectionName: 'collection',
      claims: '10000',
      utilityName: 'utility7',
    },
    {
      key: 8,
      collectionName: 'collection',
      claims: '10000',
      utilityName: 'utility8',
    },
    {
      key: 9,
      collectionName: 'collection',
      claims: '10000',
      utilityName: 'utility9',
    },
    {
      key: 10,
      collectionName: 'collection',
      claims: '10000',
      utilityName: 'utility10',
    },
  ];
  return (
    <>
      {activeTab === 0 ? (
        featuredCollection.map((utility) => (
          <UtilityBuilderCard
            key={utility.id}
            collectionName={utility.collectionName}
            utilityName={utility.utilityName}
            claims={utility.claims}
            utility={utilities}
            setUtility={setUtility}
          />
        ))
      ) : activeTab === 1 ? (
        <UtilityInformation />
      ) : activeTab === 2 ? (
        <UtilityRequirements />
      ) : (
        <UtilitySetting />
      )}
    </>
  );
};

export default UtilityBuilderForm;
