// module.exports = [
//     { userId: '1', name: 'Test01', email: 'test01@test.com', password: '1234'},
//     { userId: '2', name: 'Test02', email: 'test02@test.com', password: 'abcd'},
//     { userId: '3', name: 'Test03', email: 'test03@test.com', password: '0000'},
// ];

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userId: String,
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;