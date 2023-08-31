import { useUtilityStore } from '../../../../../store/utility-store';
import { Filepicker } from '../../../../widgets/elements';
import { Input, TextArea } from '../../../../widgets/primitives';

const Information = () => {
  const title = useUtilityStore((state) => state.title);
  const description = useUtilityStore((state) => state.description);
  const image = useUtilityStore((state) => state.image);

  const onTitleChange = (value) => {
    useUtilityStore.getState().setTitle(value);
  };

  const onDescriptionChange = (value) => {
    useUtilityStore.getState().setDescription(value);
  };

  const onImageChange = (value) => {
    useUtilityStore.getState().setImage(value);
  };

  return (
    <div className="rounded-md border border-gray-400 bg-white p-5 text-xs">
      <span>
        Information<span className="text-red-600">*</span>
      </span>
      <div className="mt-7 flex flex-col gap-5">
        <div className="flex flex-col gap-1 ">
          <Input
            placeholder="Title"
            label="Title"
            name="title"
            value={title}
            onChange={onTitleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <TextArea
            name="description"
            placeholder="Description"
            label="Description"
            value={description}
            onChange={onDescriptionChange}
          />
        </div>

        <div>
          <p className="mb-1.5">Images</p>
          <Filepicker onImageChange={onImageChange} />
          {/* <div className="mt-4">
            <div className="flex h-20 w-20 flex-col items-center justify-center rounded bg-[#F9F9FC] text-center">
              1
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Information;
