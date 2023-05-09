require ("dotenv").config();
const { DB_USER, DB_PASSWORD, BD_DIALECT, DB_HOST, DB_PORT, BDD} = process.env;
const {Sequelize} = require("sequelize");


const baseDeDatos = new Sequelize (BDD, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: BD_DIALECT,
    port:DB_PORT,
    logging: false,
    define:{
        timestamps: false,
        underscored: true,
    } 
});

 

module.exports= baseDeDatos;
