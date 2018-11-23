pragma solidity ^0.4.21;
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
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

 contract DecentraCorpPoA is Ownable {
///@param IDC is used to make calls to the IdeaCoin Contract
   IdeaCoin public IDC;
///@param approvedContracts is a mappiung of contracts alloud to call function on other
///       IdeaCoin contract
   mapping(address => bool) approvedContracts;
   modifier onlyApprovedAdd() {
     require(approvedContracts[msg.sender] == true);
     _;
   }

///@notice constructor sets up IdeaCoin address through truffle wizardry
   constructor(IdeaCoin _IDC) public {
     IDC=(_IDC);
   }


///@notice setIDCadd allows the address of the IdeaCoin contract to be updated
   function setIDCadd(address _IDC) public onlyOwner {
     IDC = IdeaCoin(_IDC);
   }

///@notice proxyMint allows an approved address to mint IdeaCoin
   function proxyMint(address _add, uint _amount) external onlyApprovedAdd {
     IDC.mint(_add, _amount);
   }
///@notice proxyBurn allows an approved address to burn IdeaCoin
   function proxyBurn(address _add,  uint _amount) external onlyApprovedAdd {
     IDC.burn(_add, _amount);
   }
//@addApprovedContract allows another contract to call functions
///@dev adds contract to list of approved calling contracts
   function addApprovedContract(address _newContract) public onlyOwner {
     approvedContracts[_newContract] = true;
   }

 }
