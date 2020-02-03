module.exports = function(sequelize, DataTypes) {
    const Hamburger = sequelize.define("hamburgers", {
        name: DataTypes.INT,
        isEaten: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
    return Hamburger
}


// var connection = require("../config/connection.js")

// const burger = {
//     logAll: (colToLog, cb) => {
//         let queryString = "SELECT * FROM ??";
//         connection.query(queryString, [colToLog], (err, data) => {
//             if (err) throw err
//             return cb(data)
//         })

//     },

//     updateBoolean: (table, boo, target, cb) => {
//         let queryString = "UPDATE ?? SET isEaten = ? WHERE id = ?"
//         connection.query(queryString, [table, boo, target], (err, data) => {
//             if (err) throw err
//             return cb(data)

//         })
//     },

//     insertItem: (table, key, value, cb) => {
//         let queryString = "INSERT INTO ?? (??) VALUES (?)"
//         connection.query(queryString, [table, key, value], (err, data) => {
//             if(err) throw err
//             return cb(data)
        
//         })
//     }
// }

// module.exports = burger;