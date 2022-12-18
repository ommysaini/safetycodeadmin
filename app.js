const express = require('express');
const mongodb = require("mongodb");
const bodyParser = require("body-parser");
const app = express();



require("./db/conn");

const Item = require("./models/add-new-item");
const Customer = require("./models/add-customer");

app.use(express.json());


const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false}));

app.use("/public", express.static(__dirname + "/public"));


app.set("view engine", "ejs");
app.set("views", __dirname + "/views");




app.get("/", (req, res) => {

    return res.render("index");
 });


 app.get("/sales", (req, res) => {

  return res.render("sales");
});

app.get("/purchase", (req, res) => {

  return res.render("purchase");
});


app.get("/accounting", (req, res) => {

  return res.render("accounting");
});


app.get("/Inventory", (req, res) => {

  return res.render("Inventory");
});


app.get("/add-item", (req, res) => {

  return res.render("add-item");
});


app.get("/add-new-item", (req, res) => {

  return res.render("add-new-item");
});




app.post("/add-new-item", (req, res) => {
  console.log(req.body);
  const item = new Item (req.body);
  item.save().then(() => {
     res.status(201).send("/add-new-item");
  }).catch((e) => {
      res.status(400).send(e);
  })
});





app.get("/add-customer", (req, res) => {

  return res.render("add-customer");
});


app.post("/add-customer", (req, res) => {
  console.log(req.body);
  const customer = new Customer (req.body);
  customer.save().then(() => {
     res.status(201).send(("/add-customer"));
  }).catch((e) => {
      res.status(400).send(e);
  })
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})