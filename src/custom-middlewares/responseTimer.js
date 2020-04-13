import responseTime from 'response-time';
import support from '../helper/operationSupport';

const { toServerLog } = support;

const responseTimeHandler = responseTime((req, res, time) => {
  const duration = Math.round(time);
  const timeDiff = duration < 10 ? `0${duration}` : duration;
  const path = req.path[req.path.length - 1] === '/' ? (req.path).substring(0, req.path.length - 1) : req.path;
  toServerLog(`${req.method}    ${req.baseUrl ? req.baseUrl : ''}${path}    ${res.statusCode}   ${timeDiff}ms`);
});

export default responseTimeHandler;
