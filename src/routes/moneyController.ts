import { Request, Response } from "express"
import MoneyService from "./moneyService"

class MoneyController {
    public create = async (req: Request, res: Response) => {
        const { name, value, account } = req.body

        try {
            const response = await MoneyService.create({ name, value, account })
            return res.status(201).json({ message: 'Money Registrado com sucesso' })
        }
        catch (err) {
            return res.status(400).json({ message: 'Erro ao criar money' })
        }
    }

    public getAll = async (req: Request, res: Response) => {
        try {
            const response = await MoneyService.getAll()
            return res.status(200).json({
                data: response,
                message: 'Sucesso ao buscar registros'
            })
        }
        catch (err) {
            return res.status(400).json({ message: 'Não foi possivel buscar os registros' })
        }
    }
} export default new MoneyController()