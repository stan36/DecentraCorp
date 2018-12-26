pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import 'zeppelin-solidity/contracts/math/SafeMath.sol';

/////////////////////////////////////////////////////////////////////////////////////////////
contract DecentraCorpPoA {
  function proxyMint(address _add, uint _amount) external;
  function proxyBurn(address _add, uint _amount) external;
  function mintItemToken( string _itemIPFSHash) external;
  function getLevel(address _add) public view returns(uint);
  function getProfileHahs(address _add) public view returns(string);
}
/// DecentraCorp PoA inteface
////////////////////////////////////////////////////////////////////////////////////////////
contract IdeaCoin {
    function balanceOf(address _addr) public constant returns (uint);

}
/// IdeaCoin interface
/////////////////////////////////////////////////////////////////////////////////////////////
contract ProofOfPurchaseToken{
    function safeTransferFrom(address _from, address _to, uint256 _tokenId) public;
    function balanceOf(address _owner) public view returns (uint256);
    function updatePOPTokenIPFS(uint _itemId, string _newIPFSHash) public;
    function ipfsLookUp(string _ipfsHash) public view returns(uint);
}
/////////////////////////////////////////////////////////////////////////////////////////////

contract DecentraControlled is Ownable {



  DecentraCorpPoA public decentraCorp;
  ProofOfPurchaseToken public PoPT;
  IdeaCoin public IDC;
  uint public etherEarned = 0;
  uint public globalEscrowCount = 0;
  uint public _IDC_PriceMod = 10;
  uint public _DecentraCorpFee = 0.001 ether;





    function getDCDEtherBalance() public view returns(uint) {
        return address(this).balance;
    }

    function getDCDPoPBalance() public view returns(uint) {
        return PoPT.balanceOf(this);
    }


    function updateItemPOPTokenIPFS(uint _itemId, string _newIPFSHash) public onlyOwner {
        PoPT.updatePOPTokenIPFS(_itemId, _newIPFSHash);
        }

    function PoPTokenHF(address _newPoPAdd) public onlyOwner {
        PoPT = ProofOfPurchaseToken(_newPoPAdd);
        }


}
