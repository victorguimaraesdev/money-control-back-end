import { Router } from "express"
import MoneyController from "./moneyController"

class MoneyRouter {
    private router = Router()

    public getRouter = () => {
        this.router.post('/create', MoneyController.create)

        return this.router
    }
} export default new MoneyRouter().getRouter()