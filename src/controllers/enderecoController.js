import e from "express";
import * as enderecoRepository from "../repositories/enderecoRepository.js";

//controlar que buscas todas as rotas de endereços
export async function getAllEnderecos(req, res) {
  try {
    const enderecos = await enderecoRepository.findAllEnderecos();

    return res.json(enderecos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar todos endereços", error });
    return res.status(400).json({ error: "Erro ao buscar todos endereços" });
  }
}

// buscar endereço por id
export async function getEnderecoById(req, res) {
  const { id } = req.params;
  try {
    const endereco = await enderecoRepository.findEnderecoById(id);

    if (!endereco) {
      return res.status(404).json({ message: "Endereço não encontrado" });
    }

    return res.json(endereco);
  } catch (error) {
    console.error("Erro ao buscar endereço:", error);
    return res.status(500).json({ message: "Erro ao buscar endereço" });
  }
}

// criar um novo endereço
export async function createEndereco(req, res) {
  const { rua, cidade, estado, cep } = req.body;
  try {
    const endereco = await enderecoRepository.createEndereco({
      rua,
      cidade,
      estado,
      cep,
    });

    return res
      .status(201)
      .json({ message: "Endereço foi criado com sucesso", data: endereco });
  } catch (error) {
    console.error("Erro ao o criar endereço:", error);
    return res.status(400).json({ message: "Erro ao criar endereço" });
  }
}

//editar o endereço
export async function updateCliente(req, res) {
  const { id } = req.params;
  const { rua, cidade, estado, cep } = req.body;

  try {
    const endereco = await enderecoRepository.updateEndereco(id, {
      rua,
      cidade,
      estado,
      cep,
    });

    if (!endereco) {
      return res.status(404).json({ message: "Endereço não encontrado" });
    }

    return res.json({
      message: "Endereço atualizado com sucesso",
      data: endereco,
    });
  } catch (error) {
    console.error("Erro ao atualizar endereço:", error);
    return res.status(500).json({ message: "Erro ao atualizar endereço" });
  }
}
// deletar o endereço
