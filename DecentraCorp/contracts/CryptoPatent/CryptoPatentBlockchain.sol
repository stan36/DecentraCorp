pragma solidity ^0.4.21;
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
////////////////////////////////////////////////////////////////////////////////////////////
contract DecentraCorpPoA {
  function proxyMint(uint _amount, address _add) external;
  function proxyBurn(uint _amount, address _add) external
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
    function getRepBlockAmount(uint _ideaId) public view returns(uint);
    function getGlobalUseBlockAmount(uint _ideaId) public view returns(uint);
    function getRoyalty(uint _ideaId) public view returns(uint);
    function getInventor(uint _ideaId) public view returns(address);
    function getMiningTime(uint _ideaId) public view returns(uint);
    function setMiningTime(uint _ideaId) external view;
}
//Idea Block Generator interface
/////////////////////////////////////////////////////////////////////////////////////////////
contract ReplicationBlockGenerator {
    function replicationBlock(uint _ideaId, address _repAdd) external;
    function getBlockReward(address _repAdd) public view returns(uint);
    function getStakedAmount(address _repAdd) public view returns(uint);
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
    function _generateGUSBlock() external;
    function safeTransfer(address _from, address _to, uint _tokenId) public;
}
//Global Use Block Generator interface
/////////////////////////////////////////////////////////////////////////////////////////////

contract CryptoPatentBlockchain is Ownable {

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



mapping (uint => uint) weightTracker;
//tracks current global highest weight
mapping (address => mapping (uint => uint)) localWeightTracker;
//maps a replications address to its replication ID and stores that replications current weight
mapping (address =>bool) members;
//tracks if an address is a member




modifier onlyReplication() {
  require(RBG.checkIfRep(msg.sender) == true);
  _;
}
//modifier requires that the address calling a function is a replication


//modifier requires that the address calling a function is a replication
constructor() public {
  globalBlockHalfTime = now;
  members[msg.sender] = true;
}

function addMember(address _mem) public onlyOwner{
    members[_mem] = true;
}

function setGenerators(address _dcpoa, address _IBG, address _RBG, address _GUBG) public onlyOwner {
DCPoA = DecentraCorpPoA(_dcpoa);
IBG = IdeaBlockGenerator(_IBG);
RBG = ReplicationBlockGenerator(_RBG);
GUBG = GlobalUseBlockGenerator(_GUBG);
}

function checkIfMember(address _member) public view returns(bool) {
  if(members[_member] == true){
    return true;
  }
  //allows function caller to input an address and see if it is a member of CryptoGrowDAC
}

function getMemberCount() public view returns(uint) {
  return memberCount;
}
//returns total number of members

function calculatePromo(uint _blockReward, uint _ideaId) internal returns(uint) {
  uint numberOfReps =  RBG.getNumOfReps( msg.sender,  _ideaId);
  uint tenthReward = (_blockReward/ 10);
  uint modulator = tenthReward * numberOfReps;
  uint blockReward = _blockReward + modulator;
  return blockReward;
}
//calculates the promotion a miner receives for having multiples of the same type of replication

function ideaBlockTimeLord() internal returns(uint){
  if(now >= globalBlockHalfTime + 94670778) {
    ideaBlockReward = ideaBlockReward / 2;
    globalBlockHalfTime = now;
    return ideaBlockReward;
    }
    return ideaBlockReward;
}
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
