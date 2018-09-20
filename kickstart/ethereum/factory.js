import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xd160E7Cb8A89E2a39233B9D0b658b018C56f1510'
);

export default instance;