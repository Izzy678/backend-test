import { DatabaseTablesEnum } from "../utils/config/db.config";
import { IRepository } from "../interface/repository.interface";
import { Post } from "../model/post.model";
import { db } from "../utils/config/db.config";
import { injectable } from "inversify";

@injectable()
export class PostRepository implements IRepository<Post> {
  constructor() {}

  async saveMany(tableName: DatabaseTablesEnum, data: Post[]) {
    await db.insertInto(tableName).values(data).executeTakeFirst();
  }

  async create(tableName: DatabaseTablesEnum, data: Post): Promise<Post> {
    const post = await db
      .insertInto(tableName)
      .values({ ...data })
      .returningAll()
      .executeTakeFirst();
    console.log("created post", post);
    return post;
  }
}
