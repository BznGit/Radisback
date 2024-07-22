const userDAO = require('../dao/user');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('../db/models/user');
console.log('mongoseee')

const user = new User({
    _id: new mongoose.Types.ObjectId(),
    login:'alex',
    password: '111'
})

user.save()



async function login(email, password) {
    try {
        const {login, password } = await User.findOne({login: 'alex' })
        console.log(login, password )

        // we do not need to hash our plain text password
        // before we pass it to bcrypt.compare
        // bcrypt.compare will always return resolved Promise with a boolean value
        // indicating whether the password hashes match
        const match = await bcrypt.compare(password, user.pwHash);

        if (match) {
            return {id: user.id, roles: user.roles};
        } else {
            return Promise.reject('wrong username or password');
        }
    } catch(err) {
        return Promise.reject('user not found');
    }
}



module.exports = {login};