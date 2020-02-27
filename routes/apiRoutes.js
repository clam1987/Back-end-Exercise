const db = require("../config/connection");
const router = require("express").Router();

router.post("/add", (req, res) => {
    let body = req.body;
    let {first_name, last_name, languages, frameworks, image, user_name } = body;
    let usernameQuery =  "SELECT * FROM `coders` WHERE user_name = '" + user_name + "'";

    db.query(usernameQuery, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }

        if(result.length > 0) {
            res.send("user already exists");
            // Set interval timer for res.redirect("/");
        } else {
            let query = "INSERT INTO `coders` (first_name, last_name, language, frameworks, user_name) VALUES ('" +
            first_name + "', '" + last_name + "', '" + languages + "', '" + frameworks + "', '" + user_name + "')";
            db.query(query, (err, result) => {
                // console.log(result);
                if (err) {
                    return res.status(500).send(err);
                }
            })
        }
    })
    res.json(true);
});

router.put("/edit/:id", (req, res) => {
    let id = req.params.id;
    console.log(id)
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let language = req.body.language;
    let frameworks = req.body.frameworks;

    let query = "UPDATE `coders` SET `first_name` = '" + first_name + "', `last_name` = '" + last_name + "', `language` = '" + language + "', `frameworks` = '" + frameworks + "' WHERE `coders`.`id` = " + id + "";
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
    })
    return res.json(true)
});

router.delete("/delete/:id", (req, res) => {
    let id = req.params.id;
    let deleteUserQuery = 'DELETE FROM coders WHERE id = "' + id + '"';

    db.query(deleteUserQuery, (err, result) => {
        if(err) {
            return res.status(500).send(err);
        }
    })
    return res.json(true);
})

module.exports = router;
