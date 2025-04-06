// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwSPWJ92E1sljcGvt5M8pshiVL1vzkbOI",
  authDomain: "crop-ai-eab72.firebaseapp.com",
  projectId: "crop-ai-eab72",
  storageBucket: "crop-ai-eab72.firebasestorage.app",
  messagingSenderId: "129087000878",
  appId: "1:129087000878:web:34d74e92449b81161deabf",
  measurementId: "G-3B8KXN6PVH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth =  initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const db = getFirestore(app);
export const storage = getStorage(app);
//export { app, analytics, auth, db };