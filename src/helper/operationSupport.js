import fs from 'fs';
import constants from './constants';

const { getLogDate } = constants;

/**
 * Appends the input to the request logs.
 * Creates a new one each day.
 * @param {string} logInput - The request-response cycle string data
 */
const toServerLog = async (logInput) => {
  const line = `${logInput}\n`;
  await fs.appendFileSync(`./logs/request-response/${getLogDate()}.txt`, line, (err) => {
    if (err) throw err;
  });
};

export default {
  toServerLog
};
