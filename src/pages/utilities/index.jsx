import Utilities from '../../components/utilities/utilities.component';
import RootLayout from '../../layouts/layout';
import Meta from '../../layouts/Meta';

const UtilityPage = () => {
  return <Utilities />;
};

UtilityPage.getLayout = (page) => {
  return (
    <RootLayout
      meta={
        <Meta
          title="Utilities"
          description="View all the utilities in one page"
        />
      }
    >
      {page}
    </RootLayout>
  );
};

export default UtilityPage;
