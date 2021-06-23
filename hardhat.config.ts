import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import { HardhatUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-waffle";
import "@openzeppelin/hardhat-upgrades"
import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";
// TODO: reenable solidity-coverage when it works
// import "solidity-coverage";

const INFURA_API_KEY = process.env.INFURA_API_KEY || "d8e7160dc78d48dba6ca40b11fdf1cd5";
const PRIVATE_KEY =
  process.env.PRIVATE_KEY! ||
  "0xa684b6236863d9a45c7f72a990238965e91068ef53bb3a1fbcc5be111720c743"; // well known private key
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || 'KH8U9YSS7UVX1A1MC4IRFDDNS92Y88V7IN';

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{ version: "0.8.6", settings: {} }],
  },
  networks: {
    hardhat: {},
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
    },
     polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

export default config;