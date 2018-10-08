import web3 from './web3';
import UserFactory from './build/UserFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(UserFactory.interface),
    '0x7B07E41FF4Ca852d801577daa2C0680ab45535F6'
);

export default instance;