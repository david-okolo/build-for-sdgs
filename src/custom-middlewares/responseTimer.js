import responseTime from 'response-time';
import support from '../helper/operationSupport';

const { toServerLog } = support;

const responseTimeHandler = responseTime((req, res, time) => {
  const duration = Math.round(time);
  const timeDiff = duration < 10 ? `0${duration}` : duration;
  toServerLog(`${req.method}    ${req.baseUrl ? req.baseUrl : ''}${req.path}    ${res.statusCode}   ${timeDiff}ms`);
});

export default responseTimeHandler;
