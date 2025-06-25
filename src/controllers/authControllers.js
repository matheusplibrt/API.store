import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import * as authRepository from "../repositories/authRepository.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

//Contrller para registar o usuário

export async function register(req, res) {
  const { nome, email, senha } = req.body;
  try {
    const senhaHash = await bcrypt.hash(senha, 10);
    await authRepository.createUser({ nome, email, senhaHash });

    res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    console.error(" Erro ao criar usuário:", error);
    res.status(400).json({ error: "Erro ao criar usuário" });
  }
}

//controller de login do usuario

export async function login(req, res) {
  const { email, senha } = req.body;

  try {
    const usuario = await authRepository.findUserByEmail(email);
    if (!usuario) {
      return res.status(401).json({ message: "Usuario não encontrado" });
    }
    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({ message: "Senha inválida" });
    }

    const token = jwt.sign({ id: usuario.id, nome: usuario.nome }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });
    res.cookie("token", token, {
      httpOnly: true, //permitir que o cookie "token" não seja acessado do lado do cliente por JS.
      secure: false, //coloque true se estiver em produção, somente https.
      sameSite: "lax",
      maxAge: 72000000, //2 horas em milisegundos
    });
    return res.json({ message: "Login realizado com sucesso", token: token });
  } catch {
    console.error("Erro ao fazer o login", error);
    res.status(400).json({ messaage: "Error ao fazer o login" });
  }
}

//função de logout do usuario
export function logout(req, res) {
  res.clearCookie("token");
  return res.json({ message: "Logout feito com sucesso" });
}

//perfil do usuario logado
export async function perfil(req, res) {
  const usuario = req.user.id;
  try {
    const usuario = await authRepository.findUserById(usuarioId);

    if (!usuario) {
      res.status(404).json({ message: "Usuario não encontrado" });
    }

    return res.json(usuario);
  } catch (error) {
    console.error("Error ao buscar usuário", error);
    res.status(400).json({ message: "Error ao buscar usuário" });
  }
}
