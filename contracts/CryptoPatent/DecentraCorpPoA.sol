pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
////////////////////////////////////////////////////////////////////////////////////////////
contract IdeaCoin {
    function mint(address _to, uint256 _value) external;
    function burn(address _from, uint256 _value)  external;

}
//IdeaCoin interface
/////////////////////////////////////////////////////////////////////////////////////////////
 contract DecentraCorpPoA is Ownable {

   IdeaCoin public IDC;

   mapping(address => bool) approvedContracts;

   modifier onlyApprovedAdd() {
     require(approvedContracts[msg.sender] == true);
     _;
   }
   //modifier requires that the address calling a function is a replication

   constructor(IdeaCoin _IDC) public {
     IDC=(_IDC);
   }

   function setIDCadd(address _IDC) public onlyOwner {
     IDC = IdeaCoin(_IDC);
   }

   function proxyMint(address _add, uint _amount) external onlyApprovedAdd {
     IDC.mint(_add, _amount);
   }

   function proxyBurn(address _add,  uint _amount) external onlyApprovedAdd {
     IDC.burn(_add, _amount);
   }

   function addApprovedContract(address _newContract) public onlyOwner {
     approvedContracts[_newContract] = true;
   }

   function exchangeChaosCoin(uint _amount, address _add) public onlyApprovedAdd {
     _add.transfer(_amount);
   }
 }
/*

pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
////////////////////////////////////////////////////////////////////////////////////////////
contract IdeaCoin {
    function mint(address _to, uint256 _value) external;
    function burn(address _from, uint256 _value)  external;

}
/////////////////////////////////////////////////////////////////////////////////////////////
contract CryptoPatentBlockchain{
  function generateIdeaBlock(string _ideaIPFS, uint  _globalUseBlockAmount, uint _miningTime, uint _royalty, address _inventor) external;
    function checkIfMember(address _member) public view returns(bool);
      function getMemberCount() public view returns(uint);
}
/////////////////////////////////////////////////////////////////////////////////////////////
 contract DCInterface is Ownable {

   IdeaCoin public IDC;
   CryptoPatentBlockchain public CPB;
   uint public numProposals;
   //tracks number of dev team proposals
   uint public minimumQuorum;
   //minimum quorum to be reached for a proposal to pass
   IdeaProposal[] public proposals;
   // array of proposal structs...stores the proposals


   mapping(address => bool) approvedContracts;

   modifier onlyApprovedAdd() {
     require(approvedContracts[msg.sender] == true);
     _;
   }
   //modifier requires that the address calling a function is a replication

   modifier onlyMember() {
     bool member = CPB.checkIfMember(msg.sender);
      require(member == true);
      _;
  }

  constructor(IdeaCoin _IDC) public {
      IDC=(_IDC);
    }


     struct IdeaProposal {
          string IdeaIPFS;
          bool executed;
          bool proposalPassed;
          uint numberOfVotes;
          uint GlobalUseAmount;
          uint royalty;
          uint miningTime;
          address Inventor;
          Vote[] votes;
          mapping (address => bool) voted;
      }



   //Proposal struct stores info of a proposal
     struct Vote {
             bool inSupport;
             address voter;
         }

         function set_Quorum() internal  {
          uint maxQuorum = CPB.getMemberCount();
          uint tenthQuorum = (maxQuorum / 10);
          uint  halfQuorum = (maxQuorum / 2);
           minimumQuorum = (halfQuorum + tenthQuorum);
          }


 function setCPB_Add(CryptoPatentBlockchain _CPAdd) public onlyOwner {
   CPB = (_CPAdd);
 }


 function setIDCadd(IdeaCoin _IDC) public onlyOwner {
   IDC = (_IDC);
 }

 function proxyMint(address _add, uint _amount) external onlyApprovedAdd {
   IDC.mint(_add, _amount);
 }

 function proxyBurn(address _add,  uint _amount) external onlyApprovedAdd {
   IDC.burn(_add, _amount);
 }

 function addApprovedContract(address _newContract) public onlyOwner {
   approvedContracts[_newContract] = true;
 }


 function proposeIdea(
   string _ideaIPFS,
   uint  _globalUseBlockAmount,
   uint _miningTime,
   uint _royalty,
   address _inventor
     )
         public
         returns (uint IdeaProposalID)
     {

         IdeaProposalID = proposals.length++;
         IdeaProposal storage p = proposals[IdeaProposalID];
         p.IdeaIPFS = _ideaIPFS;
         p.executed = false;
         p.proposalPassed = false;
         p.numberOfVotes = 0;
         p.GlobalUseAmount = _globalUseBlockAmount;
         p.Inventor = _inventor;
         p.miningTime = _miningTime;
         p.royalty = _royalty;
         return IdeaProposalID;

     }


     function ideaBlockVote(uint _ideaProposalID) public onlyOwner {
       IdeaProposal storage p = proposals[_ideaProposalID];
       // sets p equal to the specific proposalNumber
       require(!p.executed);
       string  _ideahash = p.IdeaIPFS;
       uint  _globalUseBlockAmount = p.GlobalUseAmount;
       uint  _miningTime = p.miningTime;
       uint  _royalty = p.royalty;
       uint quorum = 0;
       uint yea = 0;
       uint nay = 0;
       address  _inventor = p.Inventor;
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
           CPB.generateIdeaBlock( _ideahash,  _globalUseBlockAmount, _miningTime, _royalty, _inventor);
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
          onlyMember
          returns (uint voteID)
      {
          IdeaProposal storage p = proposals[_ideaProposalID];
          require(p.voted[msg.sender] != true);

          voteID = p.votes.length++;
          p.votes[voteID] = Vote({inSupport: supportsProposal, voter: msg.sender});
          p.voted[msg.sender] = true;
          p.numberOfVotes = voteID++;

          return voteID;
      }
// allows members to vote on proposals

}
*/
