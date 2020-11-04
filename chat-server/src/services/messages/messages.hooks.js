const authenticate = require('../../hooks/authenticate');
const processMessage = require('../../hooks/process-message');

module.exports = {
  before: {
    all: [authenticate()],
    find: [],
    get: [],
    create: [processMessage()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
