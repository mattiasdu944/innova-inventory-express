# Inventory Backend

## Variables de entorno
En un archivo .env configura las siguientes variables de entorno antes de crear el proyecto.
```
MONGO_URL=mongodb://database:27017

PORT=4000

JWT_SECRET=secret_key_iventory
```

## Docker compose
Correr el proyecto.
```
version: '3'
services:
  db:
    image: mongo:5.0.0
    container_name: database
    restart: always
    ports:
      - 27017:27017
    volumes:
      - ./mongo:/data/db
  app:
    depends_on:
      - db
    restart: always
    container_name: express-app
    image: mattidu944/inventory-express:1.0.0
    ports:
      - "${PORT}:${PORT}"

    environment:
      PORT: ${PORT}
      MONGO_URL: ${MONGO_URL}
      JWT_SECRET: ${JWT_SECRET} 
```

## Database Seed
Ejecuta el siguiente endpoint para llenar la base de datos.
```http
http://localhost:${PORT}/api/seed
```

## Usuarios para entrar al sistema
```
{
    email: 'admin@correo.com',
    password: 123456,
},
{
    email: 'user@correo.com',
    password: 123456,
}
```