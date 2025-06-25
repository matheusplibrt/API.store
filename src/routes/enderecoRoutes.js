import { Router } from "express";
import * as enderecoController from "../controllers/clienteController.js";

const router = Router();

router.get("/", enderecoController.getAllEnderecos);
router.get("/:id", enderecoController.getEnderecoById);
router.post("/", enderecoController.createEndereco);
router.put("/:id", enderecoController.updateEndereco);
router.delete("/:id", enderecoController.deleteEndereco);
