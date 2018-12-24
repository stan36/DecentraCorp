pragma solidity ^0.4.21;

import './DCD_Confirmation.sol';

contract DC_Depot is DCD_Confirmation {

  constructor(address _pop, address _idc, address _DC) public  {
      PoPT = ProofOfPurchaseToken(_pop);
      IDC = IdeaCoin(_idc);
      decentraCorp = DecentraCorpPoA(_DC);
  }

    function purchase(
      bool _payedInIDC,
      uint _price,
      address _seller
      )
       public
       payable
       {

         uint DCDfee = msg.value / 20;
         uint totalPrice = _price + DCDfee;
         uint buyersBalance = IDC.balanceOf(msg.sender);

         require(msg.value >= totalPrice || buyersBalance >= _price);

         if(msg.value >= totalPrice) {
           _payedInIDC = false;
           etherEarned += DCDfee;
             emit ItemBought( _price, 0, msg.sender);
         } else {
           _payedInIDC = true;
           decentraCorp.proxyBurn(msg.sender, _price);
             emit ItemBought( 0, _price, msg.sender);
         }

         createEscrow(_payedInIDC, _price, _seller);


    }

}
