import { MoneyCreate } from "./moneyType";
import MoneyRepository from "./moneyRepository";

class MoneyService {
    public create = async (data: MoneyCreate) => {
        try {
            if (Math.sign(Number(data.value)) == -1) {
                throw new Error('O numero não pode ser negativo')
            }
            await MoneyRepository.create(data)
        }
        catch (err) {
            throw new Error('Não passou no service')
        }
    }
} export default new MoneyService()