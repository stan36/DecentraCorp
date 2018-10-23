pragma solidity ^0.4.21;
import "./Interface.sol";

contract IBLogic is Interface {
//checks if the IdeaBlockReward should be adjusted
function generateIdeaBlock(
  string _ideaIPFS,
  uint  _globalUseBlockAmount,
  uint _miningTime,
  uint _royalty,
  address _inventor
  )
  public
  onlyOwner
  {

    IBG._generateIdeaBlock( _ideaIPFS, _globalUseBlockAmount, _miningTime, _royalty,  _inventor);
//generates IdeaBlock ERC721 Token
    globalIdeaCount++;
    if(members[_inventor] != true){
//increments IdeaCount
    members[_inventor] = true;

//adds the inventor as a member of DecentraCorp
    memberCount++;
//increases global member count
}
    ideaBlockTimeLord();
    DCPoA.proxyMint( _inventor, ideaBlockReward);
//mints 1000 IDC and sends it to the inventor
  }

  function ideaBlockTimeLord() internal returns(uint){
    if(now >= globalBlockHalfTime + 94670778) {
      ideaBlockReward = ideaBlockReward / 2;
      globalBlockHalfTime = now;
      return ideaBlockReward;
      }
      return ideaBlockReward;
  }
}
