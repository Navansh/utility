import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// import ConnectWallet from "../wallet/profile-entry.component";
// import WalletConnectContainer from "../wallet/connect.container";
// import WalletConnectedContainer from "../wallet/connected.container";
import Logo from '/public/logo.svg';

const Header = ({ userSession }) => {
  const [navbarBorder, setNavbarBorder] = useState(false);
  const setBorder = () => {
    if (window.scrollY > 50) {
      setNavbarBorder(true);
    } else {
      setNavbarBorder(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setBorder);
    return () => {
      window.removeEventListener('scroll', setBorder);
    };
  });

  return (
    <>
      <div
        className={`${navbarBorder ? 'border-b-2 border-b-white' : ''}
        } fixed z-20 mx-auto w-full px-4 backdrop-blur-md sm:px-6`}
      >
        <div className="flex items-center justify-between py-2 border-gray-100 md:space-x-10">
          <div className="flex items-center justify-start">
            <Link href="/" className="flex items-center">
              <Image className="h-8 w-auto sm:h-10 " src={Logo} alt="Logo" />
              <span className="mx-3 cursor-pointer text-2xl font-semibold text-gray-900">
                PointSix
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-between gap-5">
            <div className=" font-inter">
              <Link
                href="/utilities"
                className="text-base xl:text-lg text-gray-700 px-4 hover:text-gray-900 font-bold"
              >
                All Utilities
              </Link>
              {userSession?.user?.userName && (
                <Link
                  href={`/${userSession?.user?.userName}`}
                  className="text-base xl:text-lg border-l-2 px-4 text-gray-700 hover:text-gray-900 font-bold"
                >
                  My Offerings
                </Link>
              )}
              {userSession?.user?.id && (
                <Link
                  href={`/dashboard/${userSession?.user?.id}`}
                  className="text-base xl:text-lg border-l-2 px-4 text-gray-700 hover:text-gray-900 font-bold"
                >
                  Profile
                </Link>
              )}
            </div>
            <ConnectButton showBalance={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
