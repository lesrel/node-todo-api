//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();
//console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({_id : new ObjectID('5a9adaa19a52bcf19925f4a3')}).toArray().then((docs) => {
  //   console.log('Toddos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err)=> {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Toddos count: ${count}`);
  },(err)=> {
    console.log('Unable to count todos', err);
  });

  // //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({text: 'Somethong to do'}).then((result) => {
  //   console.log(JSON.stringify(result.value, undefined, 2));
  // });

  //findOneAndUpdate
  db.collection('Users').findOneAndUpdate({_id: new ObjectID('5a9add3f2c299af1f72c4538')},
  {
      $set: { name: 'Ta mere'},
      $inc: {age : +20}
  },
  {
    returnOriginal: false
  }).then((result) => {
    console.log(JSON.stringify(result.value, undefined, 2));
  });

  // db.collection('Todos').insertOne({
  //   text : 'Somethong else',
  //   completed: false
  // }, (err,result) => {
  //     if (err) {
  //       return console.log('Unable to insert todo',err);
  //     }
  //
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name : 'Seb Doe',
  //   age : 99,
  //   location : 'Paris area'
  // }, (err,result) => {
  //     if (err) {
  //       return console.log('Unable to insert User',err);
  //     }
  //
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //client.close();
});
