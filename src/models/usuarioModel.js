import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Usuario = sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true, // Garante que o email seja único
    },
    senha: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "usuarios", // Nome da tabela no banco de dados
    timestamps: true, // Habilita os campos de createdAt e updatedAt
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Usuario;
