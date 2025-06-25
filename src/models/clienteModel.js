import { DataTypes, STRING } from "sequelize";
import sequelize from "../config/db.js";

const Cliente = sequelize.define(
    "Cliente",
  {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email:{
        type:DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    telefone:{
        type: DataTypes.STRING(15),
        allowNull: true,
    },
},
{
    tableName: "clientes",
    timestamps: true, // Adiciona createdAt e updatedAt
    createdAt: 'created_at', // Nome personalizado para a coluna de criação
    updatedAt: 'updated_at', // Nome personalizado para a coluna de atualização
}
);

export default Cliente;
// Exportando o modelo Cliente para ser utilizado em outros arquivos    

