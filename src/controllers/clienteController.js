import * as clienteRepository from "../repositories/clienteRepository.js";

export async function getAllClientes(req, res) {
  try {
    const clientes = await clienteRepository.findAllClientes();

    return res.json(clientes);
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    return res
      .status(500)
      .json({ message: "Erro ao buscar todos os clientes" });
  }
}

//buscar cliente por id
export async function getClienteById(req, res) {
  const { id } = req.params;
  try {
    const cliente = await clienteRepository.findClienteById(id);

    if (!cliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    return res.json(cliente);
  } catch (error) {
    console.error("Erro ao buscar cliente:", error);

    res.status(500).json({ message: "Erro ao buscar cliente" });
  }
}

//criar um novo cliente
export async function createCliente(req, res) {
  const { nome, email, telefone } = req.body;

  try {
    const cliente = await clienteRepository.createCliente({
      nome,
      email,
      telefone,
    });

    return res
      .status(201)
      .json({ message: "cliente criado com sucessp", data: cliente });
  } catch (error) {
    console.error("Erro ao criar cliente:", error);

    return res.status(400).json({ message: "Erro ao criar cliente" });
  }
}

//atualiza um cliente
export async function updateCliente(req, res) {
  const { id } = req.params;
  const { nome, eail, telefone } = req.body;

  try {
    const cliente = await clienteRepository.updateCliente(id, {
      nome,
      email,
      telefone,
    });

    if (!cliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    return res
      .status(404)
      .json({ message: "Cliente atualizado com sucesso", data: cliente });
  } catch (error) {
    console.log("Erro ao atualizar cliente:", error);
    return res.status(400).json({ message: "Erro ao atualizar cliente" });
  }
}

//deleta o cliente

export async function deleteCliente(req, res) {
  const { id } = req.params;
  try {
    const cliente = await clienteRepository.deleteCliente(id);

    if (!cliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    return res
      .status(200)
      .json({ message: "Cliente deletado com sucesso", data: cliente });
  } catch (error) {
    console.error("Erro ao deletar cliente:", error);
    return res.status(500).json({ message: "Erro ao deletar cliente" });
  }
}
