import dotenv from 'dotenv'; dotenv.config();
import App from './src/app'; App.start(Number(process.env.PORT) || 8080);