export interface MicroCmsPost {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  categories: { id: string; name: string }[];
  thumbnail: { url: string; height: number; width: number };
}

export type Post = {
  id: number;
  title: string;
  content: string;
  thumbnailUrl: string;
  createdAt: Date;
  updatedAt: Date;
  PostCategories: PostCategory[];
};

export type PostCategory = {
  id: number;
  PostId: number;
  CategoryId: number;
};

export type Category = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  PostCategories: PostCategory[];
};
