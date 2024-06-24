module.exports = {
  apps: [
    {
      name: 'achieve_dqa',
      script: 'npm',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3004,
      },
    },
  ],
};
