import { useUtilityStore } from '../../../../../store/utility-store';
import { Input } from '../../../../widgets/primitives';

const Schedule = () => {
  const startDate = useUtilityStore((state) => state.startDate);
  const endDate = useUtilityStore((state) => state.endDate);
  const onStartDateChange = (value) => {
    useUtilityStore.getState().setStartDate(value);
  };

  const onEndDateChange = (value) => {
    useUtilityStore.getState().setEndDate(value);
  };

  return (
    <div className="rounded-md border border-gray-400 bg-white p-5 text-xs">
      <span>
        Schedule<span className="text-red-600">*</span>
      </span>
      <span className="block mt-1">
        Choose when your utility will start and end
      </span>
      <form className="mt-6 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <Input
            onChange={onStartDateChange}
            value={startDate}
            type="date"
            placeholder="Start date"
            label="Start date"
            name="startdate"
          />
        </div>
        <div className="flex flex-col gap-1">
          <Input
            onChange={onEndDateChange}
            value={endDate}
            type="date"
            placeholder="End date"
            label="End date"
            name="enddate"
          />
        </div>
      </form>
    </div>
  );
};

export default Schedule;
