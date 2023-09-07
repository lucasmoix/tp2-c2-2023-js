const fs = require('fs'); // import con el type Module
const PATH_USERJSON = "../data/users.json";

function getUsers(){
    return JSON.parse(fs.readFileSync(PATH_USERJSON,'utf-8'));
}

function getUser(id){
    return getUsers().find(user => user._id == id);
}

function addUser(user){
    user._id = Date.now().toString(36) + Math.random().toString(36).substring(2);
    const users = getUsers();
    users.push(user);    
    fs.writeFileSync(PATH_USERJSON, JSON.stringify(users, null, " "));
    return getUser(user._id);
}

function updateUser(user){

}

function deleteUser(id){

}

module.exports = {getUser, getUsers, addUser, updateUser, deleteUser}