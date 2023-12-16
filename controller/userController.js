const { json } = require('body-parser');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

const createUser = asyncHandler(async (req, res) => {

    const email = req.body.email;
    const findUser = await User.find({ email: email });

    if (!findUser) {
        // create a new user 
        const newUser = User.create(req.body);
        res.json(newUser);
    } else {
        // res.json({
        //     msg: "user already existence",
        //     success: false,
        // })

        throw Error('User already existed');
    }

});
module.exports = { createUser };