#!/bin/sh
git pull
npm install strapi -g
npm run build
cp ./devops/prd/.env .
pm2 start ecosystem.config.js