const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
      return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a8817119d74a9a6aaff3ca0')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a880a4b9d74a9a6aaff3c99')
  },{
    $set:{
      name: 'Dakitati'
    },
    $inc: {
      age: +1
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('Unable to update.', err);
  });
  // db.close();
});
