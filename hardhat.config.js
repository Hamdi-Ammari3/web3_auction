/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const ALCHEMY_API_KEY = //node provider API_KEY (Alchemy is used in this project)
const WALLET_PRIVATE_KEY = //wallet PRIVATE KEY 

module.exports = {
  solidity: "0.8.19",
  defaultNetwork: 'sepolia',
  networks: {
    sepolia: {
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[WALLET_PRIVATE_KEY]
    }
  }
};
