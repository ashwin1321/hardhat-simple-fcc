//imports
const { ethers } = require("hardhat");

// async main
async function main() {

  const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contract...");
  const simpleStorage = await simpleStorageFactory.deploy();
  await simpleStorage.deployed();

  console.log(`Deployed contract to ${simpleStorage.address}`)
}

async function verify(conctractAddress, args) {

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });