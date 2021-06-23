// scripts/upgrade-sc.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const GreeterV2 = await ethers.getContractFactory("GreeterV2");
  const greeter = await upgrades.upgradeProxy("0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0", GreeterV2);
  console.log("Greeter upgraded");
}

main();