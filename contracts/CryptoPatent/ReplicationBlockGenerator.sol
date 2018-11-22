pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';
////////////////////////////////////////////////////////////////////////////////////////////
/// @title ReplicationBlockGenerator Contract
/// @author DecentraCorp
/// @notice this contract is built from the zeppelin-solidity library
/// @dev All function calls are currently implement without side effects
////////////////////////////////////////////////////////////////////////////////////////////

/// @author Christopher Dixon
/// @dev this contract contains both the Ownable and ERC721Token contracts from Open Zepplin
/////////////////////////////////////////////////////////////////////////////////////////////
contract IdeaBlockGenerator{
    function _generateIdeaBlock(string _ideaIPFS, address _inventorsAddress,  uint _replicationBlockAmount,  uint _globalUseBlockAmount,  uint _stakeAmountInIDC,  uint _royalty) external;
    function transferOwnership(address newOwner) public;
    function balanceOf(address _owner) public view returns (uint256);
    function getGlobalUseBlockAmount(uint _ideaId) public view returns(uint);
    function getRoyalty(uint _ideaId) public view returns(uint);
    function getInventor(uint _ideaId) public view returns(address);
    function getMiningTime(uint _ideaId) public view returns(uint);
}
//Idea Block Generator interface
/////////////////////////////////////////////////////////////////////////////////////////////
contract ReplicationBlockGenerator is Ownable, ERC721Token("ProofOfReplicationOwnership", "PoRO") {

///@
  IdeaBlockGenerator public IBG;

  uint public globalRepCount = 0;

  mapping(address => mapping(uint => uint)) public replicationTracker;
  //maps a replicators address to the ideas id to store a unique replication
  //ID for that replication
  mapping (address => bool) replications;
  //tracks if an address is a replication
  mapping (address => ReplicationInfo) repInfo;
  //mapping of replication info by replication address
  mapping (address => mapping (uint => uint)) repOwnes;
  //tracks which address owns a specific replication by its ideaID
  mapping (uint => uint) ideaRepCounter;
  //tracks the total number of replications for a specific idea




  struct ReplicationInfo {
    uint BlockReward;
    address OwnersAddress;
    uint IdeaID;
    uint Royalty;
    uint RepID;
    uint MiningTime;
    address InventorsAddress;
    address ReplicationAddress;
  }
  // ReplicationInfo stores replication information

  function setIBGadd(address _newAdd) public onlyOwner{
    IBG = IdeaBlockGenerator(_newAdd);
  }

  function _generateReplicationBlock(uint _ideaId, address _replicatorAdd) internal  {
    globalRepCount++;
  uint _replicationId = globalRepCount;
  _mint(_replicatorAdd, _replicationId);
  replicationTracker[_replicatorAdd][_ideaId] =_replicationId;

  }

  function replicationBlock(uint _ideaId, address _repAdd, address _replicatorAdd) external onlyOwner {
    uint RepBlockReward = IBG.getGlobalUseBlockAmount(_ideaId);
    //sets RepBlockReward as the specific rep block amount Stored for an idea
    uint royalty = IBG.getRoyalty(_ideaId);
    //sets royalty as the specific royalty amount for an idea
    uint blockReward = RepBlockReward - royalty;
    //subtracts the royalty amount from the block reward
    uint _miningTime = IBG.getMiningTime(_ideaId);

    address inventor = IBG.getInventor(_ideaId);
    //sets inventor as the specific inventor for an idea

    _generateReplicationBlock(_ideaId, _replicatorAdd);
    //generates an ERC721 replication block token

    uint _repId = globalRepCount;
    //sets _repNumber equal to globalRepCount

    ReplicationInfo memory _info = ReplicationInfo({
      BlockReward: uint( blockReward),
      OwnersAddress: address(_replicatorAdd),
      IdeaID: uint(_ideaId),
      Royalty: uint(royalty),
      RepID: uint(_repId),
      MiningTime: uint(_miningTime),
      InventorsAddress: address(inventor),
      ReplicationAddress: address(_repAdd)
      });
//creates replication struct for new rep

      repInfo[_repAdd] = _info;
      //stores new struct stored at the replications address
      uint ideaRepCount = ideaRepCounter[_ideaId];
      ideaRepCounter[_ideaId] = ideaRepCount++;
      //increments the global rep count for a specific idea
    replications[_repAdd] = true;
  //stores replications address as a replicator
    uint ownerRepCount = repOwnes[_replicatorAdd][_ideaId];
  //sets ownerRepCount to how many replications of a specific idea a replicator owns
    repOwnes[_replicatorAdd][_ideaId] = ownerRepCount++;
  //increments the amount of replications for an idea a replicator owns
}

///@notice the following functions allow for easier access to info by both the front end and other contracts
///@dev all the following contracts allow for the retreval of ideablock information
  function getBlockReward(address _repAdd) public view returns(uint) {
    ReplicationInfo memory info = repInfo[_repAdd];
    uint blockReward = info.BlockReward;
    return blockReward;
  }


  function getOwnersAddress(address _repAdd) public view returns(address) {
    ReplicationInfo memory info = repInfo[_repAdd];
    address repOwner = info.OwnersAddress;
    return repOwner;
  }

  function getIdeaID(address _repAdd) public view returns(uint) {
    ReplicationInfo memory info = repInfo[_repAdd];
    uint ideaId = info.IdeaID;
    return ideaId;
  }

  function getInventorsAddress(address _repAdd) public view returns(address) {
    ReplicationInfo memory info = repInfo[_repAdd];
    address InvtAdd = info.InventorsAddress;
    return InvtAdd;
  }

  function getReplicationAddress(address _repAdd) public view returns(address) {
    ReplicationInfo memory info = repInfo[_repAdd];
    address repAdd = info.ReplicationAddress;
    return repAdd;
  }

  function getRoyalty(address _repAdd) public view returns(uint) {
    ReplicationInfo memory info = repInfo[_repAdd];
    uint royalty = info.Royalty;
    return royalty;
  }

  function getRepID(address _repAdd) public view returns(uint) {
    ReplicationInfo memory info = repInfo[_repAdd];
    uint repId = info.RepID;
    return repId;
  }

function checkIfRep(address _add) external view returns(bool) {
  return replications[_add];
}
function getNumOfReps(address _add, uint _ideaId) external view returns(uint) {
  return repOwnes[_add][_ideaId];
}
function getRepTotal(uint _ideaId) external view returns(uint) {
  return ideaRepCounter[_ideaId];
}
function getMiningTime(address _repAdd) external view returns(uint) {
  ReplicationInfo memory info = repInfo[_repAdd];
  uint miningTime = info.MiningTime;
  return miningTime;
}

}
