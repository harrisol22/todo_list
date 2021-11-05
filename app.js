
const express = require("express");
const bodyParser = require("body-parser");

// formatting is funky because this module is local
const date = require(__dirname + "/date.js");
const app = express();

// declare variable up here to deal with scope issues
// even though we are ADDING to the items array, it's not considering changing, so we can still use const
const items = [];
const workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
// tells server to utilize things in the "public" folder
app.use(express.static("public"));
// tells app to use ejs as its view engine
app.set("view engine", "ejs");

// method to generate and display web app (send stuff out)
app.get("/", function(req, res) {
  // sends variable kindOfDay and its value to list.ejs in views directory
  res.render("list", {listTitle: date.getDate(), items: items});

})


// method to handle post requests to the "/" route (get stuff in)
app.post("/", function(req, res) {

  // grab the value from the text box in list.ejs
  let newItem = req.body.newItem;

  // we created a list parameter in list.ejs for the button; now we tap into the list parameter to see what list the item was added to, and add it to the appropriate route (/work or /)
  if (req.body.list === "Work") {
    workItems.push(newItem);
    res.redirect("/work");
  } else {
    items.push(newItem)
    res.redirect("/");
  }

})

// need one method for each route (each separate page)
app.get("/work", function(req, res) {

  res.render("list", {listTitle: "Work", items: workItems})

})


app.listen(3000, function(){
  console.log("Server started at port 3000.");
})
