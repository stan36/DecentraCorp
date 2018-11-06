import web3 from '../utils/web3';
import DecentraCorpPoA from '../contracts/DecentraCorpPoA.json';



const _DecentraCorp = new web3.eth.Contract(
	DecentraCorpPoA.abi,
	'0x31f72186340d9eba85bab72fc33d59c9ab95758f'
);


export default _DecentraCorp;
// export default contractInstance;
