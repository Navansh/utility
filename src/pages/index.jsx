import Dashboard from '../components/dashboard/dashboard.component';
import RootLayout from '../layouts/layout';
import Meta from '../layouts/Meta';

const Index = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

Index.getLayout = (page) => {
  return (
    <RootLayout
      meta={<Meta title="Dashboard" description="One stop for NFT utilities" />}
    >
      {page}
    </RootLayout>
  );
};

export default Index;
