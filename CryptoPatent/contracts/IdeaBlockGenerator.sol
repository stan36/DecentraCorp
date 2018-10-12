pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';

contract IdeaBlockGenerator is Ownable, ERC721Token("ProofOfIdeaOwnership", "PoIO") {

  uint public globalIdeaCount = 0;
//tracks how many Idea Blocks exist


  mapping (uint256 => IdeaInfo) public ideaVariables;
//maps a specific ideas info struct to its ideaId number




struct IdeaInfo {
  uint replicationBlockAmount;
  uint globalUseBlockAmount;
  uint stakeAmountInIDC;
  uint royalty;
  uint miningTime;
  address inventorAddress;
}

  function _generateIdeaBlock(
  string _ideaIPFS,
  address _inventorsAddress,
  uint _replicationBlockAmount,
  uint _globalUseBlockAmount,
  uint _stakeAmountInIDC,
  uint _miningTime,
  uint _royalty
  )
   external
  onlyOwner
  {
    globalIdeaCount++;
  uint _ideaId = globalIdeaCount;
  _mint(_inventorsAddress , _ideaId);

  _setTokenURI(_ideaId, _ideaIPFS);

  setIdeaInfo(
     _replicationBlockAmount,
     _globalUseBlockAmount,
     _stakeAmountInIDC,
     _royalty,
     _miningTime,
     _inventorsAddress
    );

  }



function setIdeaInfo(
  uint _replicationBlockAmount,
  uint _globalUseBlockAmount,
  uint _stakeAmountInIDC,
  uint _royalty,
  uint _miningTime,
  address _inventorAddress
  )
  internal
  {

    IdeaInfo memory _info = IdeaInfo({
      replicationBlockAmount: uint(_replicationBlockAmount),
      globalUseBlockAmount: uint(_globalUseBlockAmount),
      stakeAmountInIDC: uint(_stakeAmountInIDC),
      royalty: uint(_royalty),
      miningTime: uint(_miningTime),
      inventorAddress: address(_inventorAddress)
      });

      uint _ideaId = globalIdeaCount;
      ideaVariables[_ideaId] = _info;
  }



  function getRepBlockAmount(uint _ideaId) public view returns(uint) {
    IdeaInfo memory info = ideaVariables[_ideaId];
    uint RepBlockAmount = info.replicationBlockAmount;
    return RepBlockAmount;
  }

  function getGlobalUseBlockAmount(uint _ideaId) public view returns(uint) {
    IdeaInfo memory info = ideaVariables[_ideaId];
    uint globalUseBlockAmount = info.globalUseBlockAmount;
    return globalUseBlockAmount;
  }

  function getStakeAmount(uint _ideaId) public view returns(uint) {
    IdeaInfo memory info = ideaVariables[_ideaId];
    uint stakeAmount = info.stakeAmountInIDC;
    return stakeAmount;
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
