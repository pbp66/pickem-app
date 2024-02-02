import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";
import Teams from "./teams.js";
import Weeks from "./weeks.js";
import Locations from "./locations.js";
import Picks from "./picks.js";

class Games extends Model {}

// Each team has a home and away team rather than team_1 and team_2
Games.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		home_team: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Teams,
				key: "id",
			},
		},
		away_team: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Teams,
				key: "id",
			},
		},
		winning_team: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: null,
			references: {
				model: Teams,
				key: "id",
			},
		},
		week: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Weeks,
				key: "id",
			},
		},
		location: {
			// TODO: automate the default value to be the home team's location
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: Locations,
				key: "id",
			},
		},
		alt_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: true,
		freezeTableName: true,
		underscored: true,
		modelName: "games",
	}
);

Games.belongsTo(Teams, {
	as: "home_team",
	foreignKey: "id",
});
Games.belongsTo(Teams, {
	as: "away_team",
	foreignKey: "id",
});
Games.belongsTo(Teams, {
	as: "winning_team",
	foreignKey: "id",
});
Games.belongsTo(Weeks);
Games.belongsTo(Locations);
Games.hasMany(Picks, {
	foreignKey: "game",
});

export default Games;
