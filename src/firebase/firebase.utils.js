import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcLxV-ddMXzlFFEI7qIm62VbCDRJh6P7s",
  authDomain: "dimasfurniture-459b7.firebaseapp.com",
  projectId: "dimasfurniture-459b7",
  storageBucket: "dimasfurniture-459b7.appspot.com",
  messagingSenderId: "863037532933",
  appId: "1:863037532933:web:dd3d5dcc82bcbfcc3aa56c",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Sign-in
export const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth().signInWithPopup(provider);

export default firebase;

// Add collections to firebase
export const addCollectionAndItems = async (objectsToAdd) => {
  const collectionRef = firestore.collection("collections");

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const docRef = collectionRef.doc();
    batch.set(docRef, obj);
  });

  return await batch.commit();
};

// Add Profile document
export const createUserProfileDocument = async (user) => {
  if (!user) return;

  const userRef = await firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = user;
    const dateOfCreation = new Date();
    try {
      await userRef.set({ displayName, email, dateOfCreation });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

export const convertCollectionsSnapshotToMap = async (querySnapshot) => {
  const collections = querySnapshot.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      title,
      items,
      id: doc.id,
      url: encodeURI(title.toLowerCase()),
    };
  });

  return collections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
