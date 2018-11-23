pragma solidity ^0.4.24;
import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "zeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";
/////////////////////////////////////////////////////////////////////////////////////////////
/// @title IdeaCoin Contract
/// @author DecentraCorp
/// @notice this contract is built from contracts from the zeppelin-solidity library
/// @dev All function calls are currently implement without side effects
contract IdeaCoin is MintableToken, BurnableToken{
  /// @author Christopher Dixon
  /// @notice constructor is run only once when the contract is deployed
  /// @dev sets total supply to 1 million IdeaCoin and transfers is to msg.sender
  constructor() public {
    totalSupply_ = 1000000000000000000000000;
    balances[msg.sender] = totalSupply_;
  }
  ///@param name, symbol, decimals set ERC20 compatable names and conventions
  string public constant name = "IdeaCoin";
  string public constant symbol = "IDC";
  uint8 public constant decimals = 18;
}
