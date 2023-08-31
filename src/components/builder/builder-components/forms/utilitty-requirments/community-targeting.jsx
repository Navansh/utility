import { useUtilityStore } from '../../../../../store/utility-store';
import { SingleSelect } from '../../../../widgets/primitives';

const CommunityTargeting = () => {
  const collectionList = useUtilityStore((state) => state.collection_list);
  const nftTypes = useUtilityStore((state) => state.nft_types);
  const selectedNft = useUtilityStore((state) => state.selectedNft);
  const selectedCollection = useUtilityStore(
    (state) => state.selectedCollection
  );

  const onNftChange = (value) => {
    useUtilityStore.getState().setSelectedNft(value);
  };

  return (
    <div className="rounded-md border border-gray-400 bg-white p-5 text-xs">
      <span>Community targeting</span>
      <span className="block">
        Define which NFT community is eligible to claim your utility
      </span>
      <form className="mt-7 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <div className="relative">
            <SingleSelect
              value={selectedCollection}
              dataSource={collectionList}
              itemRenderer={(data) => data.name}
              labelRenderer={(data) => data.name}
              onChange={null}
            />
          </div>
        </div>
        {/* <div className="flex flex-col gap-1 z-10">
            <Radio
              value={selectedNft}
              dataSource={nftTypes}
              itemRenderer={(data) => data.name}
              onChange={onNftChange}
            />
          </div> */}
      </form>
    </div>
  );
};

export default CommunityTargeting;
