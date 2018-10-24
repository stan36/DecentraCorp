pragma solidity ^0.4.21;

import './DCD_Escrow.sol';

contract DCD_Confirmation is DCD_Escrow  {

function ConfirmItemReciept(uint _escrowId,   string _itemIPFSHash) public onlyDev {

Escrow memory escrow = itemInEscrow[_escrowId];

  bool _payedInIDC = escrow.PayedInIDC;
  address _buyer = escrow.buyer;
  address _seller = escrow.seller;
  uint _price = escrow.Price;
  uint _IDCSellerMultiplier = PoPT.balanceOf(_seller);
  uint _IDCBuyerMultiplier = PoPT.balanceOf(_buyer);

if(_IDCSellerMultiplier == 0) {
    _IDCSellerMultiplier = 1;
}
if(_IDCBuyerMultiplier == 0) {
    _IDCBuyerMultiplier = 1;
}

_IDCSellerMultiplier = _IDCSellerMultiplier * 5000000000000000000;
_IDCBuyerMultiplier = _IDCBuyerMultiplier * 5000000000000000000;


  PoPT.mintItemToken(_itemIPFSHash);
  uint _tokenId = PoPT.ipfsLookUp(_itemIPFSHash);
  PoPT.safeTransferFrom(this, _buyer, _tokenId);
  IdeaCoin.transfer(_buyer, _IDCBuyerMultiplier);

  IdeaCoin.transfer(_seller, _IDCSellerMultiplier);


    if(!_payedInArtis) {
      _seller.transfer(_price);
    } else {
      uint newIDCPrice = (_price / _IDC_PriceMod) + _price;
      IdeaCoin.transfer(_seller, newIDCPrice);
    }

}

function releaseFundsBackToBuyer(uint _escrowId) public onlyDev {
  Escrow memory escrow = itemInEscrow[ _escrowId];
  bool _payedInIDC = escrow.PayedInIDC;
  address _buyer = escrow.buyer;
    uint _price = escrow.Price;
    if(!_payedInIDC) {
      _buyer.transfer(_price);
    } else {
      IdeaCoin.transfer(_buyer, _price);
    }
  }

}
