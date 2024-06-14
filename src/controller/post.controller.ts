import { inject } from "inversify";
import { controller, httpPost } from "inversify-express-utils";
import { PostService } from "../service/post.service";
import { Request, Response } from "express";
import { ApiClientFactory } from "../factories/apiClient.factories";

@controller("/post")
export class PostController {
  constructor(@inject(PostService) private postService: PostService) {}

  @httpPost("/create-many")
  async asyncCreateManyPost(req: Request, res: Response) {
    try {
      const response = await ApiClientFactory.create().get("/posts");
      await this.postService.saveMany(response.data);
      res.status(200).send({ message: "post created  successfully" });
    } catch (error) {
      console.log("Error", error);
      res
        .status(500)
        .send({ message: "internal server error", details: error.message });
    }
  }

  @httpPost("/create")
  async asyncCreatePost(req: Request, res: Response) {
    try {
      const data = req.body;
      await this.postService.create(data)
      res.status(200).send({ message: "post created  successfully" });
    } catch (error) {
      console.log("Error", error);
      res
        .status(500)
        .send({ message: "internal server error", details: error.message });
    }
  }
}
