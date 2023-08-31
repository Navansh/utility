import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { useUtilityStore } from '../../store/utility-store';
import DashBoardTable from './dashboard-table';
import UtilityPreviewCard from './utility-preview-card';

const UtilityModal = () => {
  const isModalOpen = useUtilityStore((state) => state.isModalOpen);
  const isModalForDashboardUtilityInfo = useUtilityStore(
    (state) => state.isModalForDashboardUtilityInfo
  );

  const handleCloseModal = () => {
    useUtilityStore.getState().setisModalOpen(false);
    useUtilityStore.getState().setIsModalForDashboardUtilityInfo(false);
  };

  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={handleCloseModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-1/2 bg-white max-w-max transform overflow-hidden rounded-3xl p-6 text-left align-middle shadow-xl transition-all">
                  {isModalOpen &&
                    (isModalForDashboardUtilityInfo ? (
                      <DashBoardTable />
                    ) : (
                      <UtilityPreviewCard />
                    ))}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default UtilityModal;
