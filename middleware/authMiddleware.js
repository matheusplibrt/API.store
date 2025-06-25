import jwt from "jsonwebtoken";
import jwtConfig from "../config/jwt.config.js";

export default function authMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Acesso negado. Token não fornecido" });
  }

  jwt.verify(token, jwtConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "token inválido ou expirado" });
    }
    req.user = decoded;

    next();
  });
}
