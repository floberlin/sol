const { expect } = require("chai");

describe("Greeter", function() {
  it("Should return the new greeting once it's changed", async () => {
    const Greeter = await ethers.getContractFactory("Greeter");
    const GreeterV2 = await ethers.getContractFactory("GreeterV2");

    const instance = await upgrades.deployProxy(Greeter, ['Hello, world!']);
    const upgraded = await upgrades.upgradeProxy(instance.address, GreeterV2);

    const value = await upgraded.greet();
    expect(value.toString()).to.equal("Hello, world!");
  });
});