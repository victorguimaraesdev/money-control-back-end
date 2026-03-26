import { PrismaClient } from '@prisma/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'

class DataBase {
    private instance: PrismaClient
    constructor() {
        const url = process.env.DATABASE_URL || ''

        const adapter = new PrismaBetterSqlite3({ url })
        this.instance = new PrismaClient({ adapter })
    }
    public connect = () => {
        return this.instance
    }
} export default new DataBase().connect()