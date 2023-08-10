// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore , doc , getDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1gdhq2jPe31faoBNdcdNt-5HN9vvGqJs",
  authDomain: "personal-website-3a210.firebaseapp.com",
  projectId: "personal-website-3a210",
  storageBucket: "personal-website-3a210.appspot.com",
  messagingSenderId: "54242900570",
  appId: "1:54242900570:web:933a5a7a8d955385c67663",
  measurementId: "G-G6YFRYZ3GR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export class Personal_Web{
    // constructor(){}
    getInfo = async () => {
        console.log("Class Called")
        const InfoData = new Map();
        const docRef = doc(db , "Personal_Web" , "MyInfo");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists){
            const data = docSnap.data();
            const keys = Object.keys(data);
            for (let i = 0 ; i < keys.length ; i++){
              InfoData.set(keys[i] , data[keys[i]])
            }
        }else{
            console.log("Data not found !...")
        }
        return InfoData
    }
}