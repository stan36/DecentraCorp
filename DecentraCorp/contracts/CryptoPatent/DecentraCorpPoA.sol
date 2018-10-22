pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
////////////////////////////////////////////////////////////////////////////////////////////
contract IdeaCoin {
    function transferContractOwnership(address newOwner) public;
    function balanceOf(address _addr) public constant returns (uint);
    function mintToken(address _to, uint256 _value) external;
    function burn(address _from, uint256 _value)  external;
    function totalSupply() public constant returns (uint);
}
//IdeaCoin interface
/////////////////////////////////////////////////////////////////////////////////////////////
 contract DecentraCorpPoA is ownable {

   IdeaCoin public IDC;

   mapping(address => bool) approvedContracts;

   modifier onlyApprovedAdd() {
     require(approvedContracts[msg.sender] == true);
     _;
   }
   //modifier requires that the address calling a function is a replication

   function setIDCadd(address _IDC) public onlyOwner {
     IDC = IdeaCoin(_IDC);
   }

   function proxyMint(uint _amount, address _add) external onlyApprovedAdd {
     IDC.mintToken(_add, _amount);
   }

   function addApprovedContract(address _newContract) public onlyOwner {
     approvedContracts[_newContract] = true;
   }

 }
