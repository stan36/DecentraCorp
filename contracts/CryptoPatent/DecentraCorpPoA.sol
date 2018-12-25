pragma solidity ^0.4.21;
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";

////////////////////////////////////////////////////////////////////////////////////////////
/// @title DecentraCorpPoA
/// @author DecentraCorp
/// @notice this contract will serve as an information portal between the main ethereum
///         and the CryptoPatent Blockchain
/// @dev All function calls are currently implement without side effects
////////////////////////////////////////////////////////////////////////////////////////////
/// @author Christopher Dixon
////////////////////////////////////////////////////////////////////////////////////////////
contract IdeaCoin {
    function mint(address _to, uint256 _value) external;
    function burn(address _from, uint256 _value)  external;

}
//IdeaCoin interface
/////////////////////////////////////////////////////////////////////////////////////////////
contract ProofOfPurchaseToken{
    function safeTransferFrom(address _from, address _to, uint256 _tokenId) public;
    function _mintItemToken( string _itemIPFSHash) external;
}
////////////////////////////////////////////////////////////////////////////////////////////
contract ChaosCoin {
    function mint(address _to, uint256 _value) external;
    function burn(address _from, uint256 _value)  external;

}
//ChaosCoin interface
/////////////////////////////////////////////////////////////////////////////////////////////
contract CryptoPatentBlockGenerator {
    function _generateIdeaBlock(string _ideaIPFS, uint _globalUseBlockAmount, uint miningTime, uint _royalty, address _inventorsAddress) external;
    function _replicationBlock(uint _ideaId, address _repAdd, address _replicatorAdd) external;
    function _generateGUSBlock(address _replicationOwner) external;
}
/// CryptoPatentBlockGenerator interface
/////////////////////////////////////////////////////////////////////////////////////////////

 contract DecentraCorpPoA is Ownable {
   using SafeMath for uint256;
///@param IDC is used to make calls to the IdeaCoin Contract
   IdeaCoin public IDC;
   CryptoPatentBlockGenerator public CPBG;
   ChaosCoin public CC;
   ProofOfPurchaseToken public PoPT;

   uint public memberCount;
   mapping (address =>bool) members;
   mapping(address => uint) memberRank;
   mapping(address => uint) facilityLevel;
///@param approvedContracts is a mappiung of contracts alloud to call function on other

   mapping(address => bool) approvedContracts;

   modifier onlyApprovedAdd() {
     require(approvedContracts[msg.sender] == true);
     _;
   }

///@notice constructor sets up IdeaCoin address through truffle wizardry
   constructor(IdeaCoin _IDC, CryptoPatentBlockGenerator _CPBG, ChaosCoin _CC, ProofOfPurchaseToken _PoPT) public {
     IDC=(_IDC);
     CPBG =(_CPBG);
     CC=(_CC);
     PoPT = (_PoPT);
     members[msg.sender] = true;
     memberCount++;
     memberRank[msg.sender]++;
     facilityLevel[msg.sender].add(100);
   }

//@addApprovedContract allows another contract to call functions
///@dev adds contract to list of approved calling contracts
  function addApprovedContract(address _newContract) public onlyOwner {
        approvedContracts[_newContract] = true;
      }

///@notice setIDCadd allows the address of the IdeaCoin contract to be updated
   function setIDCadd(address _IDC) public onlyOwner {
     IDC = IdeaCoin(_IDC);
   }

///@notice proxyMint allows an approved address to mint IdeaCoin
   function proxyIDCMint(address _add, uint _amount) external onlyApprovedAdd {
     IDC.mint(_add, _amount);
   }
///@notice proxyBurn allows an approved address to burn IdeaCoin
   function proxyIDCBurn(address _add,  uint _amount) external onlyApprovedAdd {
     IDC.burn(_add, _amount);
   }
///@notice proxyMint allows an approved address to mint IdeaCoin
      function proxyCCMint(address _add, uint _amount) external onlyApprovedAdd {
        CC.mint(_add, _amount);
      }
///@notice proxyBurn allows an approved address to burn IdeaCoin
      function proxyCCBurn(address _add,  uint _amount) external onlyApprovedAdd {
        CC.burn(_add, _amount);
      }

   function generateIdeaBlock(string _ideaIPFS, uint _globalUseBlockAmount, uint miningTime, uint _royalty, address _inventorsAddress) external onlyApprovedAdd {
     CPBG._generateIdeaBlock(_ideaIPFS, _globalUseBlockAmount, miningTime, _royalty, _inventorsAddress);
   }
   function replicationBlock(uint _ideaId, address _repAdd, address _replicatorAdd) external onlyApprovedAdd {
     CPBG._replicationBlock( _ideaId, _repAdd, _replicatorAdd);
   }
   function generateGUSBlock(address _replicationOwner) external onlyApprovedAdd {
   CPBG._generateGUSBlock( _replicationOwner);
 }
function mintItemToken( string _itemIPFSHash) external onlyApprovedAdd {
  PoPT._mintItemToken( _itemIPFSHash);
}

///@notice addMember function is an internal function for adding a member to decentracorp
///@dev addMember takes in an address _mem, sets its membership to true and increments their rank by one
  function _addMember(address _mem) external onlyApprovedAdd {
      members[_mem] = true;
      memberRank[_mem]++;
      memberCount++;
  }
  function _checkIfMember(address _member) public view returns(bool) {
    if(members[_member] == true){
      return true;
    }
  }
  ///@notice getMemberCount function returns total membercount
  ///@dev getMemberCount is for front end and internal use
    function getMemberCount() public view returns(uint) {
      return memberCount;
    }

    function increaseMemRank(address _add) external onlyApprovedAdd {
      memberRank[_add]++;
    }
    function levelUpFacility(address _facAdd) public onlyApprovedAdd {
      facilityLevel[_facAdd].add(1);
    }
 }
