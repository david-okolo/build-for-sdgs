import responseTime from 'response-time';
import support from '../helper/operationSupport';

const { toServerLog } = support;

/**
 * Creates a mddileware function for handling logging of request-response cycles
 * @returns {Function} - an express middleware function
 */
const responseTimeHandler = responseTime((req, res, time) => {
  const duration = Math.round(time);
  const timeDiff = duration < 10 ? `0${duration}` : duration; // pads the duration with a leading '0' if it's less than 10 ms
  const path = req.path[req.path.length - 1] === '/' ? (req.path).substring(0, req.path.length - 1) : req.path; // removes trailing '/'
  toServerLog(`${req.method}    ${req.baseUrl ? req.baseUrl : ''}${path}    ${res.statusCode}   ${timeDiff}ms`);
});

export default responseTimeHandler;
