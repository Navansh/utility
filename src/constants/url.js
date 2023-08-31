const API_URL = 'http://localhost:2000';

const getAlchemyRPCUrl = (chainId) => {
  let RPC_URL, API_KEY;
  switch (chainId) {
    case 80001:
      RPC_URL = 'https://polygon-mumbai.g.alchemy.com/v2/';
      API_KEY = process.env.NEXT_PUBLIC_MUMBAI_ALCHEMY_API_KEY;
      break;

    default:
      RPC_URL = 'https://polygon.g.alchemy.com/v2/';
      API_KEY = process.env.NEXT_PUBLIC_POLYGON_ALCHEMY_API_KEY;
      break;
  }

  return RPC_URL + API_KEY;
};

module.exports = {
  API_URL,
  getAlchemyRPCUrl,
};
