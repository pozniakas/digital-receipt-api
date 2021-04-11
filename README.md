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

Routes (secured with a secret, which has to be provided in AUTH_SECRET header)

-GET /digital-receipt/:id

Required parameters:
-id (path)

Response

-String of base64 QR code image with encrypted data

-POST /digital-receipt

Required parameters:
-amount: number
-trTime: Date
-counterParty: string
-paymentMethod: PaymentMethod (CASH, DEBIT_CARD, CREDIT_CARD)

Response

-id: string
-amount: number
-trTime: date
-counterParty: string
-paymentMethod: PaymentMethod (CASH, DEBIT_CARD, CREDIT_CARD)
-createdAt: date
-updatedAt: date
