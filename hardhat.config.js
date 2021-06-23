require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {

defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/d8e7160dc78d48dba6ca40b11fdf1cd5",
      accounts: ['a684b6236863d9a45c7f72a990238965e91068ef53bb3a1fbcc5be111720c743']
    },
    polygon: {
      url: "https://polygon-mainnet.infura.io/v3/c25fa5dc5bb3495683e0d455db8d069c",
      accounts: ['a684b6236863d9a45c7f72a990238965e91068ef53bb3a1fbcc5be111720c743']
    }
  },

  solidity: "0.8.6",
};

