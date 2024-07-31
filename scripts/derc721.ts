import { ethers } from "hardhat";

async function main() {
  const ContractFactory = await ethers.getContractFactory("Pasta");

  // const instance = await ContractFactory.deploy("0x2a242b0FE0e8855eFBd0F1F223Aff56aeE2678f8");
  const instance = await ContractFactory.deploy(
    "0x3e290FE8F2A5dB60A81cb47EA296e0299048Dd71"
  );
  await instance.waitForDeployment();

  console.log(`Contract deployed to ${await instance.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
