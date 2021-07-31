export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  GraphQLDateTime: any;
};

export type Goal = {
  id: Scalars["ID"];
  active: Scalars["Boolean"];
  start: Scalars["GraphQLDateTime"];
  end: Scalars["GraphQLDateTime"];
  count: Scalars["Int"];
};

export type Project = {
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  active: Scalars["Boolean"];
  count: Scalars["Int"];
  goals?: Maybe<Array<Goal>>;
  wordcounts?: Maybe<Array<WordCount>>;
};

export type User = {
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type WordCount = {
  id: Scalars["ID"];
  created: Scalars["GraphQLDateTime"];
  count: Scalars["Int"];
};
