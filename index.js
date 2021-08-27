const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/step/1", (req, res) => {
    res.render("step1")
})

app.get("/step/2", (req, res) => {
    res.render("step2")
})

app.get("/step/3", (req, res) => {
    res.render("step3")
})

app.get("/step/4", (req, res) => {
    res.render("step4")
})

app.get("/step/5", (req, res) => {
    res.render("step5")
})

app.get("/finish", (req, res) => {
    res.render("finish")
})

app.listen(8080, () => {
    console.log("Server is the working")
})