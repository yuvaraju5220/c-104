import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBz6kjtlc--IyFfKHh7gFP70B2vxDu7wNo",
  authDomain: "group-project-b9771.firebaseapp.com",
  projectId: "group-project-b9771",
  storageBucket: "group-project-b9771.appspot.com",
  messagingSenderId: "987940878249",
  appId: "1:987940878249:web:60c48c2f761c4a484a36b8"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
