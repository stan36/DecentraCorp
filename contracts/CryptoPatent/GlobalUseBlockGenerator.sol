pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';

contract GlobalUseBlockGenerator is Ownable, ERC721Token("GlobalUseBlock", "GUB") {



  uint public globalUseBlocknumber = 0;
  mapping(address => uint) public globalUseBlockTracker;


  function _generateGUSBlock(address _replicationOwner) external onlyOwner {
    globalUseBlocknumber++;
    uint _blockId = globalUseBlocknumber;
  _mint(_replicationOwner, _blockId);
  globalUseBlockTracker[_replicationOwner] = _blockId;
  }

}
