pragma solidity ^0.4.21;
import "./RBLogic.sol";
////////////////////////////////////////////////////////////////////////////////////////////
/// @title UseLogic Contract for the CryptoPatent Blockchain
/// @author DecentraCorp
/// @notice this contract is the fouth contract in the CryptoPatent Blockchain
/// @dev All function calls are currently implement without side effects
////////////////////////////////////////////////////////////////////////////////////////////
/// @author Christopher Dixon

contract UseLogic is RBLogic {

///@notice generateUseBlockWeight allows a replication block to generate a local use weight
///        and possibly a global use blocks
///@dev this function is the first in a chain of function and implements the onlyReplication modifier
///@dev events from this function are to be used by the EPMS to trigger internal timers set to info in the original idea's IPFS info
function generateUseBlockWeight() public onlyReplication {
  address _rep = msg.sender;
  UseBlockWeight(_rep);
  }

///@notice generateGlobalUseBlock is an internal function called when the cryptopatent blockchain has determined
///        that a replication has mined a global use block.
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
  GUBG._generateGUSBlock(repOwnerAddress);
  DCPoA.proxyMint(repOwnerAddress, BlockReward);
//mints the replication Owner his block reward
  DCPoA.proxyMint(inventor, royalty);
//mints royalties to the idea inventor

}

///@notice UseBlockWeight is an internal function that tracks loacal use weightTracker
///@dev this is called by generateUseBlockWeight
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
