// Code generated by Prisma (prisma@1.25.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  web: (where?: WebWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  web: (where: WebWhereUniqueInput) => WebPromise;
  webs: (args?: {
    where?: WebWhereInput;
    orderBy?: WebOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Web>;
  websConnection: (args?: {
    where?: WebWhereInput;
    orderBy?: WebOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => WebConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createWeb: (data: WebCreateInput) => WebPromise;
  updateWeb: (args: {
    data: WebUpdateInput;
    where: WebWhereUniqueInput;
  }) => WebPromise;
  updateManyWebs: (args: {
    data: WebUpdateManyMutationInput;
    where?: WebWhereInput;
  }) => BatchPayloadPromise;
  upsertWeb: (args: {
    where: WebWhereUniqueInput;
    create: WebCreateInput;
    update: WebUpdateInput;
  }) => WebPromise;
  deleteWeb: (where: WebWhereUniqueInput) => WebPromise;
  deleteManyWebs: (where?: WebWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  web: (
    where?: WebSubscriptionWhereInput
  ) => WebSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type WebOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type WebWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface WebWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: WebWhereInput[] | WebWhereInput;
  OR?: WebWhereInput[] | WebWhereInput;
  NOT?: WebWhereInput[] | WebWhereInput;
}

export interface WebCreateInput {
  name: String;
}

export interface WebUpdateInput {
  name?: String;
}

export interface WebUpdateManyMutationInput {
  name?: String;
}

export interface WebSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: WebWhereInput;
  AND?: WebSubscriptionWhereInput[] | WebSubscriptionWhereInput;
  OR?: WebSubscriptionWhereInput[] | WebSubscriptionWhereInput;
  NOT?: WebSubscriptionWhereInput[] | WebSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Web {
  id: ID_Output;
  name: String;
}

export interface WebPromise extends Promise<Web>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface WebSubscription
  extends Promise<AsyncIterator<Web>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface WebConnection {
  pageInfo: PageInfo;
  edges: WebEdge[];
}

export interface WebConnectionPromise
  extends Promise<WebConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<WebEdge>>() => T;
  aggregate: <T = AggregateWebPromise>() => T;
}

export interface WebConnectionSubscription
  extends Promise<AsyncIterator<WebConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<WebEdgeSubscription>>>() => T;
  aggregate: <T = AggregateWebSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface WebEdge {
  node: Web;
  cursor: String;
}

export interface WebEdgePromise extends Promise<WebEdge>, Fragmentable {
  node: <T = WebPromise>() => T;
  cursor: () => Promise<String>;
}

export interface WebEdgeSubscription
  extends Promise<AsyncIterator<WebEdge>>,
    Fragmentable {
  node: <T = WebSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateWeb {
  count: Int;
}

export interface AggregateWebPromise
  extends Promise<AggregateWeb>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateWebSubscription
  extends Promise<AsyncIterator<AggregateWeb>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface WebSubscriptionPayload {
  mutation: MutationType;
  node: Web;
  updatedFields: String[];
  previousValues: WebPreviousValues;
}

export interface WebSubscriptionPayloadPromise
  extends Promise<WebSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = WebPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = WebPreviousValuesPromise>() => T;
}

export interface WebSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<WebSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = WebSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = WebPreviousValuesSubscription>() => T;
}

export interface WebPreviousValues {
  id: ID_Output;
  name: String;
}

export interface WebPreviousValuesPromise
  extends Promise<WebPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface WebPreviousValuesSubscription
  extends Promise<AsyncIterator<WebPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Web",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;