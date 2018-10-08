import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x42F3C5c6974df5c6024B151cE682a2DC195aa746'
);

export default instance;