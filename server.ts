import express from 'express';
const server = express();
import { config } from 'dotenv';
import { mainRoutes } from './src/routes/main-routes';

config();

const port = process.env.PORT
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(mainRoutes);

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});