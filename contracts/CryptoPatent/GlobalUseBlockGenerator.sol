pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';
////////////////////////////////////////////////////////////////////////////////////////////
/// @title GlobalUseBlockGenerator
/// @author DecentraCorp
/// @notice this contract tracks Global UseBlock'sfor the CryptoPatent Blockchain
/// @dev All function calls are currently implement without side effects
////////////////////////////////////////////////////////////////////////////////////////////
/// @author Christopher Dixon
////////////////////////////////////////////////////////////////////////////////////////////
contract GlobalUseBlockGenerator is Ownable, ERC721Token("GlobalUseBlock", "GUB") {

///@notice globalUseBlocknumber tracks the number of Global UseBlocks
///@notice globalUseBlockTracker tracks how many GUB's are owned by an account
  uint public globalUseBlocknumber = 0;
  mapping(address => uint) public globalUseBlockTracker;

///@notice _generateGUSBlock is only called by the CryptoPatent Blockchain when certain criterea is met
///@dev the GUB token is minted to the replication owner
  function _generateGUSBlock(address _replicationOwner) external onlyOwner {
    globalUseBlocknumber++;
    uint _blockId = globalUseBlocknumber;
  _mint(_replicationOwner, _blockId);
  globalUseBlockTracker[_replicationOwner] = _blockId;
  }

}
