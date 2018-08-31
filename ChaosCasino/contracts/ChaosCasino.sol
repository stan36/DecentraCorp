pragma solidity ^0.4.21;
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import 'zeppelin-solidity/contracts/math/SafeMath.sol';
/////////////////////////////////////////////////////////////////////////////////////////////
contract ChaosCoin {
    function transferContractOwnership(address newOwner) public;
    function balanceOf(address _addr) public constant returns (uint);
    function mintToken(address _to, uint256 _value) external;
    function burn(address _from, uint256 _value)  external;
    function totalSupply() public constant returns (uint);
}
/////////////////////////////////////////////////////////////////////////////////////////////
contract ChaosCasino is Ownable {

  using SafeMath for uint256

  ChaosCoin public chaosCoin;

  uint etherBalance;
  uint chaosBalance = chaosCoin.balanceOf(this);

  mapping(address => bool) gameContracts;
  mapping(address => uint) purchaseTracker;


  function buyChaosCoin(uint _etherDollarPrice) public payable {
    require(msg.value > 0);
    uint amount = msg.value / _etherDollarPrice;
    chaosCoin.mintToken(msg.sender, amount);
    etherBalance.add(msg.value);
    purchaseTracker[msg.sender] = msg.value;
  }

  function addGameContract(address _newGame) public {
    gameContracts[_newGame] = true;
  }

  function removeGameContract(address _gameAdd) public {
    gameContracts[_gameAdd] = false;
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////
