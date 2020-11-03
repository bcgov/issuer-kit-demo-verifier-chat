// const { authenticate } = require('@feathersjs/authentication').hooks;

const processMessage = require('../../hooks/process-message');

module.exports = {
  before: {
    // all: [authenticate('jwt')],
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
