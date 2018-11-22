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

  uint randNum = 6874925454687615356;
  mapping(address => uint) bets;
  event RandomNumberSet(uint _number);

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

  function buyChaosCoin() public payable {
    uint amount = msg.value;
    uint _amount = amount.mul(1000);
    chaosCoin.mint(msg.sender, _amount);
  }


  function cashOut(uint _amount) public {
    require(chaosCoin.balanceOf(msg.sender) >= _amount);
    chaosCoin.burn(msg.sender, _amount);
    uint amount = _amount.div(1000);
    msg.sender.transfer(amount);
  }

  function setRandomNum(uint _randNum) external onlyReplication {
      randNum = _randNum;
      emit RandomNumberSet(randNum);
  }

  function getRandomNum() public view returns(uint) {
      return randNum;
  }

  function placeBet(uint _bet) public {
    require(chaosCoin.balanceOf(msg.sender) >= _bet);
    chaosCoin.burn(msg.sender, _bet);
    bets[msg.sender] = _bet;
  }


  function updateUserBalance( bool _won) public {
    uint currentBalance = bets[msg.sender];
    if(_won == true){
      chaosCoin.mint(msg.sender, currentBalance * 2);
    }else{
      bets[msg.sender] = 0;
    }
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////
