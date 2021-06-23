// scripts/upgrade-sc.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const GreeterV2 = await ethers.getContractFactory("GreeterV2");
  const greeter = await upgrades.upgradeProxy("0x000000000", GreeterV2);
  console.log("Greeter upgraded");
}

main();