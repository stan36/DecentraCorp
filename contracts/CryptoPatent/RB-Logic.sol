pragma solidity ^0.4.21;
import "./IB-Logic.sol";

contract RB-Logic is IB-Logic {
function generateReplicationBlock(uint _ideaId, address _repAdd) public  {

  globalRepCount++;
//increases globval replication count
//sets RepBlockReward as the specific rep block amount Stored for an idea
  uint _repNumber = globalRepCount;
//sets _repNumber equal to globalRepCount
uint stake = 100000000000000000000;

  uint blockReward = 50;
  address inventor = IBG.getInventor(_ideaId);
//sets inventor as the specific inventor for an idea
if(members[msg.sender] == false){
  members[msg.sender] = true;
//adds the replicator as a member of DecentraCorp
  memberCount++;
}
//increases global member count
require(IDC.balanceOf(msg.sender) >= stake);
//requires the replicator has enough IdeaCoin to meet the stake amount

IDC.burn(msg.sender, stake);
//burns the stake amount from the message sender
IDC.mintToken( inventor, blockReward);
//mints royalty amount to the inventor
RBG.replicationBlock( _ideaId,  _repAdd);
//mints replication block reward to the replicator
//this section creates a specific ReplicationInfo struct storing data for that replication
RBG.safeTransfer(this, _repAdd, _repNumber);
//transferes replication ERC721 token to the replications address
  }
}
