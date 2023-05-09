const axios = require("axios");
require("dotenv").config();
const { URL_BASE } = process.env;

const OneCharacter = async (req, res) => {
    const { id } = req.params; //saco el id de params con destruction
    try {
        let url = URL_BASE
        let allCharacters=[]

        while(url){
            let response=await axios.get(url);
            allCharacters=allCharacters.concat(
                response.data.results.map((char)=>{
                    return {
                        id: char.id,
                        name: char.name,
                        status: char.status,
                        species: char.species,
                        gender: char.gender,
                        origin: char.origin.name,
                        image: char.image,
                    }
                })
            );

            url=response.data.info.next;
            if(allCharacters.length >= 200 || !url){
                break;
            }
        }


        res.status(200).json(allCharacters);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = OneCharacter;