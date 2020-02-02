const express = require("express")
const connection = require("../config/connection.js")

const router = express.Router();

var burger = require("../models/burger.js")

router.get("/", (req, res) => {
    burger.logAll("hamburgers", (data => {
        const hamburgers = data
        const eatenArray = hamburgers.filter(hamburger => (!hamburger.isEaten))
        const uneatenArray = hamburgers.filter(hamburger => (hamburger.isEaten))
        res.render("index", { eaten: eatenArray, uneaten: uneatenArray })
    }))
})

router.put("/api/burgers", (req, res) => {
    burger.updateBoolean("hamburgers", true, [req.body.id], (data => {
        if (!data) {
            return res.status(500).end()
        } else {
            console.log(`Burger updated`)
            return res.status(200).end()
        }
    }))
})

router.post("/api/burgers", (req, res) => {
    burger.insertItem("hamburgers", "name", [req.body.name], (data => {
        if (!data) {
            return res.status(500).end()
        } else {
            console.log(`Added burger`)
            res.status(200).end();
        }
    }))
})

module.exports = router