import fs from 'fs';
import express from 'express';
import cors from 'cors';
import responseTime from './custom-middlewares/responseTimer';
import onCovid19RouteHandler from './routes/v1/on-covid-19';
import constants from './helper/constants';

const { getLogDate } = constants;

// initialize express
const app = express();

// add middlewares
app.use(cors());
app.use(express.json());

// a route to clear the logs file for today
app.get('/clearLogs', (req, res) => {
  fs.unlink(`./logs/request-response/${getLogDate()}.txt`, (err) => {
    if (err) throw err;
    res.send('Done');
  });
});

// the response time middleware to get request-response times.
app.use(responseTime);

app.use('/api/v1/on-covid-19', onCovid19RouteHandler);

export default app;
