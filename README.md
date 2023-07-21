# code-verifier-backend
Node Express project - backend

for the Code Verifier app. This is a RESTful API that provides endpoints to generate and verify
codes using various algorithms, such as SHA256 or MD5 hash functions for example. The
server uses JWT tokens
(JSON Web Tokens) for authentication purposes.

It also includes rate limiting middleware
which limits requests per IP address in order to prevent abuse of resources.
It's important
to note that this server does not store any user data other than their token.
If you want your users' personal information stored on our servers (e.g., email addresses),
then we recommend implementing it yourself with secure encryption techniques like SSL/TLS certificates and HTTPS connections between clients
then we recommend integrating with an external service like Firebase Authentication instead.
1. Install dependencies:
`npm install`
2. Create .env file based off sample env variables provided by `.sample_env`. You
can use `cp .sample_env .env && nano .env` command if you're familiar
with Linux/MacOS terminals.
If you are running Windows Subsystem for Linux then follow these steps:<|im_sep|>


Dependecies
1. dotenv
  Esta ependencia permite cargar variables de entorno desde un archivo llamado ".env" en una aplicacion. Como pueden ser las credenciales de acceso a base de datos, claves de API, entre otras configuraciones. Estas variables se podran acceder utilizando el objeto 'process.env'
2. express
  Express es un marco de aplicacion web para Node.js que proporciona funciones y herramientas para crear aplicaciones web y APIs de forma mas sencilla. Permite definir rutas para diferentes URL, y metodos HTTP(GET, POST, PUT, DELETE, etc), gestion de solicitudes HTTP.

devDependencies
Las siguientes dependencias se encuentran en esta seccion porque son modulos, o paquetes que se utilizan en el ambiente de desarrollo, pero no son necesarios para el funcionamiento en produccion. Estas dependencias se utilizan para mejorar la calidad ddel codigo, realizar test, optimizar el flujo de desaroollo, entre otras.
@types/
  express: 
    Proporciona definiciones de tipos paraa el marco de aplicaciones web Express en TypeScript, lo que permite al IDE(Integrated Development Enviroment) verificar y sugerir de manera mas precisa el codigo que se esta escribiendo.
  jest:
    Contiene definiciones de tipos para Jest, un framework de puebas en JavaScript/TypeScript.
  node:
    Propociona definiciones de tipos para Node.js, permitiendo caracteristicas modernas de JavaScript/TypeScript en el entorno de Node.js 
    
@typescript-eslint/eslint-plugin:
  Integra ESLint con Typescript para analizar estaticamente el codigo y encontrar problemas rapidamente, asi como tambien como deberia verse y comportarse el codigo
concurrently:
  Permite ejecutar multiples comandods dde fomra concurrente permitiendo ejecutar varios scripts simultaneamente, como la compilacion del codigo y la ejecucion del servidor.
eslint:
  Herramienta de analisis estatico del codigo que ayuda a mantener una consistencia en el estilo y detectar problemas en el codigo.
eslint-config-standartd-with-typescript:
  Implementa reglas de ESLint preconfiguradas para proyectos que utilizan TypeScript y que se adhieren a la manera del estilo "Standard"
eslint-plugin-import:
  Extension de ESLint que proporciona reglas adicionales para garantizar la gestion correcta de las importaciones y requerimientos de los modulos.
eslint-plugin-n:
  Plug de ESLint para verificar el uso correcto de la notacion asincrona (async/await)
eslint-plugin-promise:
  Proporciona reglas de ESLint para mejorar la legibilidad yt manejo adecuado de promesas en el cosigo.
jest:
  Framework de pruebas para JavaScript que permite ejecutar pruebas unitarias y de integracion de manera dencilla.
nodemon:
  Una utilidad que reinicia automaticamente Node.js cuando se detectan cambios en el codigo.
serve:
  Un servidor HTTP de desarrollo simple, util para servir archivos estaticos y probar la aplicacion en entornos locales.
supertest:
  Biblioteca para realizar pruebas HTTP en Nodde.js especiamente util para pruebas de API en Express
ts-jest:
  Permite compilar archivos de pruebas escritos en TypeScript para su uso con Jest
ts-node:
  Permite ejecutar archivos TypeScript directamente en Node.js sin la necesidad ded compilar previamente.
typescript:
  El compilador de TypeScript, necesario para compilar el codigo TypeScript en JavaScript.
webpack y webpack-cli:
  Herramientas para empaquetar y optimizar el codigo JavaScript/TypeScript y sus dependencias para su uso en un navegador o servidor.
webpack-node-externals:
  Ayua a excluir las dependencias de Node.js del paquete final de Webpack, ya que estas se pueden resolver en tiempo de ejecuciuon.
webpack-shell-plugin:
  Permite ejecutar scripts shell durante la compilacion de Webpack, lo que es util para automatizar tareas adicionales durante el desarrollo.

//"scripts": {
    "build": "npx tsc " :{
      Este Script se encarga de compilar el codigo TypeScript a JavaScript utilizandddo el compilador "tsc"(TypeScript Compiler), lo que genera los archivos JavaScript correspondientes en la carpeta "/dist"
    },
    "start": "node dist/index.js" :{
      Cuando se ejecuta este Script se inicia la aplicacion en prouccion. ejecuta el archivo index de la carpeta dist
    },
    "dev": "concurrently \"npx tsc --watch \" \"nodemon -q dist/index.js\" " :{
      Este Script se utiliza en desarrollo para hacer rapido y eficiente el flujo de trabajo en escritura y prueba del coddigo. Usa la dependencia concurrently para ejecutar dos comandos diferentes, por un lado "npx tsc --watch" que compila TS en tiempo real mientras se eddidta el codigo, la opcion "--watch" permite que 'tsc' se mantenga en espera y recompile automaticamente el codigo cada vez que se detectan cambio en los archivos fuentes. Por otro lado "nodemon -qw dist/index.js`:nodemon " es una utilidadd que monitorea los cambios en el archivo JavaScript en dist/index.js y reinicia automaticamente la aplicacion cada vez que detecta un cambio/ la opcion 'q' evita que nodemon genere mensajes en exceso y mantenga el coigo mas limpio
    },
    "test": "jest"  :{
      Este Script se creo para ejecutar las pruebas definidas en el proyecto utilizxando el framewrok "jest"
    },
    "serve:coverage": "npm run test && cd coverage/lcov-report && npx serve" :{
      Al ejecutar este comano, en principio se realizara una secuencia e rareas relacionadas con la cobertura de pruebas. utilizando el script "test", despues que las pruebas se completen exitosamente, el script cambia al directorio "coverage/lcov-report", donde se generan los informes de cobertura de codigo a partir de las pruebas realizadas. Por ultimo la herramienta 'serve'inicia el servidor web que muestra los informes de cobertura en un navegador, lo que falicita la revision y analisis de la cobertura de las pruebas realizadas.
    }
  }

Se deeberan crear las variables de entorno del puerto que usara en su computadora para proveer al archivo index.ts en la constante "port" definida en la linea 9

EJERCICIO:
Creación de rutas (endpoints del servidor):

Ruta tipo GET que devuelva una Response 200 con un JSON con la siguiente estructura:
  “data”: {
    “message”: “Goodbye, world”
  }

EXTRA: Investigar cómo leer parámetros de consulta por la URL

Modificar la ruta “hello” para que reciba un parámetro query (?name=”Nombre”) y devuelva una Response 200 con un JSON con la siguiente estructura:
  “data”: {
    “message”: “Hola, {nombre pasado por parámetro o “anónimo” en caso de que no exista el parámetro}”
  }

Instalar Postman y probar las dos rutas del proyecto