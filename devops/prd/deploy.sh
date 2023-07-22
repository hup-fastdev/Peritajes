#!/bin/sh
git pull
npm install -g
npm install strapi -g
npm run build
npm run start
pm2 start ecosystem.config.js