export type FeedItemContents = {
  contents: string;
  author: string;
  id: number;
};

export type Quote = {
  id: number;
  author: string;
  quote: string;
};

export type QuoteList = Quote[];

export type User = {
  id: number;
  name: string;
  image: string;
  email: string;
};

export type UserList = User[];

export type Post = {
  id: number;
  userid: number;
  contents: string;
  tags: string[];
};
