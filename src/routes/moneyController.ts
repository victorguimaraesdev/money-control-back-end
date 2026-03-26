import { Request, Response } from "express"
import MoneyService from "./moneyService"

class MoneyController {
    public create = async (req: Request, res: Response) => {
        const { name, value, account } = req.body

        try {
            if (!name || !value || !account) {
                return res.status(400).json({ message: 'Necessario preencher todos os campos' })
            }
            await MoneyService.create({ name, value, account })
            return res.status(201).json({ message: 'Money Registrado com sucesso' })
        }
        catch (err) {
            return res.status(400).json({ message: 'Erro ao criar money' })
        }

    }
} export default new MoneyController()