import axios from 'axios';
const dotenv = require('dotenv');
dotenv.config();

const createNuvemshopClient = () => {
    return axios.create({
        baseURL: 'https://www.nuvemshop.com.br',
    });
};

const authorizeToken = async code => {
    const client = createNuvemshopClient();

    return client.post('/apps/authorize/token', {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: 'authorization_code',
        code,
    });
};

export { authorizeToken };
