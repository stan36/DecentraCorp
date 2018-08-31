pragma solidity ^0.4.21;
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import 'zeppelin-solidity/contracts/math/SafeMath.sol';
/////////////////////////////////////////////////////////////////////////////////////////////
contract ChaosCoin {
    function balanceOf(address _addr) public constant returns (uint);
    function mintToken(address _to, uint256 _value) external;
    function burn(address _from, uint256 _value)  external;
}
/////////////////////////////////////////////////////////////////////////////////////////////
contract ChaosCasino is Ownable {

  using SafeMath for uint256

  ChaosCoin public chaosCoin;

  uint etherBalance;
  uint chaosBalance = chaosCoin.balanceOf(this);
  address decentraCorp;

  mapping(address => bool) gameContracts;



  function buyChaosCoin() public payable {
    require(msg.value > 0);
    uint amount = msg.value / .001 ether;
    chaosCoin.mintToken(msg.sender, amount);
    etherBalance.add(msg.value);

  }

  function addGameContract(address _newGame) public onlyowner {
    gameContracts[_newGame] = true;
  }

  function removeGameContract(address _gameAdd) public onlyOwner {
    gameContracts[_gameAdd] = false;
  }

  function setDecentraCorpContract(address _DCAdd) public onlyOwner {
    DecentraCorp = _DCAdd;
  }

  function withdrawlToDecentraCorp(uint _etherDollarPrice) public onlyOwner {
    uint etherDollar = etherBalance / _etherDollarPrice;
    uint etherEarned = etherDollar - (etherDollar - chaosBalance);
    decentraCorp.transfer(etherEarned);
    chaosCoin.burn(this, chaosBalance);
  }

  function cashOut() public {
    require(chaosCoin.balanceOf(msg.sender) >= 1);
    uint chaosBalance = chaosCoin.balanceOf(msg.sender) * .001;
    msg.sender.transfer(chaosBalance);
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////
