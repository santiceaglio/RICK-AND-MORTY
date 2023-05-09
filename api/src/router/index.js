const {Router} = require("express");
//aqui importamos todos los controladores

const AllCharacters = require("../controllers/AllCharacters.js")
const OneCharacter = require("../controllers/OneCharacter.js")
const OneCharacterName = require("../controllers/OneCharacterName.js")
const CreateUser = require("../controllers/CreateUser.js");
const CreateFavorite = require("../controllers/CreateFavorite.js")
const getAllFavorites = require("../controllers/getAllFavorites.js")
const deleteFavorite = require("../controllers/deleteFavorite.js") 
const getUser = require("../controllers/getUser.js")


const router = Router();
// esta ruta me traera todos los personajes 
router.get("/characters", AllCharacters);

//estar ruta me traera todos los pesonajes que contenga un nombre.
router.get("/characters/name", OneCharacterName);

//aqui iria otra ruta q me traiga los perosnajes por ID

router.get("/characters/:id", OneCharacter);
//con id es por params y por nombre query enreaalidad lo haremos a modo de ejemplo pero el nombre puede ser por ambos, y el id solo por params.
//tener en cuenta que en este archivo el orden si altera a las rutas porque el query debe estar antes del params



// esta ruta va a crear un nuevo usuario en la base de datos

router.post("/user", CreateUser);


//esta ruta guardará un favorito en la base de datos

router.post("/favorite", CreateFavorite);

//esta ruta traera todos los fav de la BDD por el id del usuario

router.get("/favorite", getAllFavorites);

//esta ruta elimina un favorito de la BDD

router.delete("/favorite/:id", deleteFavorite);

//esta ruta trae la informacion del usuario si se loguea y este existe

router.get("/user", getUser);


module.exports = router;