pragma solidity ^0.4.21;
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import 'zeppelin-solidity/contracts/math/SafeMath.sol';
/////////////////////////////////////////////////////////////////////////////////////////////

contract DeckFactory is Ownable {
  using SafeMath for uint256;

  uint public decktracker;
  string public heart = 'heart';
  string public club = 'club';
  string public diamond = 'diamond';
  string public spade = 'spade';


  Deck[] decks;

struct Card {
string Suit;
string Number;
uint Value;
}

struct Deck {
  Card[] cardsInDeck;
  Card[] cardsOutofDeck;
}

function makeCard(uint _deckNumber uint _deckCount) internal {
uint internalsuitCount = 0;
uint internalNumberCount = 0;
uint currentNumber;
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

if(internalNumberCount < 13) {
  internalNumberCount++
}

  Card memory card = Card({
    Suit: string(currentSuit),
    Value: uint(currentNumber)
  });

  deckCount++;
  uint  cardID = deckCount;
  Deck memory deck = decks[_deckNumber];
  deck.cardsInDeck[cardID] = card;
}

function createDeck() public {
  uint deckCount;
  decktracker++;
  if(deckCount <= 52) {
  makeCard(decktracker, deckCount);
}

}
}
