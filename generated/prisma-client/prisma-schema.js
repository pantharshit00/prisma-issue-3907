module.exports = {
        typeDefs: /* GraphQL */ `type AggregateWeb {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createWeb(data: WebCreateInput!): Web!
  updateWeb(data: WebUpdateInput!, where: WebWhereUniqueInput!): Web
  updateManyWebs(data: WebUpdateManyMutationInput!, where: WebWhereInput): BatchPayload!
  upsertWeb(where: WebWhereUniqueInput!, create: WebCreateInput!, update: WebUpdateInput!): Web!
  deleteWeb(where: WebWhereUniqueInput!): Web
  deleteManyWebs(where: WebWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  web(where: WebWhereUniqueInput!): Web
  webs(where: WebWhereInput, orderBy: WebOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Web]!
  websConnection(where: WebWhereInput, orderBy: WebOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WebConnection!
  node(id: ID!): Node
}

type Subscription {
  web(where: WebSubscriptionWhereInput): WebSubscriptionPayload
}

type Web {
  id: ID!
  name: String!
}

type WebConnection {
  pageInfo: PageInfo!
  edges: [WebEdge]!
  aggregate: AggregateWeb!
}

input WebCreateInput {
  name: String!
}

type WebEdge {
  node: Web!
  cursor: String!
}

enum WebOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type WebPreviousValues {
  id: ID!
  name: String!
}

type WebSubscriptionPayload {
  mutation: MutationType!
  node: Web
  updatedFields: [String!]
  previousValues: WebPreviousValues
}

input WebSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WebWhereInput
  AND: [WebSubscriptionWhereInput!]
  OR: [WebSubscriptionWhereInput!]
  NOT: [WebSubscriptionWhereInput!]
}

input WebUpdateInput {
  name: String
}

input WebUpdateManyMutationInput {
  name: String
}

input WebWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [WebWhereInput!]
  OR: [WebWhereInput!]
  NOT: [WebWhereInput!]
}

input WebWhereUniqueInput {
  id: ID
}
`
      }
    