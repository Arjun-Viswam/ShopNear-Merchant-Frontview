import firebase from "firebase"


const config = {

    apiKey: "AIzaSyBKUrlYFzoe99NeAqS0mZfRXedHtMDBGw0",
    authDomain: "shopnear-merchant.firebaseapp.com",
    projectId: "shopnear-merchant",
    storageBucket: "shopnear-merchant.appspot.com",
    messagingSenderId: "987476902202",
    appId: "1:987476902202:web:62c012ed1d971f5a339003"
  };
  

firebase.initializeApp(config)

export default firebase;
