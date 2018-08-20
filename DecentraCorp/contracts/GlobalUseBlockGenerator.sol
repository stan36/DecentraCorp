pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';

contract GlobalUseBlockGenerator is Ownable, ERC721Token("GlobalUseBlock", "GUB") {



  uint public globalUseBlocknumber = 0;
  mapping(address => uint) public globalUseBlockTracker;


  function _generateGUSBlock() external onlyOwner {
    globalUseBlocknumber++;
    uint _replicationId = globalUseBlocknumber;
  _mint(msg.sender, _replicationId);
  globalUseBlockTracker[msg.sender] = globalUseBlocknumber;
  }

}
