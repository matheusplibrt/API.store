import dotenv from "dotenv";
import app from "./src/app.js";
import { setupSwagger } from "./src/swagger.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

setupSwagger(app);

app.listen(PORT, () => {
  console.log("API rodando em http://localhost:${PORT}/docs");
});

/* async function startServer() {
  await setupSwagger(app);

  app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}/docs`);
  });
}

startServer(); */
