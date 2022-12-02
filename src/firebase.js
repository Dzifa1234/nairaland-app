import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";






const firebaseConfig = {
    apiKey: "AIzaSyAK-8N-eWMZNyhW1aSbuYlZNpCWfl0swmY",
    authDomain: "react-blog-app-87493.firebaseapp.com",
    projectId: "react-blog-app-87493",
    storageBucket: "react-blog-app-87493.appspot.com",
    messagingSenderId: "58744721171",
    appId: "1:58744721171:web:d65b03dd6ad850b06c14e6"
  };



  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export {auth, db, storage};
  