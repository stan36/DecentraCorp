pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';

contract IdeaBlockGenerator is Ownable, ERC721Token("ProofOfIdeaOwnership", "PoIO") {

  uint public globalIdeaCount = 0;
//tracks how many Idea Blocks exist
  uint public stakeAmountInIDC = 100;
//stakeAmountInIDC is the amount of ideacoin  that must be staked to activate a replication
  mapping (uint256 => IdeaInfo) public ideaVariables;
//maps a specific ideas info struct to its ideaId number




struct IdeaInfo {
  uint globalUseBlockAmount;
  uint royalty;
  uint miningTime;
  address inventorAddress;
}

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
