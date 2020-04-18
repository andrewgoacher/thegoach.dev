#!/bin/sh

ssh -o StrictHostKeyChecking=no $SSH_USER@$DIGITAL_OCEAN_IP_ADDRESS << 'ENDSSH'
  cd /app
  export $(cat .env | xargs)
  pkill thegoach_dev
  cd ..
  rm -rf /app
  mv /app_new /app
  mkdir /app_new
  cd /app
  docker-compose up -d
  ./thegoach_dev & disown
ENDSSH