export const CreatedUtility = ({ item, handleMoreInfoClicked }) => {
  const status = {
    true: 'text-green-400 bg-green-400/10',
    false: 'text-rose-400 bg-rose-400/10',
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  const statuses = {
    true: 'text-green-400 bg-green-400/10',
    false: 'text-rose-400 bg-rose-400/10',
  };

  return (
    <tr key={item._id} className=" hover:bg-gray-200">
      <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
        <div className="flex items-center gap-x-4">
          <img
            src={item?.image}
            alt="image"
            className="h-8 w-8 rounded-full bg-gray-800"
          />
          <div className="truncate text-sm font-medium leading-6 ">
            {item?.title}
          </div>
        </div>
      </td>
      <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
        <div className="flex gap-x-3">
          <div className="font-mono text-sm leading-6 text-gray-800">
            {`${item?.claims?.claimed}/${item?.claims?.total}`}
          </div>
          <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-400/20">
            Claimed
          </span>
        </div>
      </td>
      <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
        <div className="flex items-center justify-end gap-x-2 sm:justify-start">
          <time className="text-gray-800 sm:hidden" dateTime={item?.title}>
            {item?.date}
          </time>
          <div
            //this is the red or green dot signifying draft or published
            className={classNames(
              status[item?.published],
              'flex-none rounded-full p-1'
            )}
          >
            <div className="h-1.5 w-1.5 rounded-full bg-current" />
          </div>
          <div className="hidden  sm:block">
            {item?.published ? 'Published' : 'Draft'}
          </div>
        </div>
      </td>
      <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-800 md:table-cell lg:pr-20">
        {item?.nftCollectionName}
      </td>
      <td className="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-800 sm:table-cell sm:pr-6 lg:pr-8">
        {item?.published ? (
          <div>
            <button
              className="rounded-lg border-2 p-2 border-gray-500 hover:bg-gray-500"
              onClick={() => handleMoreInfoClicked(item?._id)}
            >
              More Info
            </button>
          </div>
        ) : (
          <div>Publish</div>
        )}
      </td>
    </tr>
  );
};
