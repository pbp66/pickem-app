import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

class Locations extends Model {}

Locations.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [2],
				isIN: [
					"AL",
					"AK",
					"AZ",
					"AR",
					"AS",
					"CA",
					"CO",
					"CT",
					"DE",
					"DC",
					"FL",
					"GA",
					"GU",
					"HI",
					"ID",
					"IL",
					"IN",
					"IA",
					"KS",
					"KY",
					"LA",
					"ME",
					"MD",
					"MA",
					"MI",
					"MN",
					"MS",
					"MO",
					"MT",
					"NE",
					"NV",
					"NH",
					"NJ",
					"NM",
					"NY",
					"NC",
					"ND",
					"MP",
					"OH",
					"OK",
					"OR",
					"PA",
					"PR",
					"RI",
					"SC",
					"SD",
					"TN",
					"TX",
					"TT",
					"UT",
					"VT",
					"VA",
					"VI",
					"WA",
					"WV",
					"WI",
					"WY",
				],
			},
		},
		zip: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: {
				is: /\b[0-9]{5}\b/,
			},
		},
		country_code: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		timezone: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		latitude: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			validate: {
				min: -90,
				max: 90,
			},
		},
		longitude: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			validate: {
				min: -180,
				max: 180,
			},
		},
		elevation: {
			type: DataTypes.DOUBLE,
			allowNull: true,
		},
		capacity: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: {
				min: 1,
			},
		},
		year_constructed: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: { len: [4] },
		},
		grass: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		dome: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
	},
	{
		sequelize,
		validate: {
			bothCoordsOrNone() {
				if ((this.latitude === null) !== (this.longitude === null)) {
					throw new Error(
						"Either both latitude and longitude, or neither!"
					);
				}
			},
		},
		timestamps: true,
		freezeTableName: true,
		underscored: true,
		modelName: "locations",
	}
);

export default Locations;
