<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
    ```bash
    yarn install
    ```
3. Tener Nest CLI instalado
    ```bash
    npm i -g @nestjs/cli 
    ```
4. Levantar la base de datos
    ```bash
    docker-compose up -d
    ```
5. Clonar el archivo __.env.sample__ y renombrar la copia a __.env__
6. Llenar las variables de entorno definidas en __.env__
7. Ejecutar la aplicación en dev:
    ```bash
    yarn start:dev
    ```
8. Reconstruir la base de datos con el seed (post request)

    ```http request
    http://localhost:3000/api/seed
    ```

## Stack usado

* MySQL 8.0.30 or latest
* Nest