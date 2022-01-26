import { authorizeToken } from '../client/nuvemshop-client';

async function login(req, res) {
    const code = req.query.code;
    if (!code) {
        throw new Error('Could not get code');
    }

    const { data } = await authorizeToken(code);

    console.log(data);

    res.status(201).json({ code, data });
}

export { login };
