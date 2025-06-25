import express, { Router } from "express";
import sequelize from "./config/db.js";
import router from "./routes/router.js";
import cors from "cors";
import corsConfig from "./config/corsConfig.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cors(corsConfig));
app.use(cookieParser());

//rotas
app.use("/api", router);

//sincronizar as tablas do banco
sequelize
  .sync()
  .then(() => {
    console.log("Banco de dados sincronizado com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao sincronizar o banco de dados:", error);
  });

export default app;
