import axios from 'axios';
import React from 'react';

import { useUtilityStore } from '../../store/utility-store';

const UtilityCard = ({ id, collectionName, utilityName, claims, image }) => {
  const handleOpenModal = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/utilities/${id}`)
      .then((util) => {
        useUtilityStore.getState().setModalUtility(util.data.utility);
        useUtilityStore.getState().setisModalOpen(true);
      });
  };
  return (
    <div
      className="flex-grow basis-64 mt-2 mb-3 hover:scale-95 transition-all duration-200 cursor-pointer"
      onClick={handleOpenModal}
    >
      <div className="relative border border-gray-300 h-[18.75rem] rounded-3xl">
        <img
          src={
            image
              ? image
              : 'https://plus.unsplash.com/premium_photo-1663931932646-15ceb9c0033f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
          }
          alt=""
          className="aspect-[4/16] max-h-full w-full rounded-3xl"
        />
        <div className="absolute inset-x-0 bottom-0 rounded-b-3xl bg-[#36384A] bg-opacity-60 px-5 py-4 text-white backdrop-blur-sm">
          <div className="mb-2 flex justify-between text-xs font-medium">
            <p>{collectionName}</p>
            <p>Claims {claims.total}</p>
          </div>
          <p className="text-base font-bold">{utilityName}</p>
        </div>
      </div>
    </div>
  );
};

export default UtilityCard;
