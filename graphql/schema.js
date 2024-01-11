const { buildSchema } = require("graphql");

const typeDefs = `
    type Employee {
        id: Int!
        name: String!
        position: String!
        departmentId: Int!
        department: Department
    }
    type Department{
        id: Int!
        name: String!
    }
    type Query {
        employees: [Employee]!
        departments: [Department]
    }
`;

module.exports = { typeDefs };
