import * as authRepository from "../src/repositorios/authRepository.js";

export async function verificarEmailexiste(req, res, next) {
  const { email } = req.body;
  try {
    const usuario = await authRepository.findUserByEmail(email);
    if (usuario) {
      return res.status(400).json({ message: "Email já cadastrado" });
    }
    next();
  } catch (error) {
    console.error("Erro no middleware de verificação do email", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}
