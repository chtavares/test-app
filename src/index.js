import express from 'express';
import authorization from './routes/authorization.route';

const app = express();
const port = 3000;

app.use(express.json());

app.use(authorization);

app.listen(port, () => {
    console.log(`Test app listening on port ${port}`);
});
