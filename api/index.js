const server = require("./src/server/app.js");
const baseDeDatos = require("./src/db/db.js");

const User = require("./src/db/models/User.js");
const Favorites = require("./src/db/models/Favorites.js")

require("dotenv").config();
const PORT = process.env.PORT || 3001;


baseDeDatos.sync({force: false}).then(()=>{
    server.listen(PORT, ()=>{
        console.log("listening on PORT: ", PORT);
    });
});

