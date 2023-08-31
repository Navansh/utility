import { useRouter } from 'next/router';

import { generateTwitterShareLink } from '../../lib/share-utility/share-on-twitter';
import { useUtilityStore } from '../../store/utility-store';
import { Button } from '../widgets/primitives';
import TimeLeft from './time-left';

const UtilityPreviewCard = () => {
  const utilityInfo = useUtilityStore((state) => state.modalUtility);
  const router = useRouter();

  const formatDate = (inputString) => {
    let date = new Date(inputString);
    let month = date.getUTCMonth();
    let year = date.getUTCFullYear();
    let day = date.getUTCDate();
    return `${day}/${month}/${year}`;
  };

  const handleClaimUtility = () => {
    useUtilityStore.getState().setisModalOpen(false);
    router.push(`/utility/${utilityInfo._id}`);
  };

  return (
    <>
      <div className="z-10 rounded-3xl border-2 border-gray-300 bg-white p-4 pb-3 md:p-5">
        <div className="flex flex-wrap items-center justify-center gap-8">
          <img
            src={
              utilityInfo.image
                ? utilityInfo.image
                : 'https://plus.unsplash.com/premium_photo-1663931932646-15ceb9c0033f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
            }
            alt=""
            width="300px"
            height="300px"
            className="max-h-80 rounded-2xl object-cover w-full"
          />
          <div className="grow">
            <div className="flex justify-between">
              <p className="text-sm">
                By{' '}
                <span className="text-indigo-500 xl:text-base">
                  {utilityInfo.creator && (
                    <span className="text-indigo-500">{`${utilityInfo.creator.address.slice(
                      0,
                      4
                    )}...${utilityInfo.creator.address.slice(-5, -1)}`}</span>
                  )}
                </span>
              </p>
            </div>

            <h1 className="primary-gradient-text py-1 text-xl xl:text-2xl font-bold">
              {utilityInfo.title}
            </h1>

            <div className="flex text-sm justify-between border-b border-gray-300 pb-2.5">
              <p>
                Valid thru{' '}
                <span className="text-sm ml-2 text-gray-400">
                  {formatDate(utilityInfo.endDate)}
                </span>
              </p>
              <p>
                Claims
                <span className="text-sm ml-2 text-gray-400">
                  {utilityInfo?.claims.claimed}/{utilityInfo?.claims.total}
                </span>
              </p>
            </div>

            <div className="mt-5 rounded-xl border border-gray-300 bg-indigo-50 px-3 py-2.5 w-full">
              <h3 className="mb-3 text-base xl:text-lg font-medium text-gray-900">
                How to participate
              </h3>

              <div>
                <p className="pb-1.5 text-sm xl:text-base font-normal">
                  Be a community member of{' '}
                </p>
                <div className="flex rounded border border-gray-300 bg-white/30 px-3 py-2">
                  <p className="text-base xl:text-lg font-semibold text-primary">
                    {utilityInfo.nftCollectionName}
                  </p>
                </div>
                <span className="text-xs font-normal break-words overflow-ellipsis ">
                  {utilityInfo.description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="mb-3 text-center">
            <p className="text-xs font-medium">
              <TimeLeft endDateStr={utilityInfo.endDate} />
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Button
              type="BRAND_PRIMARY"
              rounded="LARGE"
              className="basis-6/12"
              onClick={handleClaimUtility}
            >
              Claim utility
            </Button>
            <Button
              type="BRAND_SECONDARY"
              rounded="LARGE"
              className="basis-6/12"
              onClick={() => {
                const baseUrl = `${window.location.origin}/utility/${utilityInfo._id}`;
                const tweet = `Checkout this awesome utility on PointSix Utility Builder`;
                const twitterShareLink = generateTwitterShareLink(
                  baseUrl,
                  tweet
                );
                window.open(twitterShareLink, '_blank');
              }}
            >
              Share
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UtilityPreviewCard;
