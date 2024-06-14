import { inject, injectable } from "inversify";
import { DatabaseTablesEnum } from "../lib/config/db.config";
import { Post } from "../model/post.model";
import { PostRepository } from "../Repository/post.repository";
import { TYPES } from "../lib/types/types";
import { ElasticsearchRepository } from "../Repository/elasticsearch.repository";

@injectable()
export class PostService {
  constructor(
    @inject(TYPES.PostRepository) private postRepository: PostRepository,
    @inject(TYPES.ElasticsearchRepository)
    private elasticSearchRepository: ElasticsearchRepository
  ) {}
  async saveMany(data: Post[]){
    //save to pg
     await this.postRepository.saveMany(
      DatabaseTablesEnum.post,
      data
    );
    //save to elasic
    await this.elasticSearchRepository.saveMany(
      DatabaseTablesEnum.post,
      data
    );
  }

  async create(data:Post){
    await this.postRepository.create(DatabaseTablesEnum.post,data)
  }

}
