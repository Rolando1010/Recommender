<p align="center">
    <img src="./public/icon.png" width="100"/>
</p>

# Recommender 🔎

Esta aplicación fue creada para participar en la hackaton organizada por [midudev](https://twitch.tv/midudev)

A través de inteligencia artificial y web scraping realiza recomendaciones de sitios web y tecnologías al usuario en base aun problema ingresado.

### Funcionalidades:
* Obtener una serie de páginas recomendadas para resolver una necesidad ingresada por el usuario

<hr>
<br>

## Tecnologías
* NextJS
* Co:here
* Cheerio
* Playwright

<br>

## Ejecución

Descargar el proyecto de github
```bash
git clone https://github.com/Rolando1010/Recommender
```

Crear un archivo .env y colocar la variable de entorno
```env
NEXT_PUBLIC_COHERE_API_KEY=<COHERE_API_KEY>
```

Se instalan dlas dependencias y se ejecuta el proyecto
```bash
npm install
npm run dev
```

Ejecutar los test
```bash
npm run test
```

Ejecutar los test paso a paso
```bash
npm run test:steps
```