import { injectable } from "inversify";
import { IRepository } from "../interface/repository.interface";
import { Post } from "../model/post.model";
import { DatabaseTablesEnum } from "../utils/config/db.config";
import { elasticsearchClient } from "../utils/config/elasticsearch.config";

@injectable()
export class ElasticsearchRepository implements IRepository<Post> {

  create(
    tableName: DatabaseTablesEnum,
    data:Post
  ): Promise<Post> {
    throw new Error("Method not implemented.");
  }

  async saveMany(tableName: DatabaseTablesEnum, data: Post[]) {
    // Index with the bulk helper
    await elasticsearchClient.helpers.bulk({
      datasource: data,
      pipeline: "ent-search-generic-ingestion",
      onDocument: (doc) => ({ index: { _index: "post" } }),
    });
  }
}
