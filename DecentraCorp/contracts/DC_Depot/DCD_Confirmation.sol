pragma solidity ^0.4.21;

import './DCD_Escrow.sol';
/*
  @title Forra Confirmation
  @author Christopher Dixon
  @notice This contract is inherits both SafeMath and Ownable from the Open-Zepplin library
  @notice This contract is designed to be inheritable and serves as the fourth contract for the Forra contract stack
  @notice This contract serves the purpose of facilitating the confirmation of a successful item receipt
  @dev this function is set to onlyDev to save the end user buyer from having to pay the gas costs associated with
    calling this function as well as to safe guard against a malicious buyer trying to wrongfully release an escrow
*/
contract DCD_Confirmation is DCD_Escrow  {
/*
@notice ConfirmItemReciept is a dev only function that releases an escrow when a buyer confirms the successful
  receipt of an item
  @param _tokenId is the input number representing a specific item and its escrow
@dev this function can also be used to over-ride an escrow after mediation
*/
function ConfirmItemReciept(uint _escrowId,   string _itemIPFSHash) public onlyDev {
//allows end user to confirm successful reciept of an item from Forra
Escrow memory escrow = itemInEscrow[_escrowId];

  bool _payedInArtis = escrow.PayedInArtis;
  address _buyer = escrow.buyer;
  address _seller = escrow.seller;
  uint _price = escrow.Price;
  uint artisSellerMultiplier = PoPT.balanceOf(_seller);
//sets the amount of PoP tokens the seller has as to the variable artisSellerMultiplier
  uint artisBuyerMultiplier = PoPT.balanceOf(_buyer);
//sets the amount of PoP tokens the buyer has to a variable artisBuyerMultiplier


if(artisSellerMultiplier == 0) {
    artisSellerMultiplier = 1;
}
if(artisBuyerMultiplier == 0) {
    artisBuyerMultiplier = 1;
}
//if statements keep code from failing on new users to the platform
artisSellerMultiplier = artisSellerMultiplier * 5000000000000000000;
artisBuyerMultiplier = artisBuyerMultiplier * 5000000000000000000;
//these modulate the multiplier to account for Artis decimals

  PoPT.mintItemToken(_itemIPFSHash);
  uint _tokenId = PoPT.ipfsLookUp(_itemIPFSHash);
  PoPT.safeTransferFrom(this, _buyer, _tokenId);
  ArtisToken.transfer(_buyer, artisBuyerMultiplier);
//transfers amount of Artis from contract to buyer dependant upon how many PoP tokens the buyer holds
  ArtisToken.transfer(_seller, artisSellerMultiplier);
//transfers Artis from contract to the seller dependant upon how many PoP tokens the seller holds

    if(!_payedInArtis) {
      _seller.transfer(_price);
    } else {
      uint newArtisPrice = (_price / artisPriceMod) + _price;
      ArtisToken.transfer(_seller, newArtisPrice);
    }

}

/*
  @notice releaseFundsBackToBuyer is a devOnly function allowing a dev team member to release
    escrowed funds back to the buyer should it be found necissary to do so
  @param _tokenId is the token id associated with the escrow in question
*/
function releaseFundsBackToBuyer(uint _escrowId) public onlyDev {
  Escrow memory escrow = itemInEscrow[ _escrowId];
  //sets var escrow to a PoP token specific escrow
  bool _payedInArtis = escrow.PayedInArtis;
  address _buyer = escrow.buyer;
  //stes _buyer as message sender
    uint _price = escrow.Price;
    if(!_payedInArtis) {
      _buyer.transfer(_price);
    } else {
      ArtisToken.transfer(_buyer, _price);
    }
  }

}
