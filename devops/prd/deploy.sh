#!/bin/sh
git pull
npm install strapi -g
npm run build
pm2 start ecosystem.config.js