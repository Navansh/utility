import { useUtilityStore } from '../../../../../store/utility-store';
import { Input } from '../../../../widgets/primitives';

const MaxClaims = () => {
  const maxClaims = useUtilityStore((state) => state.claims.total);
  const onClaimsChange = (value) => {
    useUtilityStore.getState().setClaims({ total: value, claimed: 0 });
  };

  return (
    <div className="rounded-md border border-gray-400 bg-white p-5 text-xs">
      <div className="flex justify-between gap-x-6">
        <div>
          <span className="text-sm font-medium">Maximum claims</span>
          <p className="mt-1.5 text-xs font-normal text-gray-500">
            Limit the number of available claims for your utility
          </p>
        </div>

        <Input
          value={maxClaims}
          name="claims"
          onChange={onClaimsChange}
          placeholder={'Max claim '}
        />
      </div>
    </div>
  );
};

export default MaxClaims;
