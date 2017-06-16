//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server !');
    }
    console.log('connected to MongoDb server!');

    // db.collection('Todos').insertOne({
    //     text: 'a new note',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert Todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    
    // db.collection('Users').insertOne({
    //     name: 'John Smith',
    //     age: 32,
    //     location: 'Grantham'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to add user', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});