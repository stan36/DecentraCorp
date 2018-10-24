pragma solidity ^0.4.21;
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import 'zeppelin-solidity/contracts/math/SafeMath.sol';
/////////////////////////////////////////////////////////////////////////////////////////////
contract DecentraCorpPoA {
  function exchangeChaosCoin(uint _amount, address _player) public;
}
/////////////////////////////////////////////////////////////////////////////////////////////
contract ChaosCoin {
    function balanceOf(address _addr) public constant returns (uint);
    function mint(address _to, uint256 _value) external;
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
  DecentraCorpPoA public decentraCorp;
  ReplicationBlockGenerator public RBG;

  uint randNum = 0;

  event RandomNumberSet(uint _number);
  event RandomNumberRequest();

  mapping(address => bool) gameContracts;

  modifier onlyReplication() {
    require(RBG.checkIfRep(msg.sender) == true);
    _;
  }
  //modifier requires that the address calling a function is a replication

  constructor(ChaosCoin _CCC, DecentraCorpPoA _DCP, ReplicationBlockGenerator _RBG) public {
    chaosCoin = ChaosCoin(_CCC);
    decentraCorp = DecentraCorpPoA(_DCP);
    RBG = ReplicationBlockGenerator(_RBG);
  }
  function setRepGBAdd(address _add) public onlyOwner {
    RBG = ReplicationBlockGenerator(_add);
  }

  function setDCadd(address _add) public onlyOwner {
    decentraCorp = DecentraCorpPoA(_add);
  }

  function setCCadd(address _add) public onlyOwner {
    chaosCoin = ChaosCoin(_add);
  }

  function buyChaosCoin(uint _amount, address _player) public onlyOwner {
    chaosCoin.mint(_player, _amount);
  }


  function cashOut(uint _amount) public {
    require(chaosCoin.balanceOf(msg.sender) >= _amount);
    chaosCoin.burn(msg.sender, _amount);
    decentraCorp.exchangeChaosCoin(_amount, msg.sender);
  }

  function setRandomNum(uint _randNum) external onlyReplication {
      randNum = _randNum;
      emit RandomNumberSet(randNum);
  }

  function getRandomNum() public returns(uint) {
      return randNum;
      emit RandomNumberRequest();
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////
