import express, {Request, Response} from "express";
import cors from 'cors';
import MoneyRouter from "./routes/moneyRouter";


class App {

    private app = express();

    constructor () {
        this.middlaware();
        this.corsOptions();
        this.routes();
    }

    private corsOptions() {
        this.app.use(cors({
            origin: '*',
            methods: 'GET, PUT, POST, DELETE',
            allowedHeaders: 'Content-Type, Authorization',
            exposedHeaders: 'Content-Type, Authorization'
        }))
    }

    private middlaware = () => {
        this.app.use(express.json());
    }

    private routes = () => {
        this.app.use('/money', MoneyRouter)
    }

    public start = (port: number) => {
        this.app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        })
    }
}
export default new App();

