const express = require('express')
const cors = require('cors')
const swaggerFile = require('./swagger_output.json')
const swaggerUi = require('swagger-ui-express');
const Connection = require('./models/connection')

const favoritesRoutes = require('./routers/favorites');
const app = express();
require('dotenv').config();

const PORT = process.env.DB_PORT || 3001



app.use(
    cors({
        origin: ['http://localhost:4001'],
        credentials: true
    })
)

app.use(express.json());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/', favoritesRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
    const connection = new Connection()
    connection.sequelize
        .authenticate()
        .then(() => {
            console.log('Database connected')
        })
        .catch((error) => console.error(error))
})