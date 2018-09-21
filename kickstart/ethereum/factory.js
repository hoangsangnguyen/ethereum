import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xEE98F28Da1be44b85699F6726a4F375A086C2385'
);

export default instance;