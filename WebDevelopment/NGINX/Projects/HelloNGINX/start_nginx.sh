#!/bin/bash

# Load environment variables from the .env file
export $(grep -v '^#' .env | xargs)

# Replace variables in nginx.conf with actual values
envsubst < nginx.conf.template > /etc/nginx/nginx.conf

# Start NGINX
nginx -g 'daemon off;'