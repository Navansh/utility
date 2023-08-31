import UtilityModal from '../components/common/utility-modal';

const RootLayout = ({ children }) => {
  return (
    <main className="h-full bg-white">
      {children}
      <UtilityModal />
    </main>
  );
};

export default RootLayout;
