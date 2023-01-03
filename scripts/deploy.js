//imports
const { ethers } = require("hardhat");

// async main
async function main() {

  const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contract...");
  const simpleStorage = await simpleStorageFactory.deploy();
  await simpleStorage.deployed();

  console.log(`Deployed contract to ${simpleStorage.address}`)

  // getting the current value from the contract
  const currentValue = await simpleStorage.retrieve();
  console.log(currentValue.toString());

  // update the current value 
  const transResponse = await simpleStorage.store(5);
  await transResponse.wait(1);

  const updatedValue = await simpleStorage.retrieve();
  console.log(updatedValue.toString());
}

async function verify(conctractAddress, args) {

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });