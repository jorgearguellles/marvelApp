import env from "react-dotenv";
import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: `${env.apiKey}`,
  authDomain: `${env.authDomain}`,
  projectId: `${env.projectId}`,
  storageBucket: `${env.storageBucket}`,
  messagingSenderId: `${env.messagingSenderId}`,
  appId: `${env.appId}`,
  measurementId: `${env.measurementId}`
});

export const auth = app.auth();
export default app;