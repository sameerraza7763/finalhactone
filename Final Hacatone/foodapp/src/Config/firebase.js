import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
  import swal from "sweetalert";
  import {
    getFirestore,
    doc,
    setDoc,
    addDoc,
    collection,
    getDocs
  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";


  import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
    }
      from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js";



      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
       
      const firebaseConfig = {
        apiKey: "AIzaSyCiRVKOs1he5yu0nK-IwoKRyn3NUOG_q3E",
        authDomain: "finalhacatone.firebaseapp.com",
        projectId: "finalhacatone",
        storageBucket: "finalhacatone.appspot.com",
        messagingSenderId: "53600972932",
        appId: "1:53600972932:web:0645beda2368e3ade1d2d1",
        measurementId: "G-2JH9VPT7PR"
      };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);



  const addUserToDB = async () => {
    const uid = auth.currentUser.uid;
    var userProfile = { email: "", name: "", photoURL: "" };
    userProfile.email = auth.currentUser.email;
    userProfile.name = auth.currentUser.displayName;
    userProfile.photoURL = auth.currentUser.photoURL;
  
    return setDoc(doc(db, "users", uid), userProfile);
  };

  
  function signinFirebase(loginEmail, loginPassword) {
    return signInWithEmailAndPassword(auth, loginEmail, loginPassword)

}


function keeploggined() {
  onAuthStateChanged(auth, (user) => {
      if (user) {
          const uid = user.uid;
          console.log("User is loggined");
      } else {
          console.log("User is signed out");
      }
  });
}
keeploggined()




  export {
    getAuth,
    signInWithPopup,
    swal,
    createUserWithEmailAndPassword,
    addUserToDB,auth,
    signinFirebase,doc,setDoc,collection,getDocs,db,
    storage,ref,uploadBytes,getDownloadURL,
    onAuthStateChanged,
    keeploggined
  
  
  }  