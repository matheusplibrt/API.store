import { Router } from "express";
import * as clienteController from "../controllers/clienteController.js";

const router = Router();

//rota de clientes

router.get(
  "/",
  //swagger.description = Retorna todos os clientes
  clienteController.getAllClientes
);
router.get(
  "/:id",
  //  swagger.description = Retorna um cliente pelo ID
  clienteController.getClienteById
);
router.post("/", clienteController.createCliente);
router.put("/:id", clienteController.updateCliente);
router.delete("/:id", clienteController.deleteCliente);

export default router;
