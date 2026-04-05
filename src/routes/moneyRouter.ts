import { Router } from "express"
import MoneyController from "./moneyController"

class MoneyRouter {
    private router = Router()

    public getRouter = () => {
        this.router.post('/create', MoneyController.create)
        this.router.get('/getall', MoneyController.getAll)
        this.router.delete('/delete', MoneyController.delete)
        this.router.put('/update', MoneyController.update)
    }
    
    public routes = () => {
        this.getRouter()
        return this.router
    }
} export default new MoneyRouter().routes()