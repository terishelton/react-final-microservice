# Microservice template

When interacting with APIs that require secret keys, it's best to create a web service that you control in order to keep the keys private. We can do so by creating a small service ("microservice") using NodeJS and deploy it using [Now](https://zeit.co/now).

## Getting started locally

```bash
npm install

# Without environment variables
npm start

# With environment variables
APP_ID="app_id_value" npm start
```

## To deploy

```bash
now

# Environment variables
now -e APP_ID="app_id_value"
```