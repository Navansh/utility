import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';

export const RedeemedUtility = ({ item }) => {
  const invokeReward = () => {
    setShowReward(true);
  };
  const [showReward, setShowReward] = useState(false);
  return (
    <>
      <Transition.Root show={showReward} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setShowReward}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        {item.title || 'Congratulations!'}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {item.description || 'Here is your reward'}
                        </p>
                      </div>
                      <div className="w-full border-2 border-orange-400 text-gray-900 rounded-lg mt-4 p-2">
                        {item.claimLink ||
                          'Report to us if you are reading this'}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      onClick={() => setShowReward(false)}
                    >
                      Ok
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <tr key={item?._id} className="hover:bg-gray-200 w-screen">
        <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
          <div className="flex items-center gap-x-4">
            <img
              src={item.image}
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
              className="rounded-lg border-2 p-2 border-gray-500 hover:bg-gray-500"
              onClick={invokeReward}
            >
              Reward
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};
