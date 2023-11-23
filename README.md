# Creacion y edicion de la App
Estos son los pasos para clonar, editar y subir una nueva version de la pagina

## Instalacion
Crear una nueva carpeta, abrirla desde Visual Studio Code, desde la terminal:

```bash
git clone https://github.com/rappidtech/link-app.git
cd link-app
npm install
npm start
```
Esto abrira la aplicacion en http://localhost:3000/

### Personalizaciones
Para personalizar la app, se debe ir a la carpeta link-app/src/edits
Ahí hay 2 archivos data.json y styles.json
Para modificar una propiedad en data.json, se cambia el nombre de la propiedad que corresponda
Por ejemplo para "titulo" se cambia el titulo de la App de "Healthy Food" a "Mi app"

```
{
    "logo": "./favicon.jpg",
    "titulo": "Healthy Food",
    "subtitulo": "@healthyfood",
    "descripcion": "Descripción de la página",
    "poweredBy": "RappidTech",
    "enlacePrincipal": "https://rappidtech.com",
    "enlaceRappid": "https://rappidtech.com",
    "redes": [
        {
            "icon": "faFacebook",
            "nombre": "Facebook",
            "url": "https://facebook.com",
            "render": "si"
        },
        {
            "icon": "faInstagram",
            "nombre": "Instagram",
            "url": "https://instagram.com",
            "render": "si"
        },
```

En el caso de styles.json, se deben cambiar los estilos CSS de la app, de acuerdo a la seccion que se desee modificar

```
{
    "general": {
      "backgroundColor": "#fff"
    },
    "logo": {
        "logoSize": "130px"
    },
    "titulo": {
      "colorTexto": "rgb(255, 115, 0)",
      "fontSize": "1rem",
      "textTransform": "uppercase"
    },
    "subtitulo": {
      "colorTexto": "rgb(120, 211, 46)",
      "fontSize": "1rem",
      "textTransform": "none"
    },
    "enlaces": {
      "colorTexto": "#ffffff", 
      "colorFondo": "rgb(255, 115, 0)",
      "colorHover": "rgb(120, 211, 46)",
      "borderRadius": "20px",
      "colorIcon": "#fff",
      "fontWeigth": "600",
      "fontSize": "1.5rem",
      "textTransform": "uppercase",
      "scaleLink": "scale(1.05)",
      "margin": "6px 0",
      "padding": "12px 20px"
    },
```
#### Modificaciones de archivos
Se debe modificar el index.html cambiando el titulo de la App y la descripcion
```
<head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.jpg" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.jpg" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
```
Se debe modificar package.json agregando un item llamado "homepage" y agregando la nueva direccion que tendra el sitio
```
{
  "name": "rappid-links",
  "homepage": "https://rappidtech.com/test/",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
```
Finalmente modificar manifest.json en la parte de "name" y "short_name"
```
{
  "short_name": "Test",
  "name": "Test App Sample",
  "icons": [
    {
```
##### Compilacion y subir la pagina
Una vez finalizado todos los cambios se debe compilar el proyecto. Para hacerlo en la terminal se escribe
```
npm run build
```
Con esto se creara una carpeta "build" en el directorio del proyecto con los archivos necesarios para subirlos

