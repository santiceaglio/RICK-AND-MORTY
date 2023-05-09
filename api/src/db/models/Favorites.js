const baseDeDatos = require("../db");
const {DataTypes} = require("sequelize");

const Favorites = baseDeDatos.define("favorites", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        status:{
            type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        species:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        origin:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {timestamps: false})



module.exports= Favorites;