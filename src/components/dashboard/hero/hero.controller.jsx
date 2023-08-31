import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useSession } from 'next-auth/react';
import { useAccount } from 'wagmi';

import { HeroSection } from './hero.component';

const HeroComponent = () => {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { data: sessionData } = useSession();

  return (
    <HeroSection
      connect={openConnectModal}
      isConnected={isConnected}
      sessionData={sessionData}
    />
  );
};

export default HeroComponent;
