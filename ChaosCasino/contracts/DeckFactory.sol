pragma solidity ^0.4.21;
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import 'zeppelin-solidity/contracts/math/SafeMath.sol';
/////////////////////////////////////////////////////////////////////////////////////////////

contract DeckFactory is Ownable {
  using SafeMath for uint256;

  string heart = 'heart';
  string club = 'club';
  string diamond = 'diamond';
  string spade = 'spade';
  string jack = 'jack';
  string queen = 'queen';
  string king = 'king';


struct Card {
string Suit;
string Number;
uint Value;
}

struct Deck {
  Card[] cardsInDeck;
  Card[] cardsOutofDeck;
}

function makeCard() internal {
uint internalsuitCount = 0;
string currentSuit;

if(internalsuitCount >= 4){
  internalsuitCount = 0;
}

if(internalsuitCount = 0){
  currentSuit = spade;
  internalsuitCount++;
} else if(internalsuitCount = 1) {
  currentSuit = heart;
  internalsuitCount++;
}else if(internalsuitCount = 2) {
  currentSuit = club;
  internalsuitCount++;
}else if(internalsuitCount = 3) {
    currentSuit = diamond;
    internalsuitCount++;
  }



  Card memory card = Card({
    Suit: string(currentSuit),
    Number: string(),
    Value: uint()
    })

}

function createDeck() public {
  cardsInDeck

}
}
