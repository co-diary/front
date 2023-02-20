import React, { useEffect } from 'react';
import Router from './routes/Router';
import firestore from './firebase';

function App() {
  useEffect(() => {
    console.log(firestore);
    const users = firestore.collection('users');

    users
      .doc('jSwWPHGDKXx2yXINq7K8')
      .get()
      .then((doc) => {
        console.log(doc.data());
        console.log(doc.id);
      });
  });

  return (
    <div className='App'>
      <Router />
    </div>
  );
}

export default App;
