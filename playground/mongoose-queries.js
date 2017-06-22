const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "594b801ba4a829acb3601b68";

var userId = "5949333569387ff877a4405c";

if(!ObjectID.isValid(id)) {
    console.log('Id not found');
}

// Todo.find({
//     _id: id
//     }).then((todos)=> {
//         console.log('Todos', todos);
//     });

// Todo.findOne({
//     _id: id
//     }).then((todo)=> {
//         console.log('Todo', todo);
//     });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found!');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));


User.findById(userId).then((user) => {
    if(!user) {
        return console.log('User not found');
    };
    console.log(JSON.stringify(user, undefined , 2));
}).catch((e)=> console.log(3));