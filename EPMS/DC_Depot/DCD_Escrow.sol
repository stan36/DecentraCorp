pragma solidity ^0.4.21;

import "./DecentraControlled.sol";


contract DCD_Escrow is Ownable, DecentraControlled {

event ItemBought(
  uint pricePayedEther,
  uint pricePayedIDC,
  address buyer
  );


struct Escrow {
  bool PayedInIDC;
  uint Price;
  address buyer;
  address seller;
  }

  mapping (uint => Escrow) public itemInEscrow;

function createEscrow(
  bool _payedInIDC,
  uint _price,
  address _seller
  )
  internal
  {
  address _buyer = msg.sender;

    Escrow memory _escrow = Escrow({
       PayedInIDC: bool(_payedInIDC),
       Price: uint(_price),
       buyer: address(_buyer),
       seller: address(_seller)
      });

globalEscrowCount++;

  itemInEscrow[globalEscrowCount] = _escrow;

  }
}
