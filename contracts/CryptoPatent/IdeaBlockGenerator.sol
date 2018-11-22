pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';
////////////////////////////////////////////////////////////////////////////////////////////
/// @title IdeaBlockGenerator Contract
/// @author DecentraCorp
/// @notice this contract is built from the zeppelin-solidity library
/// @dev All function calls are currently implement without side effects
////////////////////////////////////////////////////////////////////////////////////////////

/// @author Christopher Dixon
/// @dev this contract contains both the Ownable and ERC721Token contracts from Open Zepplin
contract IdeaBlockGenerator is Ownable, ERC721Token("ProofOfIdeaOwnership", "PoIO") {
///@param globalIdeaCount tracks how many Idea Blocks exist
///@param stakeAmountInIDC is the amount of ideacoin  that must be staked to activate a replication
///@param ideaVariables maps a specific ideas info struct to its ideaId number
  uint public globalIdeaCount = 0;
  uint public stakeAmountInIDC = 100;
  mapping (uint256 => IdeaInfo) public ideaVariables;

///@struct IdeaInfo is built to store only needed variables to the blockchain, IPFS handles the rest
struct IdeaInfo {
  uint globalUseBlockAmount;
  uint royalty;
  uint miningTime;
  address inventorAddress;
}

///@notice _generateIdeaBlock generates a Proof of Idea Ownership token. PoIO tokens act like patents
  function _generateIdeaBlock(
  string _ideaIPFS,
  uint _globalUseBlockAmount,
  uint _miningTime,
  uint _royalty,
  address _inventorsAddress
  )
   external
  onlyOwner
  {
    globalIdeaCount++;
  uint _ideaId = globalIdeaCount;
  _mint(_inventorsAddress , _ideaId);

  _setTokenURI(_ideaId, _ideaIPFS);

  setIdeaInfo(
     _globalUseBlockAmount,
     _royalty,
     _miningTime,
     _inventorsAddress
    );

  }

///@notice setIdeaInfo handles the struct creation logic for ideablocks
function setIdeaInfo(
  uint _globalUseBlockAmount,
  uint _royalty,
  uint _miningTime,
  address _inventorAddress
  )
  internal
  {

    IdeaInfo memory _info = IdeaInfo({
      globalUseBlockAmount: uint(_globalUseBlockAmount),
      royalty: uint(_royalty),
      miningTime: uint(_miningTime),
      inventorAddress: address(_inventorAddress)
      });

      uint _ideaId = globalIdeaCount;
      ideaVariables[_ideaId] = _info;
  }




///@notice the following functions allow for easier access to info by both the front end and other contracts
///@dev all the following contracts allow for the retreval of ideablock information
  function getGlobalUseBlockAmount(uint _ideaId) public view returns(uint) {
    IdeaInfo memory info = ideaVariables[_ideaId];
    uint globalUseBlockAmount = info.globalUseBlockAmount;
    return globalUseBlockAmount;
  }


    function getRoyalty(uint _ideaId) public view returns(uint) {
      IdeaInfo memory info = ideaVariables[_ideaId];
      uint royalty = info.royalty;
      return royalty;
    }

    function getInventor(uint _ideaId) public view returns(address) {
      IdeaInfo memory info = ideaVariables[_ideaId];
      address inventorAdd = info.inventorAddress;
      return inventorAdd;
    }
    function getMiningTime(uint _ideaId) public view returns(uint) {
      IdeaInfo memory info = ideaVariables[_ideaId];
      uint _miningTime = info.miningTime;
      return _miningTime;
    }
    function setMiningTime(uint _ideaId) external view {
      IdeaInfo memory info = ideaVariables[_ideaId];
       info.miningTime = now;
    }
}
