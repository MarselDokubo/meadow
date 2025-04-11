//

import express from "express";
import { engine } from "express-handlebars";

const app = express();
const PORT = 3030;
const HOST = "[::1]"
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");


app.get('/', (req, res) => res.render('home'));
app.get('/about', (req, res) => res.render('about'))
// custom 404 page
app.use((req, res) => {
res.status(404)
res.render('404')
})
// custom 500 page
app.use((err, req, res, next) => {
console.error(err.message)
res.status(500)
res.render('500')
})




app.listen(PORT, () => console.log(`Server running on http://${HOST}:${PORT}`));
