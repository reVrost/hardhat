import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200, // Adjust this value based on your contract's deployment frequency
      },
    },
  },
  networks: {
    testnet: {
      url: "https://rpc.testnet.immutable.com",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      allowUnlimitedContractSize: true,
    },
    devnet: {
      url: "https://rpc.dev.immutable.com",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      allowUnlimitedContractSize: true,
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/2EgoND6GJcW-4gIAcIIRZt4c6drCdWAC",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      allowUnlimitedContractSize: true,
    },
  },
  etherscan: {
    apiKey: {
      devnet: "f2d78096-25bb-4d34-9b58-0b87b8f2966e",
    },
  },
};

export default config;
