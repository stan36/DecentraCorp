pragma solidity ^0.4.24;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "zeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";


contract ChaosCoin is MintableToken, BurnableToken{

  string public constant name = "ChaosCoin";
  string public constant symbol = "CCC";
  uint8 public constant decimals = 18;

}
