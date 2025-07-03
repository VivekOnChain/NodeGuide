const { ethers } = require('ethers');
const provider = new ethers.providers.InfuraProvider('goerli', 'YOUR_INFURA_KEY');
const wallet = new ethers.Wallet('YOUR_PRIVATE_KEY', provider);

const bytecode = '0x...'; // compiled contract bytecode
const abi = [ /* ... ABI here ... */ ];

(async () => {
  const factory = new ethers.ContractFactory(abi, bytecode, wallet);
  const contract = await factory.deploy();
  console.log('Contract deployed at:', contract.address);
})();
