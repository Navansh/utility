import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';

import InnerSidebar from './inner-sideabar';

export default function Sidebar({
  userName,
  userAddress,
  userDescription,
  userProfilePicture,
  utilitiesCreated,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <InnerSidebar
                  name={userName}
                  pfp={userProfilePicture}
                  description={userDescription}
                  address={userAddress}
                  utilitiesCreated={utilitiesCreated}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:h-[100%] lg:inset-y-0 lg:z-0 lg:flex lg:w-[30%] lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <InnerSidebar
          name={userName}
          pfp={userProfilePicture}
          description={userDescription}
          address={userAddress}
          utilitiesCreated={utilitiesCreated}
        />
      </div>

      <div className="lg:hidden bg-secondary py-4 mt-4 fixed flex  mx-auto w-full px-4 sm:px-6">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-indigo-200 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-white"></div>
        <a href="#">
          <span className="sr-only">profile</span>
          <img
            className="h-8 w-8 rounded-full bg-white"
            src={userProfilePicture}
            alt=""
          />
        </a>
      </div>
    </>
  );
}