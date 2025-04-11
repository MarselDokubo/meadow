//

import express from "express";
import { engine } from "express-handlebars";
import { dirname, join } from "node:path"
import { about, home, notFound, serverError } from "./routes/handlers.js"
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = 3030;
const HOST = "[::1]"
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use(express.static(join(__dirname, "/public")))
app.get('/', home);
app.get('/about',  about)
// custom 404 page
app.use(notFound)
// custom 500 page
app.use(serverError)


export default app;