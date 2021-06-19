# Backend Test para Cuemby

API REST Desarrollada con Node.js, Express, and MongoDB replica de la API del juego FIFA 21 Ultimate Team

## Requisitos de software

- Node.js **8+**
- MongoDB **3.6+**

## Como instalar

### Usando Git (recomendado)

1.  Clonar el proyecto desde GitHub. 

```bash
git clone https://github.com/FedericoIdarragaC/Backend-Test.git ./
```

### Descarga manual

1.  Descargar repositorio.
2.  Descomprimir en el directorio deseado.

### Instalar dependencias npm

```bash
npm install
```

## Ejecución

### Ejecutar API en un servidor local

```bash
npm start
```
Resultado en consola:

```bash
Server on port:  3000
Database connected
```

## Endpoints

### Jugadores por equipo 

Se pasa por request body la pagina y el nombre de el equipo:

url:
```bash
POST: localhost:3000/api/v1/team
```
```bash
{
  "Name":"inter",
  "Page":1
}
```

### Busqueda de jugadores

Se pasa por query el string a buscar por nombre, el orden y la página

url:
```bash
GET: localhost:3000/api/v1/players?search=Ramos&order=desc&page=1
```


## Protección de enpoints

### API KEY

En el archio .env que es cargado en las variables de entorno
se encuentra la llave que deberá ser entregada en el header 
para consumir los endpoints:

```bash
x-api-key : ____
```




