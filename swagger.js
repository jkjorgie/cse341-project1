const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "Contacts API",
  },
  host: "https://cse341-project1-z5a4.onrender.com/",
  schemes: ["http", "https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"]; // include mount paths for /users and /contacts

swaggerAutogen(outputFile, endpointsFiles, doc);
