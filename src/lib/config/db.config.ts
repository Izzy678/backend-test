 // this is the Database interface we defined earlier
 import { Pool } from 'pg'
 import { Kysely, PostgresDialect, sql } from 'kysely';
import { PostTable } from '../../model/post.model'
 
 const dialect = new PostgresDialect({
   pool: new Pool({
     database: 'Backend Test',
     host: 'localhost',
     user: 'postgres',
     port: 5432,
     max: 10,
     password:'ozaveshe123'
   })
 })

 export interface Database{
    post:PostTable
}

 export const db = new Kysely<Database>({
   dialect
 });

export enum DatabaseTablesEnum{
    post = 'post'
}
