module.exports = {
  apps: [{
    name: 'API',
    script: 'dist/server.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
