import express from 'express';
const cors = require('cors')
import router from './router';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router)

export default app;