// scripts/create-sc.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await upgrades.deployProxy(Greeter, ['Hello world!']);
  await greeter.deployed();
  console.log("Greeter deployed to:", greeter.address);
}

main();