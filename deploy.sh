#!/bin/sh

ssh -o StrictHostKeyChecking=no $SSH_USER@$DIGITAL_OCEAN_IP_ADDRESS << 'ENDSSH'
  cd /app
  export $(cat .env | xargs)
  docker login -u $CI_REGISTRY_USER -p $CI_JOB_TOKEN $CI_REGISTRY
  docker pull $IMAGE
  docker-compose down
  pkill thegoach_dev
  cd ..
  rm -rf /app
  mv /app_new /app
  mkdir /app_new
  cd /app
  ./thegoach_dev &
  docker_compose up -d
ENDSSH