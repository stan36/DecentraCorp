pragma solidity ^0.4.21;
import "./RB-Logic.sol";

contract UB-Logic is RB-Logic {

function generateGlobalUseBlock(address _rep) internal {
  address repOwnerAddress = RBG.getOwnersAddress(_rep);
//sets repOwnerAddress as a specific replications owner from a rep struct
  address inventor = RBG.getInventorsAddress(_rep);
//sets inventor as a specific idea owner from a rep struct
  uint ideaID = RBG.getIdeaID(_rep);
//sets ideaID as a specific replications ideaID from a rep struct
  uint royalty = RBG.getRoyalty(_rep);
//sets royalty as a specific replications royalty from a rep struct
  uint BlockReward = IBG.getGlobalUseBlockAmount(ideaID);
//sets BlockReward as the block reward for a specific idea
  BlockReward = BlockReward - royalty;
//stes BlockReward equal to itself minus the royalty
  BlockReward = calculatePromo(BlockReward, ideaID);
//calculates BlockReward according to promotion status of a member
  globalUseBlock++;
//increments global use block counter
  GUBG._generateGUSBlock();
  GUBG.safeTransfer(this, _rep, globalUseBlock);
//transfers Global Use Block to the replication
  IDC.mintToken(repOwnerAddress, BlockReward);
//mints the replication Owner his block reward
  IDC.mintToken(inventor, royalty);
//mints royalties to the idea inventor

}

function generateUseBlockWeight() public onlyReplication {
address _rep = msg.sender;
UseBlockWeight(_rep);
}


function UseBlockWeight(address _rep) internal {

  uint ideaID = RBG.getIdeaID(_rep);
//sets ideaID as a specific ideaID from the replications struct
  uint repID = RBG.getRepID(_rep);
//sets repID as a specific replications id from the replications struct
  uint _blockReward = 1;
//sets _blockReward equal to one
  uint _amount = calculatePromo(_blockReward, ideaID);
//sets _amount equal to the calculated block reward dependant upon promotion level of the replicator
  uint weight = localWeightTracker[_rep][repID];
// sets weight equal to the current weight of a specific replication
  uint newWeight = weight + _amount;
// increases the weight of a specific replication
  uint globalWeight = weightTracker[ideaID];
//sets globalWeight as the current highest weight for a specific idea
  uint timeLord = IBG.getMiningTime(ideaID);
  localWeightTracker[_rep][repID] = newWeight;
//sets the newWeight for that specific replication
  if(newWeight >= globalWeight && now >= timeLord) {
//checks if the replication has the heaviest weight
    generateGlobalUseBlock(_rep);
//if it does it generates a global use block
    IBG.setMiningTime(ideaID);
//resets the global mining time for a specific idea after a useBlock is mined
    }
  }
}
