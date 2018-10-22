pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import 'zeppelin-solidity/contracts/math/SafeMath.sol';

/////////////////////////////////////////////////////////////////////////////////////////////
contract DecentraCorpPoA {
  function proxyMint(uint _amount, address _add) external;
  function proxyBurn(uint _amount, address _add) external
}

/////////////////////////////////////////////////////////////////////////////////////////////
contract ProofOfPurchaseToken{
    function safeTransferFrom(address _from, address _to, uint256 _tokenId) public;
    function mintItemToken( string _itemIPFSHash) external;
    function transferOwnership(address newOwner) public;
    function balanceOf(address _owner) public view returns (uint256);
    function updatePOPTokenIPFS(uint _itemId, string _newIPFSHash) public;
    function ipfsLookUp(string _ipfsHash) public view returns(uint);
}
/////////////////////////////////////////////////////////////////////////////////////////////

contract DecentraControlled is Ownable {

  using SafeMath for uint256;

  DecentraCorp public decentraCorp;
  ProofOfPurchaseToken public PoPT;
  uint public etherDCDepotEarned = 0;
  uint public globalEscrowCount = 0;
  uint public _IDC_PriceMod = 10;
  uint public _DecentraCorpFee = 0.001 ether;


    function getDCDEtherBalance() public view returns(uint) {
        return address(this).balance;
    }

    function getDCDPoPBalance() public view returns(uint) {
        return PoPT.balanceOf(this);
    }


    function updateItemPOPTokenIPFS(uint _itemId, string _newIPFSHash) public onlyDev {
        PoPT.updatePOPTokenIPFS(_itemId, _newIPFSHash);
        }

    function PoPTokenHF(address _newPoPAdd) public onlyOwner {
        PoPT = ProofOfPurchaseToken(_newPoPAdd);
        }
}
