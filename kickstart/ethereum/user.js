import web3 from './web3';
import UserFactory from './build/UserFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(UserFactory.interface),
    '0xB81aA41F5fda71358E34599591e3C6B4d48DfE9C'
);

export default instance;