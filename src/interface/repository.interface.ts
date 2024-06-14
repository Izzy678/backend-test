import { DatabaseTablesEnum } from "../utils/config/db.config";

export interface IRepository<T> {
  saveMany(tableName: DatabaseTablesEnum, data: T[]):void;
  create(tableName:DatabaseTablesEnum,data:T):Promise<T>;
}
