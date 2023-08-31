// import { useWalletStore } from "src/store/wallet-store";
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useAccount } from 'wagmi';

import { generateTwitterShareLink } from '../../lib/share-utility/share-on-twitter';
import { useUtilityStore } from '../../store/utility-store';
import TimeLeft from '../common/time-left';
import {
  Step,
  StepPanel,
  StepPanels,
  Steps,
  StepsGroup,
} from '../widgets/elements';
import { Button } from '../widgets/primitives';
import UtilityTemplatesContainer from './builder-components/forms/templates/templates.container';
import UtilityRequirements from './builder-components/forms/utilitty-requirments/utility-requirements';
import UtilityInformation from './builder-components/forms/utility-information/utility-information';
import UtilitySetting from './builder-components/forms/utlity-setting/utility-setting';

const BuilderComponent = () => {
  const { data } = useSession();

  const router = useRouter();

  const handlePublish = () => {
    if (data) {
      useUtilityStore
        .getState()
        .publishUtility()
        .then(() => {
          router.push(`/${data?.user?.userName}`);
        });
    }
  };

  const handleSaveDraft = () => {
    if (data) {
      useUtilityStore
        .getState()
        .saveDraft()
        .then(() => {
          router.push(`/${data?.user?.userName}`);
        });
    }
  };

  return (
    <section className="h-screen bg-background">
      <div className="flex h-full flex-wrap gap-8 px-5 pt-20 lg:flex-nowrap">
        <div className="w-fit shrink-0 grow-0 overflow-y-auto">
          <div className="rounded-2x bg-white pb-px">
            <StepsGroup active={0}>
              <Steps>
                <Step>Templates</Step>
                <Step>Utility</Step>
                <Step>Requirements</Step>
                <Step>Settings</Step>
              </Steps>

              <StepPanels>
                <StepPanel>
                  <UtilityTemplatesContainer />
                </StepPanel>
                <StepPanel>
                  <UtilityInformation />
                </StepPanel>
                <StepPanel>
                  <UtilityRequirements />
                </StepPanel>
                <StepPanel>
                  <UtilitySetting />
                </StepPanel>
              </StepPanels>
            </StepsGroup>
          </div>
        </div>

        <div className="grow">
          <div className="flex items-center justify-between border-b pb-2.5">
            <h3 className="ml-5 text-2xl font-semibold">Allowlist</h3>

            <div className="flex gap-8">
              <Button type="SECONDARY" onClick={handlePublish}>
                Publish
              </Button>

              <Button type="PRIMARY" onClick={handleSaveDraft}>
                Save Draft
              </Button>
            </div>
          </div>
          <UtilityPreviewCard />
        </div>
      </div>
    </section>
  );
};

export default BuilderComponent;

const UtilityPreviewCard = () => {
  const { address } = useAccount();

  const { title, description, image, claims, endDate, selectedCollection } =
    useUtilityStore((state) => ({
      title: state.title,
      description: state.description,
      claims: state.claims,
      endDate: state.endDate,
      confirmationTitle: state.confirmationTitle,
      selectedCollection: state.selectedCollection,
      confirmationDescription: state.confirmationDescription,
      image: state.image,
    }));

  return (
    <>
      <div className="mt-2.5 rounded-3xl border-2 border-gray-400 bg-white p-5 pb-3 md:p-10 md:pb-5">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:flex-nowrap">
          {image && typeof image !== typeof 'string' && (
            <img
              src={URL.createObjectURL(image)}
              alt="User selected image"
              width="300px"
              height="300px"
              className="max-h-80 rounded-2xl object-cover"
            />
          )}
          <div className="grow">
            <div className="flex justify-between">
              <p>
                By{' '}
                <span className="text-indigo-500">{`${address.slice(
                  0,
                  4
                )}...${address.slice(-5, -1)}`}</span>
              </p>
            </div>

            <h3 className="primary-gradient-text text-3xl font-bold">
              {title}
            </h3>
            <p className="primary-gradient-text text-xl font-bold"></p>

            <div className="flex justify-between border-b border-gray-300 pb-2.5">
              <p>
                Valid through{' '}
                <span className="text-gray-400">
                  {new Date(endDate).toLocaleDateString()}
                </span>
              </p>
              <p>
                Claims
                <span className="text-gray-400 ml-2">0/{claims.total}</span>
              </p>
            </div>

            <div className="mt-5 rounded-xl border border-gray-300 bg-indigo-50 px-3 py-2.5">
              <h3 className="mb-3 text-lg font-medium">How to participate</h3>

              <div>
                <p className="pb-1.5 text-base font-normal">
                  Be a community member of{' '}
                </p>
                <div className="flex rounded border border-gray-300 bg-white/30 px-3 py-2">
                  <p className="text-lg font-semibold text-[#5DADF7]">
                    {selectedCollection?.name && selectedCollection?.name}
                  </p>
                </div>
                <span className="text-xs font-normal">
                  Have atleast 1 NFT from the collection
                </span>
              </div>
            </div>
            <div className="mt-3 rounded-xl border border-gray-300 px-3 py-2.5">
              <h3 className="mb-2 text-lg font-medium">Claim Now to</h3>

              <div>
                <div className="flex rounded border border-white bg-white/30  py-2">
                  <p className="text-base  text-gray-500">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="mb-3 text-center">
            <p className="text-xs font-medium">
              <TimeLeft endDateStr={endDate} />
            </p>
          </div>
          <div className="flex items-center gap-5">
            {/* <Button
              type="BRAND_PRIMARY"
              rounded="LARGE"
              className="basis-6/12"
              onClick={onModalOpen}
            >
              Claim utility
            </Button> */}
            <Button
              type="BRAND_PRIMARY"
              rounded="LARGE"
              className="w-full"
              onClick={() => {
                const nftCollection = selectedCollection.name;
                const baseUrl = 'https://pointsix.org/';
                const tweet = `Checkout this awesome utility I created for ${nftCollection} on PointSix utility builder`;
                const twitterShareLink = generateTwitterShareLink(
                  baseUrl,
                  tweet
                );
                window.open(twitterShareLink, '_blank');
              }}
            >
              Share on Twitter
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
