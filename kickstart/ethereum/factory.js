import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x96CA0E4FA84e77884E4d43F22DdAb733152f9d61'
);

export default instance;