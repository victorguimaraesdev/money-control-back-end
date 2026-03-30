import { MoneyCreate } from "./moneyType";
import DataBase from "../utils/dataBase";

class MoneyRepository {
    public create = async (data: MoneyCreate) => {
        return DataBase.money.create({ data })
    }
    
    public getAll = async () => {
        return DataBase.money.findMany()
    }
    
    public findById = (id: string) => {
        return DataBase.money.findUnique({ where: { id } })
    }

    public delete = async (id: string) => {
        return DataBase.money.delete({ where: { id } })
    }

} export default new MoneyRepository()