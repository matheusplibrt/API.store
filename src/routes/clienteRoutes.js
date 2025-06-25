import { Router } from "express";
import * as clienteController from "../controllers/clienteController.js";
// Importando o controlador de clientes
import authMiddleware from "../../middleware/authMiddleware.js";

const router = Router();

//rota de clientes

router.get("/", authMiddleware, clienteController.getAllClientes);
router.get("/:id", authMiddleware, clienteController.getClienteById);
router.post("/", authMiddleware, clienteController.createCliente);
router.put("/:id", authMiddleware, clienteController.updateCliente);
router.delete("/:id", authMiddleware, clienteController.deleteCliente);

export default router;
