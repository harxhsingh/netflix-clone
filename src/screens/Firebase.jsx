import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD7rq_DNqoCGFcNsis32Rk-nH95DDBrHR0",
    authDomain: "netflixclone-gg.firebaseapp.com",
    projectId: "netflixclone-gg",
    storageBucket: "netflixclone-gg.appspot.com",
    messagingSenderId: "801829828416",
    appId: "1:801829828416:web:a8064a690fce06574beca5",
    measurementId: "G-H604EY7WLH"
};
const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export { auth }
export default db