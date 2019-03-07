pragma solidity ^0.4.24;

////////////////////////////////////////////////////////////////////////////////////////////
contract DecentraCorpPoA {
  function proxyIDCMint(address _add, uint _amount) external;
}
/// DecentraCorp PoA inteface
////////////////////////////////////////////////////////////////////////////////////////////

contract IDCFaucet {

DecentraCorpPoA public DCPoA;

constructor (DecentraCorpPoA _add) public {
     DCPoA = (_add);
}

mapping(address => uint) timeLord;

function tapFaucet() public {
    uint timeWiz = timeLord[msg.sender];
    if(timeWiz != 0) {
    require(timeLord[msg.sender] >= timeWiz + 604800); //allows function to be called by one account once a weeks
    }
    DCPoA.proxyIDCMint(msg.sender, 1000000000000000000000);
    timeLord[msg.sender] = now;
}



}
