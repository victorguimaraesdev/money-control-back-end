import { MoneyCreate } from "./moneyType";
import MoneyRepository from "./moneyRepository";

class MoneyService {
    public create = async (data: MoneyCreate) => {
        if (!data.account) {
            throw new Error('Tipo de entrada não encontrada')
        }
        if (!data.name) {
            throw new Error('Nome não encontrado')
        }
        if (!data.value) {
            throw new Error('Valor não encontrado')
        }
        if (Math.sign(Number(data.value)) == -1) {
            throw new Error('O numero não pode ser negativo')
        }

        MoneyRepository.create(data)
    }

    public getAll = async () => {
        return MoneyRepository.getAll()
    }
} export default new MoneyService()