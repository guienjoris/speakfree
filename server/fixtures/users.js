let id = require('pow-mongodb-fixtures').createObjectId;

let users = exports.users = {
    user1:{
        _id: id(),
        username: " Jean-Patrick",
        usermail: "jp@test.com"
    },
    user2:{
        _id: id(),
        username: " Jean-Bob",
        usermail: "jb@test.com"
    }
}