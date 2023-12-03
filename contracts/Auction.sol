//SPDX-License-Identifier: Unlicensed

pragma solidity >= 0.8.0 < 0.9.0;

contract Auction {

    address public manager;
    constructor() {
        manager = msg.sender;
    }

    struct AuctionSubject {
        string title;
        string description;
        uint id;
        uint amount;
        address winner;
        bool finished;
    }

    mapping(uint => AuctionSubject) fetch_auctionSubject;

    modifier confidential{
        require(msg.sender == manager,"sorry! you don't have permission");
        _;
    }

    function new_auction_subject(string memory _title,string memory _desc,uint _id) public confidential {
        AuctionSubject storage auctionSubject = fetch_auctionSubject[_id];
        auctionSubject.title = _title;
        auctionSubject.description = _desc;
        auctionSubject.id = _id;
    }

    function new_participant(uint _id,uint _amount) public {
        AuctionSubject storage theAuction = fetch_auctionSubject[_id];
        require(theAuction.finished == false,"auction closed");
        if (_amount > theAuction.amount){
            theAuction.winner = msg.sender;
            theAuction.amount = _amount;
        } 
    }

    function close_auction(uint _id) public confidential {
        AuctionSubject storage theAuction = fetch_auctionSubject[_id];
        require(theAuction.amount != 0, "the auction doesn't started yet");
        theAuction.finished = true;
    }

    function return_auction(uint _id) public confidential view returns(AuctionSubject memory){
        AuctionSubject storage theAuction = fetch_auctionSubject[_id];
        return theAuction;
    }
}