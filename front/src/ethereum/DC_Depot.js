import web3 from '../utils/web3';
import DC_Depot from '../contracts/DC_Depot.json';



const _DC_Depot = new web3.eth.Contract(
	DC_Depot.abi,
	DC_Depot.networks[5777].address
);

export default _DC_Depot;
// export default contractInstance;


//const networkId = await web3.eth.net.getId()
//const deployedAddress = contractJSON.networks[networkId].address
//const contract = new web3.eth.Contract(contractJSON.abi, deployedAddress)
