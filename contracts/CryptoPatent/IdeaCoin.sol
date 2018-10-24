pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "zeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";


contract IdeaCoin is MintableToken, BurnableToken{

  string public constant name = "IdeaCoin";
  string public constant symbol = "IDC";
  uint8 public constant decimals = 18;

}
