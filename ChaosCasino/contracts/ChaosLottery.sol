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
contract Lottery is Ownable {

using SafeMath for uint256;

ChaosCoin public chaosCoin;
uint public oneDayLotteryCount = 1;
address public chaosCasino;
OneDayLottery[] public shortLotterys;

struct OneDayLottery {
  uint StartTime;
  uint PotValue;
  uint NumberOfPlayers;
  mapping(address => uint) playerWager;
  mapping(address => uint) playerToNumber;
  mapping(uint => address) numberToPlayer;
}



  function enterOneDayLottery(uint _amount) public  {
    OneDayLottery storage l = shortLotterys[oneDayLotteryCount];
    require(now <= l.StartTime + 86400 seconds);
    require(chaosCoin.balanceOf(msg.sender) >= 1000000000000000000);
    chaosCoin.burn(msg.sender, _amount);
    l.NumberOfPlayers++;
    l.PotValue.add(_amount);
    l.playerWager[msg.sender] = _amount;
    l.playerToNumber[msg.sender] = l.NumberOfPlayers;
    l.numberToPlayer[l.NumberOfPlayers] = msg.sender;
  }

  function endOneDayAuction(uint _entropyUnit) public {
    OneDayLottery storage l = shortLotterys[oneDayLotteryCount];
    require(now >= l.StartTime + 86400 seconds);
    address winner = l.numberToPlayer[_entropyUnit];
    uint potTotal = l.PotValue;
    uint houseCut = ((potTotal / 10) / 2);
    uint winnings = potTotal - houseCut;
    chaosCoin.mintToken(chaosCasino, houseCut);
    chaosCoin.mintToken(winner, winnings);
    oneDayLotteryCount++;
  }


}
/////////////////////////////////////////////////////////////////////////////////////////////
