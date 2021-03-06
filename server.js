// require modules and declare settings variables
const express = require("express");
const morgan = require("morgan")
const methodOverride = require("method-override")
const port = 3000;

const skillsRouter = require("./routes/skills")

//create express app
const app = express()

//configure server settings with app.set()
app.set("view engine", "ejs")

//mount our middleware with app.use
app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: false}))


// mount our routes
app.get("/", function(req, res) {
    res.render("index");
})

app.use("/skills", skillsRouter);

//tell the app to listen
app.listen(port, ()=>{
    console.log(`"Now listening on port:${port}`)
})