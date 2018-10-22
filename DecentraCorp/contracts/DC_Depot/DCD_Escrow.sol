pragma solidity ^0.4.21;

import "./Decentra-Controlled.sol";
/*
@title Forra Escrow
@author Christopher Dixon
@notice This contract is inherits both SafeMath and Ownable from the Open-Zepplin library
@notice This contract is designed to be inheritable and serves as the second contract for the Forra contract stack
@notice This contract serves the purpose of creating an Escrow for funds sent to the Forra contract when a purchase is made
@param tokensInEscrow maps a specific token to a specific escrow
*/

contract ForraEscrow is Ownable, DecentraControlled {
/*
  @notice ItemBought is an event telling the front end an item has been bought successfully
*/
event ItemBought(
  uint pricePayedEther,
  uint pricePayedScraps,
  address buyer
  );

/*
  @notice Escrow struct stores information about the escrow for a specific sale this includes Forra sales and P2P sales
  @param purchaseTime tracks when an item was purchased
  @param PriceEther is the ether price an item costs
  @param PriceArtis is the Artis price of an item
  @param artisPriceMod is used to determine how much extra Artis the Forra contract should issue
    when Artis is used to buy an item at a discount
  @param buyer stores the buyers address
  @dev the buyers address is used in the function confirmPurchase
  @dev seller stores the sellers address
  @dev the sellers address is used when transfering froms from the escrow when a purchase is confimed
*/
struct Escrow {
  bool PayedInArtis;
  uint Price;
  address buyer;
  address seller;
  }

  mapping (uint => Escrow) public itemInEscrow;

/*
  @notice createEscrow is an internal function used by the purchase function found in the top level Forra contract
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
function createEscrow(
  bool _payedInArtis,
  uint _price,
  address _seller
  )
  internal
  {
  address _buyer = msg.sender;
//sets msg.sender's address as the buyer
    Escrow memory _escrow = Escrow({
       PayedInArtis: bool(_payedInArtis),
       Price: uint(_price),
       buyer: address(_buyer),
       seller: address(_seller)
      });
      //sets input info into a specific escrow which gets stored under that tokens ID
      //this chunk of code creates a new struct out of the input variables
globalEscrowCount++;

  itemInEscrow[globalEscrowCount] = _escrow;
  //adds the newly created escrow to the tokensInEscrow mapping using the tokens ID as it identifier
  }
}
