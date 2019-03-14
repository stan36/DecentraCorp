import web3 from '../utils/web3';
import DecentraCorpPoA from '../contracts/DecentraCorpPoA.json';

//const net = web3.currentProvider.publicConfigStore._state.networkVersion;

const _DecentraCorp = new web3.eth.Contract(
	DecentraCorpPoA.abi,
	DecentraCorpPoA.networks[3636].address
);


export default _DecentraCorp;
// export default contractInstance;
