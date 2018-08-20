pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";

contract CryptoPatentBlockchain {
  function checkIfMember(address _member) public returns(bool);
  function getMemberCount() public returns(uint);
  function IdeaBlockGenerator(string _ideaIPFS, uint  _replicationBlockAmount, uint  _globalUseBlockAmount, address _inventor) external returns(uint);
  function buyMembership(address _newMember, uint _amountPurchased) public;
}
//////////////////////////////////////////////////////////////////////////////////
contract DecentraCorp is Ownable {
    uint public numProposals;
    //tracks number of dev team proposals
    uint public minimumQuorum;
    //minimum quorum to be reached for a proposal to pass
    uint public membershipTimeWizard;
    //membership time tracker for 6 month open membership period
    IdeaProposal[] public proposals;
    // array of proposal structs...stores the proposals
    FundingProposal[] public fundProp;
    //array of funding proposals structs to store those proposals
    CryptoPatentBlockchain public CPB;


      struct IdeaProposal {
           string IdeaIPFS;
           bool executed;
           bool proposalPassed;
           uint numberOfVotes;
           uint RepBlockAmount;
           uint GlobalUseAmount;
           address Inventor;
           Vote[] votes;
           mapping (address => bool) voted;
       }
    //Proposal struct stores info of a proposal
      struct Vote {
              bool inSupport;
              address voter;
          }

     struct FundingProposal{
       string proposalHash;
       uint fundingAmount;
       bool executed;
       bool proposalPassed;
       uint numberOfVotes;
       address facilityOwner;
       Vote[] votes;
       mapping (address => bool) voted;
     }

     modifier onlyMember() {
       bool member = CPB.checkIfMember(msg.sender);
        require(member == true);
        _;
    }

constructor() public {
  membershipTimeWizard = now;
}


    function setCPB_Add(address _CPAdd) public onlyOwner {
      CPB = CryptoPatentBlockchain(_CPAdd);
    }

      function proposeIdea(
        string _ideaIPFS,
        uint _replicationBlockAmount,
        uint  _globalUseBlockAmount,
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
              p.RepBlockAmount = _replicationBlockAmount;
              p.GlobalUseAmount = _globalUseBlockAmount;
              p.Inventor = _inventor;
              return IdeaProposalID;

          }
      //allows the dev team to propose new hard forks in either the junktion contract or the PoP TokenAuction and put it up for a vote
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


          function ideaBlockVote(uint _ideaProposalID) public onlyOwner {
            IdeaProposal storage p = proposals[_ideaProposalID];
            // sets p equal to the specific proposalNumber
            require(!p.executed);
            string _ideahash = p.IdeaIPFS;
            uint _replicationBlockAmount = p.RepBlockAmount;
            uint _globalUseBlockAmount = p.GlobalUseAmount;
            uint quorum = 0;
            uint yea = 0;
            uint nay = 0;
            address _inventor = p.Inventor;
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
                CPB.IdeaBlockGenerator( _ideahash,   _replicationBlockAmount,   _globalUseBlockAmount,  _inventor);
            } else {
                // Proposal failed
                p.proposalPassed = false;
            }


        }

        function set_Quorum() internal  {
           uint maxQuorum = CPB.getMemberCount();
           uint tenthQuorum = (maxQuorum / 10);
           uint  halfQuorum = (maxQuorum / 2);
            minimumQuorum = (halfQuorum + tenthQuorum);
           }

           function facilityFundingProposal(
             string _proposalHash,
             uint _fundingAmount
               )
                   public
                   onlyMember
                   returns (uint fundingProposalID)
               {

                   fundingProposalID = fundProp.length++;
                   FundingProposal storage p = fundProp[fundingProposalID];
                   p.proposalHash = _proposalHash;
                   p.fundingAmount = _fundingAmount;
                   p.executed = false;
                   p.proposalPassed = false;
                   p.numberOfVotes = 0;
                   p.facilityOwner = msg.sender;
                   return fundingProposalID;

               }

               function fundingVote(uint fundingProposalID) public onlyMember {
                 FundingProposal storage p = fundProp[fundingProposalID];
                 // sets p equal to the specific proposalNumber
                 require(!p.executed);

                 uint _fundingAmount = p.fundingAmount;

                 uint quorum = 0;
                 uint yea = 0;
                 uint nay = 0;
                 address _facilityOwner = p.facilityOwner;
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
                     _facilityOwner.transfer(_fundingAmount);
                 } else {
                     // Proposal failed
                     p.proposalPassed = false;
                 }


             }


             function buyBronzeMembership() public payable {
               require(now <= membershipTimeWizard + 15780000);
               require(msg.value >= 1000000000000000000);// value arbitrarily chosen, value will be changed before launch to match market demand
               CPB.buyMembership(msg.sender, 1000000000000000000000);
             }

             function buySilverMembership() public payable {
               require(now <= membershipTimeWizard + 15780000);
               require(msg.value >= 1500000000000000000);
               CPB.buyMembership(msg.sender, 10000000000000000000000);
             }

             function buyGoldMembership() public payable {
               require(now <= membershipTimeWizard + 15780000);
               require(msg.value >= 2000000000000000000);
               CPB.buyMembership(msg.sender, 100000000000000000000000);
             }
}
