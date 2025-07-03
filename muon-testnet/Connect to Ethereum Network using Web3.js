const Web3 = require('web3');

// Connect to Infura or Alchemy
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

web3.eth.getBlockNumber().then((block) => {
  console.log('Current Ethereum block number:', block);
});
