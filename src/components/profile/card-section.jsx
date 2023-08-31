import UtilityCard from '../common/utlity-card';

const UtilityCardSection = ({ utilities }) => {
  return (
    <div className="m-2 pt-20 lg:pt-1 w-full gap-3 h-full flex flex-col">
      <div className="h-[10%] lg:text-start text-center">
        <h1 className="px-12 py-2 text-3xl md:text-3xl lg:text-5xl">
          Offerings
        </h1>
      </div>
      <div className="h-[87%] p-6 overflow-auto grid grid-cols-1 gap-12 lg:gap-x-20 sm:grid-cols-2 xl:grid-cols-3 no-scrollbar">
        {utilities.map((utility) => {
          return (
            <UtilityCard
              key={utility._id}
              id={utility._id}
              collectionName={utility.nftCollectionName}
              claims={utility.claims}
              utilityName={utility.title}
              image={utility.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UtilityCardSection;
