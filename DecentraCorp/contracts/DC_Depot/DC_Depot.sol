pragma solidity ^0.4.21;

import './DCD_Confirmation.sol';
/*
  @title Forra
  @author Christopher Dixon
  @notice This contract is inherits both SafeMath and Ownable from the Open-Zepplin library
  @notice This contract is designed to be inheritable and serves as the final contract for the Forra contract stack
  @notice This contract serves the purpose of creating a escrow AND facilitating a purchase
*/
contract DC_Depot is DCD_Confirmation {
/*
@notice the purchase function is a top level function which calls two seperate internal functions _purchase and
  createEscrow
  @param _itemIPFSHash is the input IPFS hash of an item
  @param _priceEther is the input price of the item in ether
  @param _priceArtis is the input item price in artis tokens
  @param _artisPriceMod is a modifier used to determine the discount a buyer recieves when purchasing an item in artis
  @dev it is this devs suggestion to use 10% as the modifier, giving the buyer a ten percent discount for using the
    platforms cryptocurrency
  @param _forraFee is the input fee amount forra receives from a sale on its platform
  @dev this is calculated on the front end
  @param _seller is the input address of the item seller
*/
    function purchase(
      bool _payedInArtis,
      uint _price,
      address _seller
      )
//purchase function is fired when an item is purchased and fires all subsequent internal logic for the purchase and Escrow
       public
       payable
       {

         uint totalPrice = _price + forraFee;
         uint buyersBalance = ArtisToken.balanceOf(msg.sender);

         require(msg.value >= totalPrice || buyersBalance >= _price);

         if(msg.value >= totalPrice) {
           _payedInArtis = false;
           etherForraEarned += forraFee;
             emit ItemBought( _price, 0, msg.sender);
         } else {
           _payedInArtis = true;
           ArtisToken.burn(msg.sender, _price);
     //burns artis token from sellers account because this can be done by the owner(aka the Forra contract)
           ArtisToken.mintToken(this, _price);
             emit ItemBought( 0, _price, msg.sender);
         }


         //adds price buyer payed to total ether Forra contract holds
         createEscrow(_payedInArtis, _price, _seller);
         //createEscrow sets up the struct for that items Escrow which is used by purchase

    }

}
