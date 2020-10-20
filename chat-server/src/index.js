/* eslint-disable no-console */
const logger = require('./logger');
const app = require('./app');

const _runmode = process.env.RUNMODE;
const _dockerhost = process.env.DOCKERHOST;

const host = (_runmode === 'pwd') ? _dockerhost : app.get('host');
const port = app.get('port');
const server = app.listen(port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', host, port)
);
