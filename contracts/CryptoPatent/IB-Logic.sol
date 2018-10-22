pragma solidity ^0.4.21;
import "./CP-interface.sol";

contract IB-Logic is CP-interface.sol {
//checks if the IdeaBlockReward should be adjusted
function generateIdeaBlock(
  string _ideaIPFS,
  uint  _globalUseBlockAmount,
  uint _royalty,
  uint _miningTime,
  address _inventor
  )
  public
  onlyOwner
  {

    IBG._generateIdeaBlock( _ideaIPFS, _globalUseBlockAmount, _royalty, _miningTime, _inventor);
//generates IdeaBlock ERC721 Token
    globalIdeaCount++;
//increments IdeaCount
    members[_inventor] = true;
//adds the inventor as a member of CryptoGrowDAC
    memberCount++;
//increases global member count
ideaBlockTimeLord();
IDC.mintToken( _inventor, ideaBlockReward);
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
