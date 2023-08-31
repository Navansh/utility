import { toast } from 'react-hot-toast';

const InnerSidebar = ({
  name,
  description,
  address,
  pfp,
  utilitiesCreated,
}) => {
  const copyToClipboard = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      toast('URL Copied to the clipboard', {
        icon: '📋',
      });
    } catch (err) {
      toast.error('Failed to copy: ', err);
    }
  };

  return (
    <div className=" mt-1 mx-4 mb-4 flex grow flex-col gap-y-5 overflow-y-auto rounded-lg bg-white p-6">
      <div className="h-3/6 flex flex-col">
        <div className="flex justify-center items-center p-4">
          <img src={pfp} className="w-44 h-44 rounded-full" />
        </div>
        <div className="flex flex-col justify-center items-center">
          {name ? (
            <p>
              <span className="text-black text-xl">{name}</span>
            </p>
          ) : (
            address && (
              <p>
                <span className="text-black text-xl">{`${address.slice(
                  0,
                  4
                )}...${address.slice(-5, -1)}`}</span>
              </p>
            )
          )}
          <hr className="m-2 w-2/3 border-[1px]" />
          <div className="w-2/3 flex justify-around">
            <span>totat created: {utilitiesCreated}</span>
          </div>
        </div>
      </div>
      <div className="h-2/6 overflow-auto no-scrollbar rounded-lg">
        {description && (
          <>
            <div className="">
              <span className="font-bold text-lg">Description</span>
            </div>
            <span>{description}</span>
          </>
        )}
      </div>
      <div className="h-1/6 flex justify-center items-center">
        <div>
          <button
            type="click"
            onClick={copyToClipboard}
            className="primary-gradient-background flex w-60 items-center justify-center rounded-xl border border-transparent px-2 py-2 text-base font-bold text-white"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default InnerSidebar;
