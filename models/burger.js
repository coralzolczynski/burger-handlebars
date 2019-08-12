const orm = require("../config/orm.js");


var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    create: function(name, cb) {
      orm.create("burgers", [
        "burger_name", "devoured"
      ], [
        name, false
      ], cb);
    },
    update: function(id, cb) {
      var condition = "id=" + id;
      orm.update("burgers", {
        devoured: true
      }, condition, cb);
    }
  };
  
  module.exports = burger;
  

// const burger = {
//     selectAll: function(cb) {
//         orm.selectAll("burgers", result => {
//             cb(result);
//         });
//     },
//     insertOne: function(columns, values, cb) {
//         orm.insertOne("burgers", columns, values, result => {
//             cb(result);
//         })
//     },
//     updateOne: function(columns, values, cb) {
//         orm.updateOne("burgers", columns, values, result => {
//             cb(result);
//         })
//     }
// };

// module.exports = burger;