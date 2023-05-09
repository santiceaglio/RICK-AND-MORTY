// const Favorites = require("../db/models/Favorites.js");
// const User = require("../db/models/User.js");

// const createFavorite = async (req, res)=>{

//     const {idUser} = req.query;

//     const{ id, name, gender, image, origin, status, species}=req.body;

//     try {
//         const user = await User.findByPk(idUser);
//         if(!user) return res.status(400).json({Error: "El usuario no existe"})

//         const favorite = await Favorites.create({name, status, image, species,gender, origin})

//         favorite.addUser(idUser);

//         res.status(200).json(favorite);
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// }

// module.exports = createFavorite;


const Favorites = require("../db/models/Favorites");
const User = require("../db/models/User");

const createFavorite = async (req, res) => {

    const { idUser } = req.query;
    const { id, name, gender, image, origin, status, species } = req.body;


    try {

        const user = await User.findByPk(idUser);
        if (!user) return res.status(400).json({ Error: "El usuario no existe" });

        const userSearch=await User.findByPk(idUser,{
            include:[{
                model:Favorites,
                attributes:['name'],
                through:{
                    attributes:[]
                }
            }
        ]});

        const cleanUserFavoriteName=userSearch.favorites;

        let bandera=false;
        for(let i=0 ; i < cleanUserFavoriteName.length ; i++){
            if (cleanUserFavoriteName[i].dataValues.name.toLowerCase() === name.toLowerCase()){
                bandera=true;
                i = cleanUserFavoriteName.length;
            }
        }

        if (bandera) return res.status(400).json({ error:"El favorito ya esta agregado!"})
        
        const favorite = await Favorites.create({ id, name, status, image, species ,gender, origin});
        favorite.addUser(idUser);
        res.status(200).send("ok");

    } catch (error) {
        res.status(400).json({ error: error.messege });
    }
}

module.exports = createFavorite;