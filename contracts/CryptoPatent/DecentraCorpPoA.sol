pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
////////////////////////////////////////////////////////////////////////////////////////////
contract IdeaCoin {
    function mintToken(address _to, uint256 _value) external;
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

   function setIDCadd(address _IDC) public onlyOwner {
     IDC = IdeaCoin(_IDC);
   }

   function proxyMint(address _add, uint _amount) external onlyApprovedAdd {
     IDC.mintToken(_add, _amount);
   }

   function proxyBurn(address _add,  uint _amount) external onlyApprovedAdd {
     IDC.burn(_add, _amount);
   }

   function addApprovedContract(address _newContract) public onlyOwner {
     approvedContracts[_newContract] = true;
   }

 }
