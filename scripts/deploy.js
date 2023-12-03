async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log(`Deploying contract with the account: ${deployer.address}`);
  
    const auction = await ethers.deployContract("Auction");
  
    console.log(`Contract address: ${await auction.getAddress()}`);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });