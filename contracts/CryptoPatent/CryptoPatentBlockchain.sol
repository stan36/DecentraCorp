pragma solidity ^0.4.21;
import "./UseLogic.sol";

contract CryptoPatentBlockchain is UseLogic {

  constructor(address _dcpoa, address _IDC, address _IBG, address _RBG, address _GUBG) public {
    globalBlockHalfTime = now;
    members[msg.sender] = true;
    memberRank[msg.sender]++;
    DCPoA = DecentraCorpPoA(_dcpoa);
    IDC = IdeaCoin(_IDC);
    IBG = IdeaBlockGenerator(_IBG);
    RBG = ReplicationBlockGenerator(_RBG);
    GUBG = GlobalUseBlockGenerator(_GUBG);
  }



  function proposeIdea(string _ideaIPFS) public {
          uint IdeaProposalID = proposals.length++;
          IdeaProposal storage p = proposals[IdeaProposalID];
          p.IdeaIPFS = _ideaIPFS;
          p.executed = false;
          p.proposalPassed = false;
          p.numberOfVotes = 0;
  }

function set_Quorum() internal  {
        uint maxQuorum = getMemberCount();
        uint tenthQuorum = (maxQuorum / 10);
        uint  halfQuorum = (maxQuorum / 2);
        minimumQuorum = (halfQuorum + tenthQuorum);
  }


function ideaBlockVote(uint _ideaProposalID, uint _globalUseBlockAmount,uint _miningTime, uint _royalty, address _inventor) public {
        require(checkIfMember(msg.sender));
        IdeaProposal storage p = proposals[_ideaProposalID];
             // sets p equal to the specific proposalNumber
        require(!p.executed);
        string  _ideahash = p.IdeaIPFS;
        uint quorum = 0;
        uint yea = 0;
        uint nay = 0;
        set_Quorum();


    for (uint i = 0; i <  p.votes.length; ++i) {
        Vote storage v = p.votes[i];
        uint voteWeight = 1;
        quorum += voteWeight;
        if (v.inSupport) {
          yea += voteWeight;
             } else {
           nay += voteWeight;
                 }
             }

             require(quorum >= minimumQuorum); // Check if a minimum quorum has been reached

             if (yea > nay ) {
                 // Proposal passed; execute the transaction
               p.executed = true;
               p.proposalPassed = true;
               generateIdeaBlock( _ideahash,  _globalUseBlockAmount, _miningTime, _royalty, _inventor);
           } else {
                 // Proposal failed
               p.proposalPassed = false;
           }
      }

 function vote(
        uint _ideaProposalID,
        bool supportsProposal
    )
        public
        returns (uint voteID)
    {
        require(checkIfMember(msg.sender));
        IdeaProposal storage p = proposals[_ideaProposalID];
        require(p.voted[msg.sender] != true);

        voteID = p.votes.length++;
        p.votes[voteID] = Vote({inSupport: supportsProposal, voter: msg.sender});
        p.voted[msg.sender] = true;
        p.numberOfVotes = voteID++;

        return voteID;
    }
// allows members to vote on proposals
  function addMember(address _mem) internal {
      members[_mem] = true;
      memberRank[_mem]++;
  }

  function buyMembership() public payable{
    require(msg.value >= 1 ether);
    addMember(msg.sender);
  }

  function setGenerators(
    DecentraCorpPoA _dcpoa,
    IdeaCoin _IDC,
    IdeaBlockGenerator _IBG,
    ReplicationBlockGenerator _RBG,
    GlobalUseBlockGenerator _GUBG
    )
    public
    onlyOwner
    {
      DCPoA = DecentraCorpPoA(_dcpoa);
      IDC = IdeaCoin(_IDC);
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


}
