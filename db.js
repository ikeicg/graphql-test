// Departments
const departments = [
  { id: 1, name: "Engineering" },
  { id: 2, name: "Design" },
  { id: 3, name: "Quality Assurance" },
  { id: 4, name: "Marketing" },
  { id: 5, name: "Operations" },
];

// Employees
const employees = [
  { id: 1, name: "John Doe", position: "Software Engineer", departmentId: 1 },
  {
    id: 2,
    name: "Jane Smith",
    position: "Frontend Developer",
    departmentId: 1,
  },
  { id: 3, name: "Bob Johnson", position: "DevOps Engineer", departmentId: 1 },
  {
    id: 4,
    name: "Alice Brown",
    position: "Backend Developer",
    departmentId: 1,
  },
  { id: 5, name: "Chris Williams", position: "QA Engineer", departmentId: 1 },
  { id: 6, name: "Eva Davis", position: "Software Engineer", departmentId: 1 },
  { id: 7, name: "Mike Miller", position: "UI/UX Designer", departmentId: 2 },
  {
    id: 8,
    name: "Sophie Wilson",
    position: "Graphic Designer",
    departmentId: 2,
  },
  { id: 9, name: "Linda Clark", position: "Product Designer", departmentId: 2 },
  { id: 10, name: "Alex Turner", position: "UX Researcher", departmentId: 2 },
  { id: 11, name: "Emma White", position: "Quality Analyst", departmentId: 3 },
  {
    id: 12,
    name: "Sam Taylor",
    position: "Marketing Specialist",
    departmentId: 4,
  },
  { id: 13, name: "Daniel Green", position: "Content Writer", departmentId: 4 },
  { id: 14, name: "Grace Hall", position: "SEO Specialist", departmentId: 4 },
  {
    id: 15,
    name: "Peter Anderson",
    position: "Operations Manager",
    departmentId: 5,
  },
  {
    id: 16,
    name: "Olivia Brown",
    position: "Project Manager",
    departmentId: 5,
  },
  {
    id: 17,
    name: "Michael Smith",
    position: "DevOps Specialist",
    departmentId: 1,
  },
  {
    id: 18,
    name: "Sophia Davis",
    position: "Software Engineer",
    departmentId: 1,
  },
  {
    id: 19,
    name: "William Johnson",
    position: "Frontend Developer",
    departmentId: 1,
  },
  {
    id: 20,
    name: "Ella White",
    position: "Backend Developer",
    departmentId: 1,
  },
];

// Projects
const projects = [
  { id: 1, title: "E-commerce Platform Development", team: [1, 2, 3] },
  { id: 2, title: "Mobile Banking App", team: [4, 5, 6] },
  { id: 3, title: "Corporate Website Redesign", team: [7, 8, 9] },
  { id: 4, title: "Healthcare Management System", team: [10, 11, 12] },
  { id: 5, title: "Data Analytics Dashboard", team: [13, 14, 15] },
  { id: 6, title: "IoT Smart Home System", team: [16, 17, 18] },
  { id: 7, title: "Social Media Analytics Tool", team: [19, 20, 1] },
  { id: 8, title: "E-learning Platform", team: [2, 3, 4] },
  { id: 9, title: "Inventory Management System", team: [5, 6, 7] },
  { id: 10, title: "Customer Relationship Management (CRM)", team: [8, 9, 10] },
];

module.exports = { employees, projects, departments };
