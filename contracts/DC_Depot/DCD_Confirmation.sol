pragma solidity ^0.4.21;

import './DCD_Escrow.sol';

contract DCD_Confirmation is DCD_Escrow  {

function ConfirmItemReciept(uint _escrowId,   string _itemIPFSHash) public onlyOwner {

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

if(!_payedInIDC) {
  _seller.transfer(_price);
} else {
  uint newIDCPrice = (_price / _IDC_PriceMod) + _price;
  decentraCorp.proxyMint(_seller, newIDCPrice);
}

  decentraCorp.mintItemToken(_itemIPFSHash);
  uint _tokenId = PoPT.ipfsLookUp(_itemIPFSHash);
  PoPT.safeTransferFrom(this, _buyer, _tokenId);
  decentraCorp.proxyMint(_buyer, _IDCBuyerMultiplier);

  decentraCorp.proxyMint(_seller, _IDCSellerMultiplier);


}

function releaseFundsBackToBuyer(uint _escrowId) public onlyOwner {
  Escrow memory escrow = itemInEscrow[ _escrowId];
  bool _payedInIDC = escrow.PayedInIDC;
  address _buyer = escrow.buyer;
    uint _price = escrow.Price;
    if(!_payedInIDC) {
      _buyer.transfer(_price);
    } else {
      decentraCorp.proxyMint(_buyer, _price);
    }
  }

}
