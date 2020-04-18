#!/bin/sh

ssh -o StrictHostKeyChecking=no $SSH_USER@$DIGITAL_OCEAN_IP_ADDRESS << 'ENDSSH'
  cd /app
  export $(cat .env | xargs)
  docker-compose down
  pkill thegoach_dev
  cd ..
  rm -rf /app
  mv /app_new /app
  mkdir /app_new
  cd /app
  ./thegoach_dev &
  docker-compose up -d
ENDSSH