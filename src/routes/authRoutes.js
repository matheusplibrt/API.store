import { Router } from "express";
import * as authController from "../controllers/authControllers.js";
import { verificarEmailexiste } from "../../middleware/verificarEmailexiste.js";

const router = Router();

router.post(
  "/register",
  //#swagger.summary = rota de registro de usuario
  //#swagger.description = cadastra um usuario com nome,email e senha
  /* #swagger.responses [201]={
  description: "Usuário cadastrado com sucesso",
  content: {
    "application/json": {
      example:{
      nome: "Matheus",
      email: "matheus@gmail.com",
      senha: "*****"
      }
    }
  }
  */
  verificarEmailexiste,
  authController.register
);

router.post(
  "/login",
  //#swagger.summary = rota de login de usuario
  authController.login
);
router.post(
  "/logout",
  //#swagger.summary = rota de logout de usuario
  authController.logout
);
router.get(
  "/perfil",
  //#swagger.summary = rota de perfil de usuario
  authController.perfil
);

export default router;
