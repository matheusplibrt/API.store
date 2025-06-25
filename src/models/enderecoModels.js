import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Endereco = sequelize.define(
  "Endereco",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Clientes", // Nome da tabela referenciada
        key: "id", // Chave primária da tabela referenciada
      },
      onDelete: "CASCADE", // Comportamento ao deletar o cliente
      onUpdate: "CASCADE", // Comportamento ao atualizar o cliente
    },
    rua: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    tableName: "enderecos", // Nome da tabela no banco de dados
    timestamps: true, // Desabilita os campos de createdAt e updatedAt
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
//associação de cliente
Endereço.belongsTo(Cliente, {
  foreignKey: "cliente_id", // Chave estrangeira na tabela Endereco
  as: "cliente", // Alias para a associação
});

export default Endereco;
