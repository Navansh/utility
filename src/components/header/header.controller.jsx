import { useSession } from 'next-auth/react';

import Header from './header.component';

const HeaderComponent = () => {
  const { data: session } = useSession();

  return <Header userSession={session} />;
};

export default HeaderComponent;
