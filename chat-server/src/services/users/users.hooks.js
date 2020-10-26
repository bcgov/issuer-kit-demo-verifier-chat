// const { authenticate } = require('@feathersjs/authentication').hooks;

// const {
//   hashPassword, protect
// } = require('@feathersjs/authentication-local').hooks;

module.exports = {
  before: {
    all: [],
    // find: [ authenticate('jwt') ],
    find: [],
    // get: [ authenticate('jwt') ],
    get: [],
    // create: [ authenticate('jwt') ],
    create: [],
    // update: [ authenticate('jwt') ],
    update: [],
    // patch: [ authenticate('jwt') ],
    patch: [],
    // remove: [ authenticate('jwt') ],
    remove: []
  },

  after: {
    // all: [ 
    //   // Make sure the password field is never sent to the client
    //   // Always must be the last hook
    //   protect('password')
    // ],
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
