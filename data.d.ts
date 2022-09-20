export type FeedItemContents = {
  contents: string;
  author: string;
  id: number;
};

export type Quote = {
  id: number;
  author: string;
  contents: string;
};

export type User = {
  id: number;
  name: string;
  image: string;
  email: string;
};

export type Post = {
  id: number;
  userid: number;
  contents: string;
  tags: string[];
};
