pragma solidity ^0.4.21;
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import 'zeppelin-solidity/contracts/math/SafeMath.sol';
/////////////////////////////////////////////////////////////////////////////////////////////
contract DecentraCorp {
  function exchangeChaosCoin(uint _amount, address _player) public;
}
/////////////////////////////////////////////////////////////////////////////////////////////
contract ChaosCoin {
    function balanceOf(address _addr) public constant returns (uint);
    function mintToken(address _to, uint256 _value) external;
    function burn(address _from, uint256 _value)  external;
}
/////////////////////////////////////////////////////////////////////////////////////////////
contract ReplicationBlockGenerator {
  function checkIfRep(address _add) external returns(bool);
}
/////////////////////////////////////////////////////////////////////////////////////////////
contract ChaosCasino is Ownable {

  using SafeMath for uint256;

  ChaosCoin public chaosCoin;
  DecentraCorp public decentraCorp;
  ReplicationBlockGenerator public RBG;

  uint chaosBalance = chaosCoin.balanceOf(this);
  uint randNum = 0;

  event RandomNumberSet(uint _number);
  event RandomNumberRequest(uint _time);

  mapping(address => bool) gameContracts;

  modifier onlyReplication() {
    require(RBG.checkIfRep(msg.sender) == true);
    _;
  }
  //modifier requires that the address calling a function is a replication

  function setRepGBAdd(address _add) public onlyOwner {
    RBG = ReplicationBlockGenerator(_add);
  }

  function buyChaosCoin(uint _amount, address _player) public onlyOwner {
    chaosCoin.mintToken(_player, _amount);
  }


  function setDecentraCorpContract(address _DCAdd) public onlyOwner {
    decentraCorp = DecentraCorp(_DCAdd);
  }

  function withdrawlToDecentraCorp() public  {
    uint etherDollar = etherBalance / _etherDollarPrice;
    uint etherEarned = etherDollar - (etherDollar - chaosBalance);
    decentraCorp.transfer(etherEarned);
    chaosCoin.burn(this, chaosBalance);
  }

  function cashOut(uint _amount) public {
    require(chaosCoin.balanceOf(msg.sender) >= _amount);
    chaosCoin.burn(msg.sender, _amount);
    decentraCorp.exchangeChaosCoin(_amount, msg.sender);
  }

  function setRandomNum(uint _randNum) external onlyReplication {
      randNum = _randNum;
      RandomNumberSet(randNum);
  }

  function getRandomNum() external returns(uint) {
      return randNum;
      RandomNumberRequest(now);
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////
