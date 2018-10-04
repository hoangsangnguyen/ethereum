import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x2b0018cC0Bd47a4d66a8b8FECC2fAEFee3A7293e'
);

export default instance;