import Weeks from "./weeks.js";
import Users from "./users.js";
import Emails from "./emails.js";
import Locations from "./locations.js";
import Teams from "./teams.js";
import Usernames from "./usernames.js";
import Games from "./games.js";
import Picks from "./picks.js";
import TeamNames from "./teamNames.js";

//* Currently not planning on implementing the below scoreboards. They violate one (maybe more...) of the normal forms (can't remember which one(s)) and are currently unnecessary. In the future, if the number of records imposes too much of a performance hit, I will consider implementing them. Alternatively, such a performance hit could warrant an entire database redesign.
import WeeklyScoreboard from "./weeklyScoreboard.js";
import YearlyScoreboard from "./yearlyScoreboard.js";

Weeks.hasMany(Games, {
	foreignKey: "week_id",
});
Games.belongsTo(Weeks, {
	foreignKey: "week_id",
	as: "week",
});

Weeks.hasMany(Picks, {
	foreignKey: "week_id",
});
Picks.belongsTo(Weeks, {
	foreignKey: "week_id",
	as: "week",
});

Users.hasMany(Usernames, {
	foreignKey: "user_id",
	// Or:
	// foreignKey: { name: "user"},
});
Usernames.belongsTo(Users, {
	foreignKey: "user_id",
	as: "user",
});

Users.hasMany(Emails, {
	foreignKey: "user_id",
});
Emails.belongsTo(Users, {
	foreignKey: "user_id",
	as: "user",
});

Users.hasMany(Picks, {
	foreignKey: "user_id",
});
Picks.belongsTo(Users, {
	foreignKey: "user_id",
	as: "user",
});

Teams.hasMany(Picks, {
	foreignKey: "picked_team_id",
});
Picks.belongsTo(Teams, {
	foreignKey: "picked_team_id",
	as: "picked_team",
});

Teams.hasMany(Games, {
	foreignKey: "home_team_id",
});
Games.belongsTo(Teams, {
	foreignKey: "home_team_id",
	as: "home_team",
});

Teams.hasMany(Games, {
	foreignKey: "away_team_id",
});
Games.belongsTo(Teams, {
	foreignKey: "away_team_id",
	as: "away_team",
});

Teams.hasMany(Games, {
	foreignKey: "champion_id",
});

Games.belongsTo(Teams, {
	foreignKey: "champion_id",
	as: "champion",
});

Locations.hasMany(Teams, {
	foreignKey: "location_id",
});
Teams.belongsTo(Locations, {
	foreignKey: "location_id",
	as: "location",
});

Locations.hasMany(Games, {
	foreignKey: "location_id",
});
Games.belongsTo(Locations, {
	foreignKey: "location_id",
	as: "location",
});

Games.hasMany(Picks, {
	foreignKey: "game_id",
});
Picks.belongsTo(Games, {
	foreignKey: "game_id",
	as: "game",
});

export {
	Games,
	Locations,
	Picks,
	Teams,
	Usernames,
	Users,
	Emails,
	Weeks,
	TeamNames,
};
