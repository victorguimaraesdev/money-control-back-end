import { Request, Response } from "express"
import MoneyService from "./moneyService"

class MoneyController {
    public create = async (req: Request, res: Response) => {
        const { name, value, account } = req.body
        if (!account) {
            throw new Error('Tipo de entrada não encontrada')
        }
        if (!name) {
            throw new Error('Nome não encontrado')
        }
        if (!value) {
            throw new Error('Valor não encontrado')
        }
        try {
            MoneyService.create({ name, value, account })
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

    public delete = async (req: Request, res: Response) => {
        try {
            const { id } = req.body
            MoneyService.delete(id)
            return res.status(200).json({ message: 'Registro deletado com sucesso' })
        }
        catch (err) {
            return res.status(400).json({ message: 'Erro ao deletar o registro' })
        }
    }
    
    public update = async (req: Request, res: Response) => {
        try {
            const { id, name, value, account } = req.body
            await MoneyService.update({ id, name, value, account })
            return res.status(200).json({ message: 'Update realizado com sucesso' })
        }
        catch (err) {
            return res.status(400).json({ message: 'Erro ao realizar o update' })
        }
    }
} export default new MoneyController()