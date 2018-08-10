var express     = require("express"),
    app         = express();
   
app.set("view engine", "ejs");                                                              //use .ejs as default
app.use(express.static(__dirname + "/public"));                                             //define file path

app.get("/", function(req, res){                                                            //define what is returned for / file path 
   res.render("index");
});

app.listen(process.env.PORT, process.env.IP, function(){                                    // tell express where to run the server
    console.log("Server has started");
});
