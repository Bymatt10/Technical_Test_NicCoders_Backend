const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routers/favorites.js']

swaggerAutogen(outputFile, endpointsFiles)