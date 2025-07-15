import swaggerUi from "swagger-ui-express";
import fs from "fs/promises";

export async function setupSwagger(app) {
  try {
    const data = await fs.readFile("../swagger-output.json");

    const swaggerDoc = JSON.parse(data.toString());

    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
  } catch (error) {
    console.error("Erro ao carregar o Swagger", error.message);
  }
}

import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "1.0.0",
    title: "API com Node e Express",
    description: "Some description...",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
  components: {
    schemas: {
      someBody: {
        $name: "Jhon Doe",
        $age: 29,
        about: "",
      },
      someResponse: {
        name: "Jhon Doe",
        age: 29,
        diplomas: [
          {
            school: "XYZ University",
            year: 2020,
            completed: true,
            internship: {
              hours: 290,
              location: "XYZ Company",
            },
          },
        ],
      },
      someEnum: {
        "@enum": ["red", "yellow", "green"],
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./app.js"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
