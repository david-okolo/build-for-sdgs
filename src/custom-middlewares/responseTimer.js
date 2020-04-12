import support from '../helper/operationSupport';

const { toServerLog, getDuration } = support;

const responseTime = (req, res, next) => {
  const startTime = process.hrtime();
  const duration = Math.round(getDuration(startTime));
  const timeDiff = duration < 10 ? `0${duration}` : duration;

  res.on('finish', () => {
    toServerLog(`${req.method} ${req.baseUrl ? req.baseUrl : ''}${req.path} ${res.statusCode} ${timeDiff}ms`);
  });

  next();
};

export default responseTime;
