import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

class Weeks extends Model {}

Weeks.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		year: {
			type: DataTypes.INTEGER,
			allowNull: false,
			required: true,
		},
		season: {
			type: DataTypes.STRING,
			allowNull: true,
			required: true,
		},
		number: {
			type: DataTypes.INTEGER,
			allowNull: false,
			required: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		start_date: {
			type: DataTypes.DATE,
			allowNull: true,
		},
		end_date: {
			type: DataTypes.DATE,
			allowNull: true,
		},
	},
	{
		sequelize,
		timestamps: true,
		freezeTableName: true,
		underscored: true,
		modelName: "weeks",
	}
);

export default Weeks;
