// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBof3aTQaoF260k2j52U7doZ5xz-8in2BQ",
  authDomain: "portfolio-86e6e.firebaseapp.com",
  projectId: "portfolio-86e6e",
  storageBucket: "portfolio-86e6e.appspot.com",
  messagingSenderId: "174757166845",
  appId: "1:174757166845:web:9736f7d842b9c9ad4c8894",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();

const getProjectCollection = async () => {
  const projectCollection = [];
  const result = await getDocs(collection(db, "projects"));
  result.forEach((doc) => projectCollection.push(doc.data()));
  return projectCollection;
};

const getFromStorage = async (bucketUri) => {
  // Create a reference from a Google Cloud Storage URI
  const gsReference = ref(storage, bucketUri);

  const result = await getDownloadURL(gsReference);

  return result;
};

export { getProjectCollection, getFromStorage };
