const connection = require("./connection.js");

const orm = {
    selectAll: (req, res) => {
        console.log("Select all routes");
    },
    insertOne: (req, res) => {
        console.log("Insert one route");
    },
    updateOne: (req, res)=> {
        console.log("Update one route");
    }
};

module.exports = orm;