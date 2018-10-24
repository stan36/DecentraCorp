pragma solidity ^0.4.21;

import './DCD_Confirmation.sol';

contract DC_Depot is DCD_Confirmation {

    function purchase(
      bool _payedInIDC,
      uint _price,
      address _seller
      )
       public
       payable
       {

         uint DCDfee = msg.value / 20;
         uint totalPrice = _price + DCDFee;
         uint buyersBalance = IdeaCoin.balanceOf(msg.sender);

         require(msg.value >= totalPrice || buyersBalance >= _price);

         if(msg.value >= totalPrice) {
           _payedInIDC = false;
           etherForraEarned += DCDFee;
             emit ItemBought( _price, 0, msg.sender);
         } else {
           _payedInIDC = true;
           IdeaCoin.burn(msg.sender, _price);

           IdeaCoin.mintToken(this, _price);
             emit ItemBought( 0, _price, msg.sender);
         }

         createEscrow(_payedInIDC, _price, _seller);


    }

}
