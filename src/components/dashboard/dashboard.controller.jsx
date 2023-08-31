// import React from "react";
import { useEffect, useState } from 'react';

import { useUtilityStore } from '../../store/utility-store';
import { connectWalletUsingEther, isMobile } from '../wallet/wallet.utils';
import UtilityComponent from './utility.component';

const featuredCollection = [
  {
    key: 1,
    collectionName: 'collection',
    claims: '10000',
    utilityName: 'utility',
    image: 'https://picsum.photos/250/300',
  },
  {
    key: 2,
    collectionName: 'collection',
    claims: '10000',
    utilityName: 'utility',
    image: 'https://picsum.photos/250/300',
  },
  {
    key: 3,
    collectionName: 'collection',
    claims: '10000',
    utilityName: 'utility',
    image: 'https://picsum.photos/250/300',
  },
  {
    key: 4,
    collectionName: 'collection',
    claims: '10000',
    utilityName: 'utility',
    image: 'https://picsum.photos/250/300',
  },
];

const DashboardContainer = () => {
  const utility = useUtilityStore((state) => state.utility);
  const setUtility = useUtilityStore((state) => state.setUtility);
  useEffect(() => {
    if (utility.length === 0) {
      setUtility({ utility: featuredCollection });
    }
  }, []);
  const [connectWalletPopup, setConnectWalletPopup] = useState(false);

  let wallet = {};

  const connectWallet = async () => {
    if (isMobile()) {
      window.open('https://metamask.app.link/dapp/demo.pointsix.org', '_blank');
      wallet = await connectWalletUsingEther(referralId);
    } else {
      if (!window?.ethereum) {
        window
          .open(
            'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en',
            '_blank'
          )
          .focus();
      } else if (window?.ethereum?.isMetaMask) {
        //wallet = await connectWalletUsingEther(referralId);

        setConnectWalletPopup(false);
      }
    }
  };

  return (
    <UtilityComponent
      connectWalletPopup={connectWalletPopup}
      setConnectWalletPopup={setConnectWalletPopup}
      connectWallet={connectWallet}
    />
  );
};

export default DashboardContainer;
