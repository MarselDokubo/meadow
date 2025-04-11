

import { createRequire } from "node:module"
const require = createRequire(import.meta.url);
const fortunes = require("../lib/data.json")
export function home(req, res) {
  return res.render("home");
}

export function about(req, res) {
const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]    
    res.render('about', {fortune: randomFortune})
}

export function notFound(req, res) {
  res.status(404);
  res.render("404");
}

export function serverError(err, req, res, next) {
  res.status("500")
  res.render("500");
}
