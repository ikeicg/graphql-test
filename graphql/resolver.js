const { departments, employees, projects } = require("../db");

const resolvers = {
  Query: {
    employees() {
      return employees;
    },
    departments() {
      return departments;
    },
  },
  Employee: {
    department(employee) {
      return departments.find((x) => x.id == employee.departmentId);
    },
  },
};

module.exports = { resolvers };
