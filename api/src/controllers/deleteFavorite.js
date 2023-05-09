const Favorites = require("../db/models/Favorites.js");


const deleteFavorite = async (req, res) => {
    const { id } = req.params;
    const {idUser}= req.query;


    try {
        //
        const borrarFav = await Favorites.destroy({ where: { id:id } })
        if (borrarFav === 0) {
            return res.status(404).send(`El favorito ${id} no fue encontrado`);
        }

        res.status(200).send(`El personaje ${id} ha sido eliminado de Favoritos`)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = deleteFavorite;