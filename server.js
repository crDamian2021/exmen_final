const express = require("express");
const cors = require("cors");
const hbs = require("hbs");
const path = require("path");
hbs.registerPartials(__dirname + "/views/partials");
hbs.registerPartial("footer", "{{footer}}");
hbs.registerPartial("header", "{{header}}");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors());
    this.app.set("views", path.join(__dirname, "views"));
    this.app.set("view engine", ".hbs");
    this.app.use(express.static("./public"));
    this.app.use(express.static("./public/img"));
    hbs.registerPartials(__dirname + "/views/partials");
    hbs.registerPartial("footer", "{{footer}}");
    hbs.registerPartial("header", "{{header}}");
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.render("home");
    });

    this.app.get("/html_css", (req, res) => {
      res.render("html_css");
    });

    /* js_node */

    this.app.get("/js_node", (req, res) => {
      res.render("js_node");
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("istando en el puerto", this.port);
    });
  }
}

module.exports = Server;
