const User = require("../db/models/User.js");

const createUser = async(req, res)=>{

    const { email, password } = req.body;
    
    console.log(email);
    
    try {
        if(!email || email === "" || !password === "") return res.status(400).json({error: "Faltan datos"});

        const [user, created]= await User.findOrCreate({
            where:{
                email: email,
                password: password
            }
        })

        if(created) return res.status(200).json({email:email, password:password});
        else res.status(400).json({ error: "El usuario ya existe" });
        
        
        
    } catch (error) {
        res.status(400).json({ error: error.message})
    }

}

module.exports = createUser;