const connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  function objToSql(ob) {
    // column1=value, column2=value2,...
    var arr = [];
  
    for (var key in ob) {
      arr.push(key + "=" + ob[key]);
    }
  
    return arr.toString();
  }
  
  var orm = {
    all: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    // vals is an array of values that we want to save to cols
    // cols are the columns we want to insert the values into
    create: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    // objColVals would be the columns and values that you want to update
    // an example of objColVals would be {name: panther, sleepy: true}
    update: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
  };
  
  module.exports = orm;
  





// const orm = {
//     // homePage: (req, res) => {
//     //     res.render("index");
//     // },
//     selectAll: (table, cb) => {
//         const query = "SELECT * FROM " + table + ";";
//         connection.query(query, (err, result) => {
//             if (err) throw err;
//             cb(result);
//         })
//         console.log("Select all routes");
//     },
//     insertOne: (table, columns, values, cb) => {
//         const query = "INSERT INTO " + table + " (" + columns.toString() + ") VALUES (" + values.length() + ");";
//         connection.query(query, (err, result) => {
//             if (err) throw err;
//             cb(result);
//         })       
//         console.log("Insert one route");
//     },
//     updateOne: (table, columns, values, cb)=> {
//         const query = "UPDATE " + table + " set " + values + " WHERE " + columns;
//         connection.query(query, (err, result) => {
//             if (err) throw err;
//             cb(result);
//         })
//         console.log("Update one route");
//     }
// };

// module.exports = orm;