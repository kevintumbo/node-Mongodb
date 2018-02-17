const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
      return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({_id: new ObjectID('5a87ff2f55d66c0b2e81fbc3') }).toArray().then((docs) =>{
  //   console.log('Todos');
  //   console.log('---------------------');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });
  db.collection('Todos').find().count().then((count)=> {
    console.log('Todos');
    console.log('-----------------------');
    console.log(`Number of todos: ${count}`);
  }, (err) => {
    console.log('Unable to Count Todos', err);
  });
  // db.close();
});
