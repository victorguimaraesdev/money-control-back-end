import { MoneyCreate } from "./moneyType";
import MoneyRepository from "./moneyRepository";

class MoneyService {
    public create = async (data: MoneyCreate) => {
        if (Math.sign(Number(data.value)) == -1) {
            throw new Error('O numero não pode ser negativo')
        }
        if(data.name.length > 100) {
            throw new Error('O nome precisa ser menor')
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
        return MoneyRepository.delete(id)
    }

} export default new MoneyService()