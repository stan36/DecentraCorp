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

contract Entropy21 is Ownable {
  using SafeMath for uint256;

  ChaosCoin public chaosCoin;

  uint public gameCount;


  Deck[] public decks;

  struct Card {
  string suit;
  string number;
  uint value;
  }

  struct Deck {
    Card[] cardsInDeck;
    Card[] cardsOutofDeck;
  }

  function newGame() public {

  }

}
