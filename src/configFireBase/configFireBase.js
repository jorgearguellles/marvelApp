import env from "react-dotenv";

const firebaseConfig = {
  apiKey: `${env.apiKey}`,
  authDomain: `${env.authDomain}`,
  projectId: `${env.projectId}`,
  storageBucket: `${env.storageBucket}`,
  messagingSenderId: `${env.messagingSenderId}`,
  appId: `${env.appId}`,
  measurementId: `${env.measurementId}`
};