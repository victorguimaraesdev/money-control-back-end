import { MoneyCreate } from "./moneyType";
import DataBase from "../utils/dataBase";

class MoneyRepository {
    public create = async (data: MoneyCreate) => {
        try {
            return await DataBase.money.create({
                data: {
                    name: data.name,
                    value: data.value,
                    account: data.account
                }
            })
        }
        catch (err: any) {
            throw new Error('Não foi possivel cadastrar no banco de dados' + err.message)
        }
    }
} export default new MoneyRepository()