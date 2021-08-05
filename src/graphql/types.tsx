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
  created: Scalars["GraphQLDateTime"];
  updated?: Maybe<Scalars["GraphQLDateTime"]>;
};

export type Project = {
  id: Scalars["ID"];
  user: User;
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  active: Scalars["Boolean"];
  count: Scalars["Int"];
  goals?: Maybe<Array<Goal>>;
  wordcounts?: Maybe<Array<WordCount>>;
  created: Scalars["GraphQLDateTime"];
  updated?: Maybe<Scalars["GraphQLDateTime"]>;
};

export type Query = {
  User?: Maybe<User>;
  Project?: Maybe<Project>;
  allProjects?: Maybe<Array<Project>>;
  allUserProjects?: Maybe<Array<Project>>;
  allProjectWordCounts?: Maybe<Array<WordCount>>;
  allProjectGoals?: Maybe<Array<Goal>>;
  WordCount?: Maybe<WordCount>;
  Goal?: Maybe<Goal>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type QueryProjectArgs = {
  id: Scalars["ID"];
};

export type QueryAllUserProjectsArgs = {
  user: User;
};

export type QueryAllProjectWordCountsArgs = {
  project: Project;
};

export type QueryAllProjectGoalsArgs = {
  project: Project;
};

export type QueryWordCountArgs = {
  id: Scalars["ID"];
};

export type QueryGoalArgs = {
  id: Scalars["ID"];
};

export type User = {
  id: Scalars["ID"];
  name: Scalars["String"];
  created: Scalars["GraphQLDateTime"];
  lastLogin?: Maybe<Scalars["GraphQLDateTime"]>;
};

export type WordCount = {
  id: Scalars["ID"];
  created: Scalars["GraphQLDateTime"];
  count: Scalars["Int"];
};
