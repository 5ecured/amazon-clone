import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCuZNL668zNAMA1jUoks-sWKLgrm4DQOYE",
    authDomain: "clone-89c88.firebaseapp.com",
    projectId: "clone-89c88",
    storageBucket: "clone-89c88.appspot.com",
    messagingSenderId: "1071807444927",
    appId: "1:1071807444927:web:03a09853e5ed5b4a99530a"
})

const auth = firebaseApp.auth()

export { auth }