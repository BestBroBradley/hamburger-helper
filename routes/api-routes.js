const db = require("../models")

module.exports = function(app) {
    app.get(("/"), (req, res) => {
        db.hamburgers.findAll().then(data => {
            const hamburgers = data
            const eatenArray = hamburgers.filter(hamburger => (!hamburger.isEaten))
            const uneatenArray = hamburgers.filter(hamburger => (hamburger.isEaten))
            res.render("index", { eaten: eatenArray, uneaten: uneatenArray })

        })
    })

    app.put(("/api/burgers"), (req, res) => {
        console.log("put")
        db.hamburgers.update({ isEaten: true }, {
            where: {
                id: req.body.id
            }
        }).then(data => {
            if (!data) {
                return res.status(500).end()
            } else {
                console.log(`Burger updated`)
                return res.status(200).end()
            }
        })
    })

    app.post(("/api/burgers"), (req, res) => {
        console.log("post")
        db.hamburgers.create({
            name: req.body.name
        }).then(data => {
            if (!data) {
                return res.status(500).end()
            } else {
                console.log(`Added burger`)
                res.status(200).end();
            }
        })
    })
}
