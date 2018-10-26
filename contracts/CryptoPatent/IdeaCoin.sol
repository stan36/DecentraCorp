pragma solidity ^0.4.24;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "zeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";


contract IdeaCoin is MintableToken, BurnableToken{


  constructor() public {
    totalSupply_ = 1000000000000000000000000;
    balances[msg.sender] = totalSupply_;
  }
  string public constant name = "IdeaCoin";
  string public constant symbol = "IDC";
  uint8 public constant decimals = 18;

}
