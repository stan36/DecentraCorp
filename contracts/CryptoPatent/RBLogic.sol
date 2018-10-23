pragma solidity ^0.4.21;
import "./IBLogic.sol";

contract RBLogic is IBLogic{


function generateReplicationBlock(uint _ideaId, address _repAdd) public  {
globalRepCount++;
require(IDC.balanceOf(msg.sender) >= repStake);
//requires the replicator has enough IdeaCoin to meet the stake amount
DCPoA.proxyBurn(msg.sender, repStake);
//burns the stake amount from the message sender
if(members[msg.sender] == false){
  members[msg.sender] = true;
//adds the replicator as a member of DecentraCorp
  memberCount++;
}
RBG.replicationBlock( _ideaId,  _repAdd, msg.sender);
//mints replication block reward to the replicator
//this section creates a specific ReplicationInfo struct storing data for that replication
  }
  
  function changeStakeAmount(uint _newStakeAmount) external onlyOwner {
    repStake = _newStakeAmount;
  }
}
