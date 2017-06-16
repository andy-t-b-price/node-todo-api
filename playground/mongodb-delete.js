//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server !');
    }
    console.log('connected to MongoDb server!');

    // //deleteMany
    // db.collection('Todos').deleteMany({text: 'a new note'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'dishwasher'}).then((result) => {
    //     console.log(result)
    // });


    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false   }).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({name: 'Andy'}).then((results) => {
    //     console.log(results);
    // });

    db.collection('Users').deleteOne({
        _id: new ObjectID("5943eceaf133d7604231a09a")
    }).then((results) => {
        console.log(results);
    });


   
    //db.close();
});