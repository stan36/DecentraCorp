pragma solidity ^0.4.21;
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import 'zeppelin-solidity/contracts/math/SafeMath.sol';
////////////////////////////////////////////////////////////////////////////////////////////
/// @title ChaosCasino
/// @author DecentraCorp
/// @notice this contract is used in conjunction with the CryptoPatent Blockchain
/// @dev All function calls are currently implement without side effects
////////////////////////////////////////////////////////////////////////////////////////////
/// @author Christopher Dixon
/////////////////////////////////////////////////////////////////////////////////////////////
contract DecentraCorpPoA {
  function exchangeChaosCoin(uint _amount, address _player) public;
}
//DecentraCorpPoA interface
/////////////////////////////////////////////////////////////////////////////////////////////
contract ChaosCoin {
    function balanceOf(address _addr) public constant returns (uint);
    function mint(address _to, uint256 _value) external;
    function burn(address _from, uint256 _value)  external;
}
//ChaosCoin interface
/////////////////////////////////////////////////////////////////////////////////////////////
contract ReplicationBlockGenerator {
  function checkIfRep(address _add) external returns(bool);
}
//ReplicationBlockGenerator interface
/////////////////////////////////////////////////////////////////////////////////////////////
contract ChaosCasino is Ownable {

  using SafeMath for uint256;
///@params below are used to import the contracts as usable objects
  ChaosCoin public chaosCoin;
  DecentraCorpPoA public decentraCorp;
  ReplicationBlockGenerator public RBG;
///@param randNum is set by ChaosMiners, preset for testing
  uint randNum = 6874925454687615356;
///@param bets stores the bets of an address
///@dev this will need to be updated for multiple games
  mapping(address => uint) bets;
///@param _number is used by front end games and Chaos Miners
  event RandomNumberSet(uint _number);


///@notice modifier requires that the address calling a function is a replication
///@dev this imports function from replication block generator
  modifier onlyReplication() {
    require(RBG.checkIfRep(msg.sender) == true);
    _;
  }

///@notice constructor sets up outside contract addresses at deployemnt through truffle dark arts
  constructor(ChaosCoin _CCC, DecentraCorpPoA _DCP, ReplicationBlockGenerator _RBG) public {
    chaosCoin = ChaosCoin(_CCC);
    decentraCorp = DecentraCorpPoA(_DCP);
    RBG = ReplicationBlockGenerator(_RBG);
  }

///@notice folowing three function allow for contract upgrades
  function setRepGBAdd(address _add) public onlyOwner {
    RBG = ReplicationBlockGenerator(_add);
  }
  function setDCadd(address _add) public onlyOwner {
    decentraCorp = DecentraCorpPoA(_add);
  }
  function setCCadd(address _add) public onlyOwner {
    chaosCoin = ChaosCoin(_add);
  }

///@notice buyChaosCoin allows anyone to exchange ether for ChaosCoin
  function buyChaosCoin() public payable {
    uint amount = msg.value;
    uint _amount = amount.mul(1000);
    chaosCoin.mint(msg.sender, _amount);
  }

///@notice cahsOut allows ChaosCoin to be cashed out into ether
  function cashOut(uint _amount) public {
    require(chaosCoin.balanceOf(msg.sender) >= _amount);
    chaosCoin.burn(msg.sender, _amount);
    uint amount = _amount.div(1000);
    msg.sender.transfer(amount);
  }

///@notice setRandomNum allows a replication to set a random number in the ChaosCasino
  function setRandomNum(uint _randNum) external onlyReplication {
      randNum = _randNum;
      emit RandomNumberSet(randNum);
  }

///@notice getRandomNum is used by the front end to get a random Number
  function getRandomNum() public view returns(uint) {
      return randNum;
  }

///@notice placeBet Allows a User to place a bet
  function placeBet(uint _bet) public {
    require(chaosCoin.balanceOf(msg.sender) >= _bet);
    chaosCoin.burn(msg.sender, _bet);
    bets[msg.sender] = _bet;
  }

///@notice updateUserBalance allows a front end game to update a users balance
///@dev this function will need to change, or the chaos casino,s front end structure will
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
