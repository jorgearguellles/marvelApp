import env from "react-dotenv";
import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${env.apiKey}`,
  authDomain: `${env.authDomain}`,
  projectId: `${env.projectId}`,
  storageBucket: `${env.storageBucket}`,
  messagingSenderId: `${env.messagingSenderId}`,
  appId: `${env.appId}`,
  measurementId: `${env.measurementId}`
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;