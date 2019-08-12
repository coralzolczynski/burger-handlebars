var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  burger.all(function(burgerData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    res.render("index", { burger_data: burgerData });
  });
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  burger.create(req.body.burger_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = router;










// const express = require("express");
// const burger = require("../models/burger.js");
// const router = express.Router();

// router.get("/", (req, res) => {
//     burger.selectAll(result => {
//         console.log(result);
//         let handlebarObject = {
//             burgers: result
//         };
//         res.render("index", handlebarObject)
//     })
// });
// router.get("/api/burgers", (req, res) => {
//     burger.insertOne(
//         ["burger_name", "devoured"],
//         [req.body.burgerName, req.body.devoured],
//        result => {
//            res.json({id: result.insertId})
//        } 
//     )
// });
// router.put("/api/burgers/:id", (req, res) => {
//     let condition = "id = " + req.params.id;
//     burger.updateOne(
//         {
//             devoured: req.body.devoured
//         },
//         condition, 
//         result => {
//             if (result.changedRows === 0) {
//                 return res.status(404).end();
//             }
//             res.status(200).end();
//         }
//     )
// } )



// module.exports = router;