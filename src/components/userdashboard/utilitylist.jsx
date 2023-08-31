import React from 'react';

import { useUtilityStore } from '../../store/utility-store';
import { CreatedUtility } from './created-utility';
import { RedeemedUtility } from './redeemed-utility';

const UtilityList = ({ data, utilitySelector }) => {
  const utilityItems = data?.utilities?.created;
  const redeemedUtilties = data?.utilities?.redeemed;

  function handleMoreInfoClicked(id) {
    useUtilityStore.getState().setDashboardClickedUtilityId(id);
    useUtilityStore.getState().setIsModalForDashboardUtilityInfo(true);
    useUtilityStore.getState().setisModalOpen(true);
  }

  return utilitySelector === 'Created' ? (
    <div className="border-t border-white/10 pt-11 bg-background">
      <h2 className="px-4 text-base font-semibold leading-7 sm:px-6 lg:px-8">
        Latest activity
      </h2>
      <table className="mt-6 w-full whitespace-nowrap text-left">
        <colgroup>
          <col className="w-full sm:w-4/12" />
          <col className="lg:w-4/12" />
          <col className="lg:w-2/12" />
          <col className="lg:w-1/12" />
          <col className="lg:w-1/12" />
        </colgroup>
        <thead className="border-b border-white/10 text-sm leading-6 ">
          <tr>
            <th
              scope="col"
              className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8"
            >
              Title
            </th>
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
            >
              Claim Ratio
            </th>
            <th
              scope="col"
              className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20"
            >
              Status
            </th>
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
            >
              Collection Name
            </th>
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-12"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {utilityItems.map((item, index) => (
            <CreatedUtility
              item={item}
              key={index + 'created'}
              handleMoreInfoClicked={handleMoreInfoClicked}
            />
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="border-t border-white/10 pt-11 w-full bg-background">
      <h2 className="px-4 text-base font-semibold leading-7 sm:px-6 lg:px-8">
        Latest activity
      </h2>
      <table className="mt-6 w-full whitespace-nowrap text-left">
        <colgroup>
          <col className="w-full sm:w-4/12" />
          <col className="lg:w-4/12" />
          <col className="lg:w-1/12" />
          <col className="lg:w-2/12" />
          <col className="lg:w-1/12" />
        </colgroup>
        <thead className="border-b border-white/10 text-sm leading-6 ">
          <tr>
            <th
              scope="col"
              className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8"
            >
              Title
            </th>
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
            >
              Creator
            </th>
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
            >
              Expiry
            </th>
            <th
              scope="col"
              className="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-12"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {redeemedUtilties.map((item, index) => (
            <RedeemedUtility item={item} key={index + 'redeem'} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UtilityList;
