//vai centralizar as rotas//puxar cada arquivo
import { Router } from "express";
import clienteRoutes from "./clienteRoutes.js"; // Importando as rotas de clientes
import enderecoRoutes from "./enderecoRoutes.js"; // Importando as rotas de endereços
import authRoutes from "./authRoutes.js"; // Importando as rotas de autenticação

const router = Router();

router.use(
  "/auth",
  // #swagger.tags = ['autenticação']
  authRoutes
);
router.use(
  "/clientes",
  //#swagger.tags=['clientes']
  clienteRoutes
);
router.use(
  "/endereco",
  //#swagger.tags=['endereços']
  enderecoRoutes
);

export default router;
