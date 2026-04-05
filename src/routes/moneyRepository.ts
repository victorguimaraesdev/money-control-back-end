import { MoneyCreate } from "./moneyType";
import DataBase from "../utils/dataBase";
import { Money } from "@prisma/client"

class MoneyRepository {
    public create = async (data: MoneyCreate) => {
        return DataBase.money.create({ data })
    }

    public getAll = async () => {
        return DataBase.money.findMany()
    }

    public findById = async (id: string) => {
        return DataBase.money.findUnique({ where: { id } })
    }

    public delete = async (id: string) => {
        return DataBase.money.delete({ where: { id } })
    }

    public update = async (data: Money) => {
        return DataBase.money.update({
            where: { id: data.id },
            data: {
                name: data.name,
                value: data.value,
                account: data.account
            }
        })
    }

} export default new MoneyRepository()