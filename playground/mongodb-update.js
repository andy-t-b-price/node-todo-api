//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server !');
    }
    console.log('connected to MongoDb server!');

   

    //db.collection('Todos').findOneAndUpdate(filter, update, options, callback)

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5943e849f133d76042319f97')
    //     },
    //         {
    //         $set: {
    //             completed: true
    //         }
    //     },
    //     {
    //         returnOriginal: false
    //     }).then((result)=> {
    //         console.log(result)
    //     });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5943dfdaf133d76042319e2d')
    },
    {
        $set: {
            name: 'David'
        },
        $inc: { 
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result)=> {
        console.log(result)
    })


    
   
    //db.close();
});