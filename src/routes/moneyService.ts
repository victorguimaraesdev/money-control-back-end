import { MoneyCreate } from "./moneyType";
import MoneyRepository from "./moneyRepository";

class MoneyService {
    public create = (data:MoneyCreate) => {
        if(Math.sign(Number(data.value)) == -1) {
            throw new Error('O numero não pode ser negativo')
        }
        try{
        MoneyRepository.create(data)
        }
        catch(err) {
            throw new Error('Não passou no service')
        }
       
    }
} export default new MoneyService()