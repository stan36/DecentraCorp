pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import 'zeppelin-solidity/contracts/math/SafeMath.sol';
/*
@title Dev-Controlled
@author Christopher Dixon
@notice This contract is built using both SafeMath and Ownable from the Open-Zepplin library
@notice This contract is designed to be inheritable and serves as the basis for the Forra contract stack
@notice This contract uses two interfaces built to allow it to utilize functions found on the ERC20 Artis token contract
  AND the ERC721 ProofOfPurchaseToken contract to facilitate a first of its kind unique marketplace that rewards both buyers
  and sellers for utilizing the platform
*/

/////////////////////////////////////////////////////////////////////////////////////////////
contract Artis {
    function transfer(address _to, uint256 _value) public returns (bool);
    function transferContractOwnership(address newOwner) public;
    function balanceOf(address _addr) public view returns (uint);
    function burn(address _from, uint256 _value)  external;
    function mintToken(address _to, uint256 _value)  external;
}
//this tells the Forra contract how to interface with ERC20 Artis token
/////////////////////////////////////////////////////////////////////////////////////////////
contract ProofOfPurchaseToken{
    function safeTransferFrom(address _from, address _to, uint256 _tokenId) public;
    function mintItemToken( string _itemIPFSHash) external;
    function transferOwnership(address newOwner) public;
    function balanceOf(address _owner) public view returns (uint256);
    function updatePOPTokenIPFS(uint _itemId, string _newIPFSHash) public;
    function ipfsLookUp(string _ipfsHash) public view returns(uint);
}
//this tells the Forra contract how to interface with ERC721 PoP Token
/////////////////////////////////////////////////////////////////////////////////////////////

contract DecentraControlled is Ownable {

  using SafeMath for uint256;
  /*
  @param PoPT sets imported ProofOfPurchaseToken contract to be accessed through nonFungibleContract variable
  @param ArtisToken sets Artis contract to be used as variable ArtisToken
  @param numberOfDevMembers sets number of dev members to zero for contract initializastion
  @param minimumQuorum is the minimum quorum to be reached for a proposal to pass
  @param amountOfPoPTInForraControl tracks how many PoP tokens Forra currently holds
  @param etherForraControls  tracks how much ether the Forra contract holds
  @dev  etherForraControls is set to zero as the contract should start out holding zero ether
  @param artisForraControls tracks how many artis tokens the forra contract holds
  @dev artisForraControls is set to 1000000000000000000000000 at start because this is how many it has been sent for testing
    this number will need to be changed to match the decided amount the mainnet forra contract will hold
  @param etherForraEarned tracks the amount of ether forra has earned from sales on the platfor,
  @param artisForraEarned tracks how many artis tokens forra has earned from sales
  @param globalPoPCount is used to track how many PoP tokens have been created
  @dev this is set seperate from the PoP token contracts internal count to allow for easier contract upgrades
  @dev all variables set to zero for proper initializastion
  @param numProposals tracks number of dev team proposals
  @param proposals is an array of proposal structs...stores the proposals
  @param DevTeamMember is a mapping tracks who is and isnt a dev team member
  @param forraWithdrawlWallet is a wallet controlled by the dev team used to withdrawl ether/artis forra has earned
  */
  DecentraCorp public decentraCorp;
  ProofOfPurchaseToken public PoPT;
  uint public etherDCDepotEarned = 0;
  uint public globalEscrowCount = 0;
  uint public _IDC_PriceMod = 10;
  uint public _DecentraCorpFee = 0.001 ether;


*/
    function getDCDEtherBalance() public view returns(uint) {
        return address(this).balance;
    }
/*
  @notice getDCDPoPBalance fetches the contracts PoP token balance
  @dev this is a gas-less view function
*/
    function getDCDPoPBalance() public view returns(uint) {
        return PoPT.balanceOf(this);
    }

/*
  @notice updateItemPOPTokenIPFS allows a dev team member to update an items IPFS hash without creating a new token
    to represent the item
  @param _itemId is the item id number for an item
  @param _newIPFSHash is the input new IPFS hash
*/
      function updateItemPOPTokenIPFS(uint _itemId, string _newIPFSHash) public onlyDev {
        PoPT.updatePOPTokenIPFS(_itemId, _newIPFSHash);
        }



/*
  @notice PoPTokenHF allows setting of PoP token address during set up
  @param _newPoPAdd is the input new address for the artis tokens
  @dev this function is set to onlyOwner so that the initial dev can avoid quarum/vote issues during contract set-up
*/
         function PoPTokenHF(address _newPoPAdd) public onlyOwner {
             PoPT = ProofOfPurchaseToken(_newPoPAdd);
         }
}
