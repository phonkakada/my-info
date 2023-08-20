// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore , collection , getCountFromServer , doc , getDoc , documentId} from "firebase/firestore"
import { scryRenderedDOMComponentsWithTag } from "react-dom/test-utils";

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

const db = getFirestore();

export class Personal_Web{
    // constructor(){}
    getInfo = async () => {
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
    getExpe = async () => {
      const docR = doc(db ,"Personal_Web" , "Experience")
      const coll = collection(docR ,"Experience1" );
      const snapshot = await getCountFromServer(coll);
      return (snapshot.data().count);
    }
    getEducation = async () =>{
      const docR = doc(db , "Personal_Web" , "Education")
      const coll = collection(docR , "Education")
      const snapshot = await getCountFromServer(coll)
      return snapshot.data().count
    }
    getExperData = async () =>{
      let TotalExper = await this.getExpe();
      const MapData = [];
      for (let i = 1 ; i <= TotalExper ; i++){
        let Command = `Personal_Web/Experience/Experience1/Experience${i}`
        const docRef = doc(db , Command);
        const docSnap = await getDoc(docRef);
        let MapTmp = new Map();
        if (docSnap.exists){
          const data = docSnap.data();
          const keys = Object.keys(data);
          for (let i = 0 ; i < keys.length ; i++){
            MapTmp.set(keys[i] , data[keys[i]])
          }
        }else{
            console.log("Data not found !...")
        }
          while (MapData.length != i){
            MapData.push(MapTmp)
          }
      }
      return MapData
    }

    getEducationData = async () =>{
      let TotalExper = await this.getEducation();
      console.log(TotalExper)
      const MapData = [];
      for (let i = 1 ; i <= TotalExper ; i++){
        let Command = `Personal_Web/Education/Education/Education${i}`  
        const docRef = doc(db , Command);
        const docSnap = await getDoc(docRef);
        let MapTmp = new Map();
        if (docSnap.exists){
          if (docSnap.data() !== undefined){
            const data = docSnap.data();
            const keys = Object.keys(data);
            for (let i = 0 ; i < keys.length ; i++){
              MapTmp.set(keys[i] , data[keys[i]])
            }
          }
        }else{
            console.log("Data not found !...")
        }
          while (MapData.length != i){
            MapData.push(MapTmp)
          }
      }
      return MapData
    }
    getProject = async () =>{
      const docR = doc(db ,"Personal_Web" , "Project")
      const coll = collection(docR ,"Project" );
      const snapshot = await getCountFromServer(coll);
      return (snapshot.data().count);
    }
    getProjectData = async () => {
      let TotalExper = await this.getProject();
      const MapData = [];
      for (let i = 1 ; i <= TotalExper ; i++){
        let Command = `Personal_Web/Project/Project/Project${i}`  
        const docRef = doc(db , Command);
        const docSnap = await getDoc(docRef);
        let MapTmp = new Map();
        if (docSnap.exists){
          if (docSnap.data() !== undefined){
            const data = docSnap.data();
            const keys = Object.keys(data);
            for (let i = 0 ; i < keys.length ; i++){
              MapTmp.set(keys[i] , data[keys[i]])
            }
          }
        }else{
            console.log("Data not found !...")
        }
          while (MapData.length != i){
            MapData.push(MapTmp)
          }
      }
      return MapData
    }
}