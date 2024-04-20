const db = require("../db/conn")
const {DataTypes} = require("sequelize");
const Game = db.define("Game", {
    titulo:{
        type: DataTypes.STRING,
        require: true
    },

    descr:{
       type:DataTypes.STRING,
       require: true,      
    },
    valor:{
        type:DataTypes.NUMBER,
        require: true,
    }
});
module.exports = Game;