const db = require("../config/connection");
const router = require("express").Router();

router.get("/", (req, res) => {
    let query = "SELECT * FROM coders ORDER BY id ASC"; // query all the database
    db.query(query, (err, data) => {
        // console.log(data);
        if (err) {
            return res.redirect("/");
        }
        res.render("index", { coder: data, noPlayer: true })
    })
})

router.get("/add", (req, res) => {
    res.render("add-player", {
        showTitle: true,
    });
})

router.get("/edit/:id", (req, res) => {
    console.log(req.params.id);
    res.render("edit-player", {playerFound: true, data: req.params.id});
})


module.exports = router;
