pragma solidity ^0.4.21;
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
////////////////////////////////////////////////////////////////////////////////////////////
contract DecentraCorpPoA {
  function proxyMint(address _add, uint _amount) external;
  function proxyBurn(address _add, uint _amount) external;
}
////////////////////////////////////////////////////////////////////////////////////////////
contract IdeaCoin {
    function balanceOf(address _addr) public constant returns (uint);
    function totalSupply() public constant returns (uint);
}
//IdeaCoin interface
/////////////////////////////////////////////////////////////////////////////////////////////
contract IdeaBlockGenerator {
    function _generateIdeaBlock(string _ideaIPFS, uint _globalUseBlockAmount, uint miningTime, uint _royalty, address _inventorsAddress) external;
    function transferOwnership(address newOwner) public;
    function balanceOf(address _owner) public view returns (uint256);
    function getGlobalUseBlockAmount(uint _ideaId) public view returns(uint);
    function getRoyalty(uint _ideaId) public view returns(uint);
    function getInventor(uint _ideaId) public view returns(address);
    function getMiningTime(uint _ideaId) public view returns(uint);
    function setMiningTime(uint _ideaId) external view;
}
//Idea Block Generator interface
/////////////////////////////////////////////////////////////////////////////////////////////
contract ReplicationBlockGenerator {
    function replicationBlock(uint _ideaId, address _repAdd, address _replicatorAdd) external;
    function getBlockReward(address _repAdd) public view returns(uint);
    function getOwnersAddress(address _repAdd) public view returns(address);
    function getIdeaID(address _repAdd) public view returns(uint);
    function getInventorsAddress(address _repAdd) public view returns(address);
    function getReplicationAddress(address _repAdd) public view returns(address);
    function getRoyalty(address _repAdd) public view returns(uint);
    function getRepID(address _repAdd) public view returns(uint);
    function checkIfRep(address _add) external returns(bool);
    function getNumOfReps(address _add, uint _ideaId) external returns(uint);
    function getRepTotal(uint _ideaId) external returns(uint);
    function safeTransfer(address _from, address _to, uint _tokenId) public;
  }
//Replication Block Generator interface
/////////////////////////////////////////////////////////////////////////////////////////////
contract GlobalUseBlockGenerator{
    function _generateGUSBlock(address _replicationOwner) external;
    function safeTransfer(address _from, address _to, uint _tokenId) public;
}
//Global Use Block Generator interface
/////////////////////////////////////////////////////////////////////////////////////////////
contract Interface is Ownable {
  IdeaCoin public IDC;
  DecentraCorpPoA public DCPoA;
  IdeaBlockGenerator public IBG;
  ReplicationBlockGenerator public RBG;
  GlobalUseBlockGenerator public GUBG;
  //these turn each interface into a useable variable
  uint public globalIdeaCount;
  //tracks amount of ideas on the CryptoPatent Blockchain
  uint public globalRepCount;
  //tracks the total number of replications on the CryptoPatent Blockchain
  uint public memberCount;
  //tracks the total number of CryptoGrow members
  uint public globalUseBlock;
  //tracks global use blocks
  uint public globalBlockHalfTime;
  //used to track when the ideaBlockReward should be halved
  uint public ideaBlockReward = 1000000000000000000000;
  //IdeaBlock set to 1000 IDC
  uint public repStake = 100000000000000000000;
 //Replication stake amount set to 100 IDC
  uint public minimumQuorum;
  //used to  track quorum info
  IdeaProposal[] public proposals;
  //array of idea proposals
  mapping (uint => uint) weightTracker;
  //tracks current global highest weight
  mapping (address => mapping (uint => uint)) localWeightTracker;
  //maps a replications address to its replication ID and stores that replications current weight
  mapping (address =>bool) members;
  //tracks if an address is a member
  mapping(address => uint) memberRank;
//tracks a members rank

struct IdeaProposal {
     string IdeaIPFS;
     bool executed;
     bool proposalPassed;
     uint numberOfVotes;
     Vote[] votes;
     mapping (address => bool) voted;
 }
 //Proposal struct stores info of a proposal
  struct Vote {
          bool inSupport;
          address voter;
      }

  modifier onlyReplication() {
    require(RBG.checkIfRep(msg.sender) == true);
    _;
  }
  //modifier requires that the address calling a function is a replication

  function calculatePromo(uint _blockReward, uint _ideaId) internal returns(uint) {
    uint numberOfReps =  RBG.getNumOfReps( msg.sender,  _ideaId);
    uint tenthReward = (_blockReward/ 10);
    uint modulator = tenthReward * numberOfReps;
    uint blockReward = _blockReward + modulator;
    return blockReward;
  }
  //calculates the promotion a miner receives for having multiples of the same type of replication


}
