import web3 from './web3';
import UserFactory from './build/UserFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(UserFactory.interface),
    '0x90c398e8F0b02d4cAD33fee7d72E9e8F45Ae638F'
);

export default instance;