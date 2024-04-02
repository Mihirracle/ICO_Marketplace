// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.18",
//   networks: {
//     localhost: {
//       url: "http://127.0.0.1:8545",
//       accounts: {
//         mnemonic: "test test test test test test test test test test test junk",
//       },
//     },
//   },
// };

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.18',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/3TVnY_seczIGPHjeWnMaUtXNQPQsZJw3',
      accounts: ['c064c081b28a7f2324592bbf257c4664c563d99f3d64296919e4c34662d56544'],
      gas: 6000000, // Increase the gas limit
      gasPrice: 10000000000, // Set a higher gas price (10 Gwei)
    },
  },
};
