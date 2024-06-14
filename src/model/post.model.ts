import { Generated, Insertable, Selectable, Updateable } from "kysely";

export interface PostTable {
  id: Generated<number>;
  userId: string;
  body: string;
  title: string;
}

export type Post = Selectable<PostTable>;
export type NewPost = Insertable<PostTable>;
export type PostUpdate = Updateable<PostTable>;
