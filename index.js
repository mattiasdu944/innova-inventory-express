import express from "express";
import dotenv from "dotenv";
import categoriesRoutes from './router/category.routes.js'




dotenv.config();

const app = express();

app.use(express.json()) // permite recibir req.body en json
app.use('/api', categoriesRoutes) // carga de rutas


const PORT = process.env.PORT || 4000; // puerto donde se ejecuta

app.listen(PORT, () => {
    console.log('Server on port:', PORT)
})