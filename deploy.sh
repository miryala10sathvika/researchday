#!/bin/bash

cp nginx/web.conf.prod nginx/web.prod.conf
docker compose -f docker-compose-prod.yml up --build -d