import { useUtilityStore } from '../../../../../store/utility-store';
import { Input, TextArea } from '../../../../widgets/primitives';

const ConfirmationMessage = () => {
  const [
    confirmationTitle,
    setConfirmationTitle,
    confirmationDescription,
    setConfirmationDescription,
  ] = useUtilityStore((state) => [
    state.confirmationTitle,
    state.setConfirmationTitle,
    state.confirmationDescription,
    state.setConfirmationDescription,
  ]);
  const onConfirmationTitleChange = (value) => {
    setConfirmationTitle(value);
  };

  const onConfirmationDescriptionChange = (value) => {
    setConfirmationDescription(value);
  };

  return (
    <div className="rounded-md border border-gray-400 bg-white p-5 text-xs">
      <span>
        Confirmation message<span className="text-red-600">*</span>
      </span>
      <div className="mt-7 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <Input
            onChange={onConfirmationTitleChange}
            placeholder="Confirmation title"
            label="Confirmation title"
            name="confirmtitle"
            value={confirmationTitle}
          />
        </div>
        <div className="flex flex-col gap-1">
          <TextArea
            onChange={onConfirmationDescriptionChange}
            name="confirmdescription"
            placeholder="Confirmation description"
            label="Confirmation description"
            value={confirmationDescription}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationMessage;
