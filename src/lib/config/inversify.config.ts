// inversify.config.ts
import { Container } from "inversify";
import { PostController } from "../../controller/post.controller";
import { PostService } from "../../service/post.service";
import { PostRepository } from "../../Repository/post.repository";
import { TYPES } from "../types/types";
import { IRepository } from "../../interface/repository.interface";
import { Post, PostTable } from "../../model/post.model";
import { ElasticsearchRepository } from "../../Repository/elasticsearch.repository";
import { elasticsearchClient } from "./elasticsearch.config";

const container = new Container();
container.bind<PostController>(PostController).toSelf();
container.bind<PostService>(PostService).toSelf();
container.bind<PostRepository>(PostRepository).toSelf();
container.bind<IRepository<Post>>(TYPES.PostRepository).to(PostRepository);
container.bind<IRepository<Post>>(TYPES.ElasticsearchRepository).to(ElasticsearchRepository);
export default container;
