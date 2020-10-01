const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use()- use for middleware callbacks
// app.set()- store variables

app.set('view engine', 'ejs');

app.get("/", function (req, res){
  var today = new Date();
  var currentDay= today.getDay();
  var day = "";

  if(today.getDay()===6 || today.getDay()===0){
    day = "Weekend";
  }
  else{
    day = "Weekday";
    //use js script via view engine
  }
  //render("filename inside view", {ejs tagname})
  res.render('list', {kindOfDay: day});
});

app.listen(3000, function(){
  console.log("App is listening to port 3000");
});
