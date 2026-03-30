import { Router } from "express"
import MoneyController from "./moneyController"

class MoneyRouter {
    private router = Router()

    public getRouter = () => {
        this.router.post('/create', MoneyController.create)
        this.router.get('/getall', MoneyController.getAll)

        return this.router
    }
} export default new MoneyRouter().getRouter()