pragma solidity ^0.4.21;
import "./UseLogic.sol";

contract CryptoPatentBlockchain is UseLogic {

  constructor() public {
    globalBlockHalfTime = now;
    members[msg.sender] = true;
  }

  function addMember(address _mem) public onlyOwner{
      members[_mem] = true;
  }

  function setGenerators(address _dcpoa, address _IDC, address _IBG, address _RBG, address _GUBG) public onlyOwner {
      DCPoA = DecentraCorpPoA(_dcpoa);
      IDC = IdeaCoin(_IDC);
      IBG = IdeaBlockGenerator(_IBG);
      RBG = ReplicationBlockGenerator(_RBG);
      GUBG = GlobalUseBlockGenerator(_GUBG);
}

  function checkIfMember(address _member) public view returns(bool) {
    if(members[_member] == true){
      return true;
    }
    //allows function caller to input an address and see if it is a member of CryptoGrowDAC
  }

  function getMemberCount() public view returns(uint) {
    return memberCount;
  }
  //returns total number of members


}
