require("@nomicfoundation/hardhat-toolbox");
const env = require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number");

/** @type import('hardhat/config').HardhatUserConfig */
const GOERLI_RPC_URL = process.env.URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  // defaultNetwork: "hardhat",
  defaultNetwork: "goerli",

  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    }
  }
};
