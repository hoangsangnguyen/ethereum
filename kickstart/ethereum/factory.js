import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x8a0c35BB204b75F8C0bd4fde5c2866D9b8e3cC81'
);

export default instance;