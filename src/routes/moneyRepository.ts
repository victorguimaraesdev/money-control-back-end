import { MoneyCreate } from "./moneyType";
import DataBase from "../utils/dataBase";

class MoneyRepository {
    public create = async (data: MoneyCreate) => {
        return DataBase.money.create({ data })
    }
    public findById = (id: string) => {
        return DataBase.money.findUnique({where: { id }})
}
    public getAll = async () => {
        return DataBase.money.findMany()
    }
} export default new MoneyRepository()