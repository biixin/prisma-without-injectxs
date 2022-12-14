import express from 'express';
import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors'
// import { router } from './routes';
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'
import { prisma } from './database/prisma';
import { router } from './routes/routes';




dotenv.config()
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended: true }))

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)


app.listen(process.env.PORT, async () => {
    // await prisma()
    console.log(`Aplicativo rodando na porta: ${process.env.PORT}!`)
})

