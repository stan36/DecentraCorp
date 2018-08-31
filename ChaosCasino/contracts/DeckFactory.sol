pragma solidity ^0.4.21;
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import 'zeppelin-solidity/contracts/math/SafeMath.sol';
/////////////////////////////////////////////////////////////////////////////////////////////

contract DeckFactory is Ownable {
  using SafeMath for uint256;


struct Card {
string suit;
string number;
uint value;
}

struct Deck {
  Card[] cardsInDeck;
  Card[] cardsOutofDeck;
}
}
