#!/bin/sh
npm install strapi -g
npm run build
cp devops/prd/.env ./.env
pm2 start ecosystem.config.js