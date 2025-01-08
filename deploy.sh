#!/bin/bash

# Get the current date in the format "Month Day, Year"
CURRENT_DATE=$(date +"%B %d, %Y")
FILE="frontend/src/components/Footer.jsx"

# Use sed to replace the existing date with the current date
sed -i.bak -E "s/(Last updated: )[A-Za-z]+ [0-9]{2}, [0-9]{4}\./\1$CURRENT_DATE./" "$FILE"

echo "Footer.jsx has been updated with the current date: $CURRENT_DATE"

cp nginx/web.conf.prod nginx/web.prod.conf
docker compose -f docker-compose-prod.yml up --build -d