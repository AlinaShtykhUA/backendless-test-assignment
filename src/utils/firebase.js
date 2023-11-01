import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBavYHWt0ZjU5DsdPDCpzgVc87Zle4M5iI",
  authDomain: "backendless-data.firebaseapp.com",
  projectId: "backendless-data",
  storageBucket: "backendless-data.appspot.com",
  messagingSenderId: "813682990496",
  appId: "1:813682990496:web:686b3f20cfc3d1272cd8c5",
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);

// Отримання доступу до Firestore
const db = getFirestore(app);

export default function useTabsData() {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    // Отримання даних з колекції "tabsData" в Firestore
    const fetchData = async () => {
      const tabsCollection = collection(db, "tabsData");
      const querySnapshot = await getDocs(tabsCollection);
      const tabsData = [];

      querySnapshot.forEach((doc) => {
        tabsData.push(doc.data());
      });

      setTabs(tabsData);
    };

    fetchData();
  }, []);

  return tabs;
}
