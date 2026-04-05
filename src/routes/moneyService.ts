import { MoneyCreate } from "./moneyType";
import MoneyRepository from "./moneyRepository";
import { Money } from "@prisma/client";

class MoneyService {
    public create = async (data: MoneyCreate) => {
        if (Math.sign(Number(data.value)) == -1) {
            throw new Error('O numero não pode ser negativo')
        }
        MoneyRepository.create(data)
    }

    public getAll = async () => {
        return MoneyRepository.getAll()
    }

    public delete = async (id: string) => {
        if (!id) {
            throw new Error('O id é necessario para a função delete')
        }
        const exist = await MoneyRepository.findById(id)
        if (!exist) {
            throw new Error('registro não encontrado no banco de dados')
        }
        return MoneyRepository.delete(id)
    }

    public update = async (data: Money) => {
        if (!data.id) {
            throw new Error('O id é necessario para a função delete')
        }
        const exist = await MoneyRepository.findById(data.id)
        if (!exist) {
            throw new Error('registro não encontrado no banco de dados')
        }
        return MoneyRepository.update(data)
    }

} export default new MoneyService()