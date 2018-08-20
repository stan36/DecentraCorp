pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import 'zeppelin-solidity/contracts/math/SafeMath.sol';
////////////////////////////////////////////////////////////////////////////////////////////
contract IdeaCoin {
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success);
    function transferContractOwnership(address newOwner) public;
    function balanceOf(address _addr) public constant returns (uint);
    function mintToken(address _to, uint256 _value) external;
    function burn(address _from, uint256 _value)  external;
    function totalSupply() public constant returns (uint);
}
//IdeaCoin interface
/////////////////////////////////////////////////////////////////////////////////////////////
contract UseBlockWeightGenerator {
    function transferContractOwnership(address newOwner) public;
    function mint(address _to, uint256 _amount) public returns (bool);
}
//Use Block Weight Generator interface
/////////////////////////////////////////////////////////////////////////////////////////////
contract IdeaBlockGenerator {
    function _generateIdeaBlock(string _ideaIPFS, address _inventorsAddress,  uint _replicationBlockAmount,  uint _globalUseBlockAmount,  uint _stakeAmountInIDC,  uint _royalty) external;
    function transferOwnership(address newOwner) public;
    function balanceOf(address _owner) public view returns (uint256);
    function getRepBlockAmount(uint _ideaId) public view returns(uint);
    function getGlobalUseBlockAmount(uint _ideaId) public view returns(uint);
    function getStakeAmount(uint _ideaId) public view returns(uint);
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

IdeaCoin public IDC;
UseBlockWeightGenerator public UBW;
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
uint public ideaBlockReward = 1000000000000000000000;



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
}

function setGenerators(address _IDC, address _IBG, address _RBG, address _UBW, address _GUBG) public onlyOwner {
IDC = IdeaCoin(_IDC);
IBG = IdeaBlockGenerator(_IBG);
RBG = ReplicationBlockGenerator(_RBG);
UBW = UseBlockWeightGenerator(_UBW);
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

function generateIdeaBlock(
  string _ideaIPFS,
  uint  _replicationBlockAmount,
  uint  _globalUseBlockAmount,
  uint stakeAmountInIDC,
  uint _royalty,
  address _inventor
  )
  public
  onlyOwner
  returns(uint)
  {

    IBG._generateIdeaBlock( _ideaIPFS, _inventor, _replicationBlockAmount, _globalUseBlockAmount, stakeAmountInIDC, _royalty);
//generates IdeaBlock ERC721 Token
    globalIdeaCount++;
//increments IdeaCount
    uint ideaId = globalIdeaCount;
//sets IdeaID equal to  IdeaCount
    members[_inventor] = true;
//adds the inventor as a member of CryptoGrowDAC
    memberCount++;
//increases global member count
ideaBlockTimeLord();
IDC.mintToken( _inventor, ideaBlockReward);
//mints 1000 IDC and sends it to the inventor
    return ideaId;
  }

function generateReplicationBlock(uint _ideaId, address _repAdd) public returns(uint) {
  RBG.replicationBlock( _ideaId,  _repAdd);
  globalRepCount++;
//increases globval replication count
  uint RepBlockReward = IBG.getRepBlockAmount(_ideaId);
//sets RepBlockReward as the specific rep block amount Stored for an idea
  uint _repNumber = globalRepCount;
//sets _repNumber equal to globalRepCount
  uint royalty = IBG.getRoyalty(_ideaId);
//sets royalty as the specific royalty amount for an idea
uint stake = IBG.getStakeAmount(_ideaId);
//sets stake as the specific stake amount for an idea
  uint blockReward = RepBlockReward - royalty;
  address inventor = IBG.getInventor(_ideaId);
//sets inventor as the specific inventor for an idea


  members[msg.sender] = true;
//adds the inventor as a member of CryptoGrowDAC
  memberCount++;
//increases global member count
require(IDC.balanceOf(msg.sender) >= stake);
//requires the replicator has enough IdeaCoin to meet the stake amount

IDC.burn(msg.sender, stake);
//burns the stake amount from the message sender
IDC.mintToken(_repAdd, blockReward);
//mints new ideaCoin to the replications address
IDC.mintToken( inventor, royalty);
//mints royalty amount to the inventor
IDC.mintToken(msg.sender, blockReward);
//mints replication block reward to the replicator
//this section creates a specific ReplicationInfo struct storing data for that replication
RBG.safeTransfer(this, _repAdd, _repNumber);
//transferes replication ERC721 token to the replications address
return _repNumber;
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
  //sets _amount equal to the calculated block reward ependant upon promotion level of the replicator
    uint weight = localWeightTracker[_rep][repID];
  // sets weight equal to the current weight of a specific replication
    uint newWeight = weight + _amount;
  // increases the weight of a specific replication
    uint globalWeight = weightTracker[ideaID];
  //sets globalWeight as the current highest weight for a specific idea
    uint timeWizard = IBG.getMiningTime(ideaID);
    localWeightTracker[_rep][repID] = newWeight;
  //sets the newWeight for that specific replication
    if(newWeight <= globalWeight && now >= timeWizard) {
  //checks if the replication has the heaviest weight
      generateGlobalUseBlock(_rep);
  //if it does it generates a global use block
      IBG.setMiningTime(ideaID);
      }
    UBW.mint(_rep, _amount);
  //else the replication is minted the appropriate amount of weight
    }

function buyMembership(address _newMember, uint _amountPurchased) public onlyOwner {
  IDC.mintToken(_newMember, _amountPurchased);
  members[_newMember] = true;

}

}
