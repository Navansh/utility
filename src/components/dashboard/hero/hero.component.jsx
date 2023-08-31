import Link from 'next/link';

export const HeroSection = ({ isConnected, sessionData, connect }) => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-16 text-center sm:px-6 md:pt-32 lg:px-8">
      <div>
        <h2 className="text-6xl text-gray-700 mt-28">
          Unleash the full potential of your NFTs with{' '}
          <span className=" primary-gradient-text mt-4">Utilities</span>
        </h2>

        <span className="mx-auto block w-4/6 my-5 text-2xl font-semibold">
          Give your NFT a New life and your Users a new Purpose
        </span>
      </div>
      <div className="rounded-md sm:shrink-0 md:ml-3 md:mt-0">
        {isConnected && sessionData ? (
          <Link href="/builder">
            <button
              type="click"
              className="primary-gradient-background mt-8 flex w-52 items-center justify-center rounded-full border border-transparent px-2 py-4 text-base font-bold uppercase text-white"
            >
              Create now
            </button>
          </Link>
        ) : (
          <button
            type="click"
            onClick={() => connect()}
            className="primary-gradient-background mb-28 mt-8 flex w-52 items-center justify-center rounded-full border border-transparent px-2 py-4 text-base font-bold text-white"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </section>
  );
};
