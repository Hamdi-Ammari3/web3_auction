const { ethers } = require("hardhat");

const contract = require('../artifacts/contracts/Auction.sol/Auction.json')
const netwrok = 'sepolia';
const ALCHEMY_API_KEY = //node provider API_KEY (Alchemy is used in this project)
const WALLET_PRIVATE_KEY = //wallet PRIVATE KEY 
const CONTRACT_ADDRESS = //the deployed contract address

//Provider
const provider = new ethers.AlchemyProvider(netwrok,ALCHEMY_API_KEY);

//Signer
const signer = new ethers.Wallet(WALLET_PRIVATE_KEY,provider)

//Contract
const auction_contract = new ethers.Contract(CONTRACT_ADDRESS,contract.abi,signer);

const main = async() => {
    //add new auction subject
    const new_auction_subject = await auction_contract.new_auction_subject('Messi jersey','the GOAT Leo Messi iconic jersey',1);
    await new_auction_subject.wait();
    //new participant entered the auction
    const new_participant = await auction_contract.new_participant(1,220);
    await new_participant.wait();
    //close the auction
    const close_auction = await auction_contract.close_auction(1);
    await close_auction.wait();
    //return the auction status
    const return_auction = await auction_contract.return_auction(1);
    console.log(return_auction)
}

main()