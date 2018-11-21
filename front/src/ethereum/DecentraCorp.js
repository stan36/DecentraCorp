import web3 from '../utils/web3';
import DecentraCorpPoA from '../contracts/DecentraCorpPoA.json';



const _DecentraCorp = new web3.eth.Contract(
	DecentraCorpPoA.abi,
	'0x352bc06c5f1a2b749cd0e84e66c20dc6ec342a3d'
);


export default _DecentraCorp;
// export default contractInstance;
