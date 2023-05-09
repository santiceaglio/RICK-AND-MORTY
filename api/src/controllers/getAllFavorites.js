const Favorites = require("../db/models/Favorites.js");
const User = require("../db/models/User.js")

const getAllFavorites = async(req, res)=>{

    const {idUser}=req.body;

    try {
        const user = await User.findByPk(idUser);
        if (!user) return res.status(400).json({ Error: "El usuario no existe" });

        const userSearch=await User.findByPk(idUser,{
            include:[{
                model:Favorites,
                through:{
                    attributes:[]
                }
            }
        ]});

        // const cleanUserFavoriteName=userSearch.favorites;
        res.status(200).json(userSearch.favorites);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = getAllFavorites;