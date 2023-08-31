import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import {
  Cog6ToothIcon,
  FolderIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState } from 'react';

import Logo from '/public/logo.svg';

import SettingsForm from './SettingsForm';
import UtilityList from './utilitylist';

const navigation = [
  { name: 'Utilities', href: '#', icon: FolderIcon, current: true },
  { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false },
];

const utilitiesNavigation = [
  { name: 'Created', href: '#' },
  { name: 'Redeemed', href: '#' },
];

const settingsNavigation = [
  { name: 'Account', href: '#', current: true },
  { name: 'Billing', href: '#', current: false },
  { name: 'Notifications', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const ProfileUpdate = ({ data }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [current, setCurrent] = useState('Utilities');

  const [utilitySelector, setUtilitySelector] = useState('Created');

  return (
    <div className=" h-full ">
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 xl:hidden"
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
              <div className="fixed inset-0" />
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
                    <div className="absolute left-full z-10 bg-background top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-gray-900"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-background px-6 ring-1 ring-white/10">
                    <Link href="/" className="flex h-16 shrink-0 items-center">
                      <Image
                        className="h-8 w-auto sm:h-10 "
                        src={Logo}
                        alt="Logo"
                      />
                      <span className="mx-3 cursor-pointer text-2xl font-semibold text-gray-900">
                        PointSix
                      </span>
                    </Link>

                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    current === item.name
                                      ? 'bg-gray-400 text-gray-900'
                                      : 'text-gray-800 hover:text-gray-900 hover:bg-gray-300',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                  onClick={() => setCurrent(item.name)}
                                >
                                  <item.icon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto  border-r-2 border-gray-300 px-6 ring-1 ring-white/5">
            {/* <Link href="/" className="flex h-16 shrink-0 items-center">
              <Image className="h-8 w-auto sm:h-10 " src={Logo} alt="Logo" />
              <span className="mx-3 cursor-pointer text-2xl font-semibold text-gray-900">
                PointSix
              </span>
            </Link> */}
            <nav className="flex mt-20 pt-20 flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            current === item.name
                              ? 'bg-gray-400 text-gray-900'
                              : 'text-gray-800 hover:text-gray-900 hover:bg-gray-300',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                          onClick={() => setCurrent(item.name)}
                        >
                          <item.icon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  {data && (
                    <a
                      href="#"
                      className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-400"
                    >
                      <img
                        className="h-8 w-8 rounded-full bg-background"
                        src={data?.profilePhoto}
                        alt="User Profile"
                      />
                      <span className="sr-only">Your profile</span>
                      {data?.userName && (
                        <span aria-hidden="true">{data?.userName}</span>
                      )}
                    </a>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="xl:pl-72 h-full">
          {/* Sticky search header */}
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-gray-200 bg-background rounded-full m-2 px-4 shadow-md sm:px-6 lg:px-8 md:max-w-[20rem] lg:max-w-xl">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-900 xl:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 bg-transparent">
              <form className="flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500"
                    aria-hidden="true"
                  />
                  <input
                    id="search-field"
                    className="block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-gray-900 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    type="search"
                    name="search"
                  />
                </div>
              </form>
            </div>
          </div>

          <main className=" h-screen">
            <header className="border-b border-white/5">
              {/* Secondary navigation */}
              <nav className="flex overflow-x-auto py-4">
                <ul
                  role="list"
                  className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-400 sm:px-6 lg:px-8"
                >
                  {current === 'Utilities'
                    ? utilitiesNavigation.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className={
                              utilitySelector === item.name
                                ? 'text-gray-800'
                                : ' text-gray-400'
                            }
                            onClick={() => setUtilitySelector(item.name)}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))
                    : settingsNavigation.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className={' text-gray-800'}>
                            {item.name}
                          </a>
                        </li>
                      ))}
                </ul>
              </nav>
            </header>

            {/* Right Subsection below the secondary navbar */}
            {current === 'Settings' ? (
              <SettingsForm data={data} />
            ) : (
              <UtilityList data={data} utilitySelector={utilitySelector} />
            )}
            {/* <SettingsForm /> */}
            {/* <ActivityList/> */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
