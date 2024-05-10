import path from "path";
import express from "express";
import session from "express-session";
import routes from "./routes";
import sequelize from "./config/connection.js";
import sequelizeSession from "connect-session-sequelize";
const SequelizeStore = sequelizeSession(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
	secret: process.env.SESSION_SECRET,
	cookie: {
		maxAge: 1000 * 60 * 45,
	},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve("./public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () =>
		console.log(`\n\nServer listening on http://localhost:${PORT}\n`)
	);
});