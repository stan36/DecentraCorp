import web3 from '../utils/web3';
import Notio from '../contracts/Notio.json';
//const net = web3.currentProvider.publicConfigStore._state.networkVersion;


 const _Notio = new web3.eth.Contract(
	Notio.abi,
  Notio.networks[3636].address
);


export default _Notio;
// export default contractInstance;
