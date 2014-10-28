var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'testorm'
    },
    port: 3000,
    db: 'mysql://chris@localhost/test'
  },

  test: {
    root: rootPath,
    app: {
      name: 'testorm'
    },
    port: 3000,
    db: 'mysql://root@localhost/testorm_test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'testorm'
    },
    port: 3000,
    db: 'mysql://root@localhost/testorm_production'
  }
};

module.exports = config[env];
