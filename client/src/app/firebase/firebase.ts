// firebase.ts
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCaIuzgCe3_rwuWP...t4IGuw4",
  authDomain: "mikonojuu-9ba1c.firebaseapp.com",
  projectId: "mikonojuu-9ba1c",
  storageBucket: "mikonojuu-9ba1c.appspot.com",
  messagingSenderId: "1092169578544",
  appId: "1:1092169578544:web:a9bbdd6b96f174c5cb95f5",
  measurementId: "G-4QT8SL7D4B"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
