const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
      return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('unable to delete item', err);
  });
  // deleteOne
  db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('Unable to delete one', err);
  });
  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({text: 'Eat Lunch'}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('Unable to delete one', err);
  });
  
  db.collection('Users').findOneAndDelete({ name: 'John' }).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('Unable to find one and delete',err);
  });

  db.collection('Users').findOneAndDelete({ _id: new ObjectID('5a880a859d74a9a6aaff3c9a')}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('Unable to find one and delete',err);
  });
  // db.close();
});
