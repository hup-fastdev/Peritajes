module.exports = {
  apps: [
    {
      name: 'Peritajes', // Your project name
      cwd: '/home/ubuntu/Peritajes', // Path to your project
      script: 'npm', // For this example we're using npm, could also be yarn
      args: 'start', // Script to start the Strapi server, `start` by default
      env: {
        APP_KEYS: 'jP8pb1lYsAhnmURarewxhA==,34xnLMYHY5jiU7ONTstTqQ==', // you can find it in your project .env file.
        API_TOKEN_SALT: 'foP7OJcuRhCw1sTR6EfZPw==',
        ADMIN_JWT_SECRET: 'foP7OJcuRhCw1sTR6EfZPw==',
        JWT_SECRET: 'Vx78ftxblVytwFkd+tMlaQ==',
        NODE_ENV: 'production',
        DATABASE_HOST: 'database-peritajes.cq3juhddbgkj.us-east-1.rds.amazonaws.com', // database Endpoint under 'Connectivity & Security' tab
        DATABASE_PORT: '3306',
        DATABASE_NAME: 'peritajes', // DB name under 'Configuration' tab
        DATABASE_USERNAME: 'admin', // default username
        DATABASE_PASSWORD: 'julidiana',
        AWS_ACCESS_KEY_ID: 'AKIAWLMGJQT3IGDGF4NP',
        AWS_ACCESS_SECRET: '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', // Find it in Amazon S3 Dashboard
        AWS_REGION: 'us-east-1',
        AWS_BUCKET_NAME: 'imagesperitajes',
      },
    },
  ],
};
