const { NotAuthenticated } = require('@feathersjs/errors');

const jwksClient = require('jwks-rsa');
const jwt = require('jsonwebtoken');

// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    try {
      const authHeader = context.params.headers.authorization;
      if (!authHeader) {
        throw new Error('Authorization header not found.');
      }

      const token = authHeader.split(' ')[1];
      if (!token) {
        throw new Error('Authorization token not found.');
      }

      const client = jwksClient({
        jwksUri: context.app.get('authentication').jwksUri
      });

      const keys = await client.getSigningKeysAsync();
      jwt.verify(token, keys[0].getPublicKey(), {
        algorithms: context.app.get('authentication').algorithms
      });
    } catch (error) {
      throw new NotAuthenticated(`Authentication failed: ${error.message}`);
    }
    return context;
  };
};
