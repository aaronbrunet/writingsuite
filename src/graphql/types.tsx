import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
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
  id: Scalars["ID"];
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
  created?: Maybe<Scalars["GraphQLDateTime"]>;
  lastLogin?: Maybe<Scalars["GraphQLDateTime"]>;
};

export type WordCount = {
  id: Scalars["ID"];
  created: Scalars["GraphQLDateTime"];
  count: Scalars["Int"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Goal: ResolverTypeWrapper<Goal>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  GraphQLDateTime: ResolverTypeWrapper<Scalars["GraphQLDateTime"]>;
  Project: ResolverTypeWrapper<Project>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  WordCount: ResolverTypeWrapper<WordCount>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Goal: Goal;
  ID: Scalars["ID"];
  Boolean: Scalars["Boolean"];
  Int: Scalars["Int"];
  GraphQLDateTime: Scalars["GraphQLDateTime"];
  Project: Project;
  String: Scalars["String"];
  Query: {};
  User: User;
  WordCount: WordCount;
};

export type GoalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Goal"] = ResolversParentTypes["Goal"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  active?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  start?: Resolver<ResolversTypes["GraphQLDateTime"], ParentType, ContextType>;
  end?: Resolver<ResolversTypes["GraphQLDateTime"], ParentType, ContextType>;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  created?: Resolver<
    ResolversTypes["GraphQLDateTime"],
    ParentType,
    ContextType
  >;
  updated?: Resolver<
    Maybe<ResolversTypes["GraphQLDateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GraphQlDateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["GraphQLDateTime"], any> {
  name: "GraphQLDateTime";
}

export type ProjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Project"] = ResolversParentTypes["Project"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  active?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  goals?: Resolver<
    Maybe<Array<ResolversTypes["Goal"]>>,
    ParentType,
    ContextType
  >;
  wordcounts?: Resolver<
    Maybe<Array<ResolversTypes["WordCount"]>>,
    ParentType,
    ContextType
  >;
  created?: Resolver<
    ResolversTypes["GraphQLDateTime"],
    ParentType,
    ContextType
  >;
  updated?: Resolver<
    Maybe<ResolversTypes["GraphQLDateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  User?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, "id">
  >;
  Project?: Resolver<
    Maybe<ResolversTypes["Project"]>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectArgs, "id">
  >;
  allProjects?: Resolver<
    Maybe<Array<ResolversTypes["Project"]>>,
    ParentType,
    ContextType
  >;
  allUserProjects?: Resolver<
    Maybe<Array<ResolversTypes["Project"]>>,
    ParentType,
    ContextType,
    RequireFields<QueryAllUserProjectsArgs, "user" | "id">
  >;
  allProjectWordCounts?: Resolver<
    Maybe<Array<ResolversTypes["WordCount"]>>,
    ParentType,
    ContextType,
    RequireFields<QueryAllProjectWordCountsArgs, "project">
  >;
  allProjectGoals?: Resolver<
    Maybe<Array<ResolversTypes["Goal"]>>,
    ParentType,
    ContextType,
    RequireFields<QueryAllProjectGoalsArgs, "project">
  >;
  WordCount?: Resolver<
    Maybe<ResolversTypes["WordCount"]>,
    ParentType,
    ContextType,
    RequireFields<QueryWordCountArgs, "id">
  >;
  Goal?: Resolver<
    Maybe<ResolversTypes["Goal"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGoalArgs, "id">
  >;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  created?: Resolver<
    Maybe<ResolversTypes["GraphQLDateTime"]>,
    ParentType,
    ContextType
  >;
  lastLogin?: Resolver<
    Maybe<ResolversTypes["GraphQLDateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WordCountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["WordCount"] = ResolversParentTypes["WordCount"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  created?: Resolver<
    ResolversTypes["GraphQLDateTime"],
    ParentType,
    ContextType
  >;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Goal?: GoalResolvers<ContextType>;
  GraphQLDateTime?: GraphQLScalarType;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  WordCount?: WordCountResolvers<ContextType>;
};
