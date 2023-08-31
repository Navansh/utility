import React from 'react';

import { useUtilityStore } from '../../store/utility-store';

const RedeemedRow = ({ item }) => {
  const handleOpenModal = () => {
    useUtilityStore.getState().setModalUtility(item);
    useUtilityStore.getState().setisModalOpen(true);
  };
  return (
    <tr className=" hover:bg-gray-200 w-screen">
      <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
        <div className="flex items-center gap-x-4">
          <img
            src={
              item.image
                ? item.image
                : 'https://plus.unsplash.com/premium_photo-1663931932646-15ceb9c0033f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
            }
            alt=""
            className="h-8 w-8 rounded-full bg-gray-800"
          />
          <div className="truncate text-sm font-medium leading-6 ">
            {item.title}
          </div>
        </div>
      </td>
      <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
        <div className="flex gap-x-3">
          <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-400/20">
            {/* {item.branch} */}
            {item.creator}
          </span>
        </div>
      </td>
      <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-800 md:table-cell lg:pr-20">
        {new Date(item?.endDate).toLocaleDateString()}
      </td>
      <td className="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-800 sm:table-cell sm:pr-6 lg:pr-8">
        <div>
          <button
            className=" border-2 p-2 border-gray-500 hover:bg-gray-500"
            onClick={handleOpenModal}
          >
            More Info
          </button>
        </div>
      </td>
    </tr>
  );
};

export default RedeemedRow;
