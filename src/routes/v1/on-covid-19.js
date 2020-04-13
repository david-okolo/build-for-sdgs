/**
 * Route Handler for api/v1/on-covid-19 route
 */

import fs from 'fs';
import express from 'express';
import constants from '../../helper/constants';
import Estimator from '../../lib/estimator';
import covid19ImpactEstimator from '../../estimator';

const { getLogDate } = constants;

const router = express.Router();

const jsonHandler = (req, res) => {
  const estimatorOutput = new Estimator(covid19ImpactEstimator, req.body).toJSON();
  res.json(estimatorOutput);
};
router.post('/', jsonHandler); // for default requests to the path

router.post('/json', jsonHandler);

router.post('/xml', (req, res) => {
  const estimatorOutput = new Estimator(covid19ImpactEstimator, req.body).toXML();
  res.header('Content-Type', 'application/xml; charset=UTF-8');
  res.send(estimatorOutput);
});

router.get('/logs', (req, res) => {
  fs.readFile(`./logs/request-response/${getLogDate()}.txt`, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') throw err;
    res.header('Content-Type', 'text/plain');
    res.send(data);
  });
});

export default router;
