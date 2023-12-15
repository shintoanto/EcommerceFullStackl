const { json } = require('body-parser');
const User = require('../models/userModel');

const createUser = async(req,res)=>{

    const email = req.body.email;
    const findUser =await User.find({email:email});

    if(!findUser){
        // create a new user 
        const newUser =User.create(req.body);
        res.json(newUser);
    }else{
        res.json({
            msg:"user already existence",
            success:false,
        })
    }

}
module.exports ={createUser} ;