const env = 'development';

const config = {
  development: {
    // HOST: process.env.HOST || '127.0.0.1',
    // USERS: process.env.USERS || '127.0.0.1',
    PORT_APP: process.env.PORT_APP || 3000,
    // PORT_USER: process.env.PORT_USER || 3001,
    // SQL_HOST: process.env.SQL_HOST || '127.0.0.1',
    // SQL_USERNAME: process.env.SQL_USERNAME || 'root',
    // SQL_DB: process.env.SQL_DB || 'reddi2mingle',
    // SQL_PW: process.env.SQL_PW || 'cake',
    // NEO4J_HOST: process.env.NEO4J_HOST || '127.0.0.1',
    // NEO4J_USERNAME: process.env.NEO4J_USERNAME || 'neo4j',
    // NEO4J_PW: process.env.NEO4J_PW || 'cake',
    // REDDIT_KEY: process.env.REDDIT_KEY || 'pireh_H2zusxbA',
    // REDDIT_SECRET: process.env.REDDIT_SECRET || 'a833aIqGbzl8Wkih8BtH8qpr3T0',
  },
  production: {
    HOST: process.env.HOST || '127.0.0.1',
  },
};

module.exports = config[env];
