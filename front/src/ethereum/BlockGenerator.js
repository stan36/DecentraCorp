import web3 from '../utils/web3';
import BlockGenerator from '../contracts/CryptoPatentBlockGenerator.json';

//const net = web3.currentProvider.publicConfigStore._state.networkVersion;

const _Blocks = new web3.eth.Contract(
	BlockGenerator.abi,
	BlockGenerator.networks[3636].address
);




export default _Blocks;
// export default contractInstance;
