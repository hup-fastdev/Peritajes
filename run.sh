#!/bin/sh
set -e
echo " ####   BUILDING AUTH MICROSERVICE"

npm run build
npm run develop
