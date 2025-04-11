export function home(req, res) {
  return res.render("home");
}

export function about(req, res) {
  return res.send("about");
}

export function notFound(req, res) {
  res.render("404");
}

export function serverError(err, req, res, next) {
  res.render("500");
}
