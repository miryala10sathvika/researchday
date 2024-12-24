# researchday

This project is a research day website with a FastAPI backend, Next.js frontend, and MongoDB database.


## Requirements
- Docker
- Docker Compose

## How to Run
Run the follwoing commands in terminal:
   ```bash
   git clone https://github.com/miryala10sathvika/researchday.git
   cd researchday
   cd backend
   pip install -r requirements.txt
   cd ../frontend
   npm install
   cd ..
   docker compose up --build
   ```


Frontend can be accessed from http://localhost
Backend at http://localhost/api (so use /api to write any fetch request)
