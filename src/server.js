/**
 * Server file
 */
import fs from 'fs';
import https from 'https';
import app from './app';

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
  // starts the server
  https.createServer({
    key: fs.readFileSync('../cert/server-key.pem'),
    cert: fs.readFileSync('../cert/server-cert.pem')
  }, app).listen(port);
} else {
  // starts the server
  app.listen(port);
}
