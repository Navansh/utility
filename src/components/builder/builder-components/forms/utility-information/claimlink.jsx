import { useUtilityStore } from '../../../../../store/utility-store';
import { TextArea } from '../../../../widgets/primitives';

const ClaimLink = () => {
  const claimlink = useUtilityStore((state) => state.claimLink);

  const onClaimlinkChange = (value) => {
    useUtilityStore.getState().setClaimLink(value);
  };

  return (
    <div className="rounded-md border border-gray-400 bg-white p-5 text-xs">
      <span>
        Claim Reward<span className="text-red-600">*</span>
      </span>
      <span className="block">
        This will be visible to the user only after successfully claiming the
        utility.
      </span>
      <div className="mt-7 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <TextArea
            name="reveal"
            placeholder="Enter the link here..."
            label="Link"
            value={claimlink}
            onChange={onClaimlinkChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ClaimLink;
