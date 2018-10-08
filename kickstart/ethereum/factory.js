import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x4dA1a241718769Da85e7B37B92b2DB43367Fdc5b'
);

export default instance;