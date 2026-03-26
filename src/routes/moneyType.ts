import { Money } from "@prisma/client";

export type MoneyCreate = Omit<Money,'id'>