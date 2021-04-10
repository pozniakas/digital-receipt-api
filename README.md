# Digital Receipt API
- Install Docker in your computer

- `cp .env.example .env`

- Fill environment variables

```
.env file in development environment:
NODE_ENV=development

# Debugging credentials
DEBUG_PORT=9229

# Express credentials
PORT=3000

# MySQL Database credentials
DB_USER=root
DB_PASS=root
DB_NAME=digital-receipt-db
DB_PORT=3306
DB_HOST=mysql
DB_TYPE=mysql
```

- `docker-compose run --rm digital-receipt-api sh entrypoint.sh`

- `docker-compose up`
