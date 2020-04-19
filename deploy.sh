#!/bin/bash

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
  nohup ./thegoach_dev > waste.out 2> waste.err < /dev/null &
ENDSSH