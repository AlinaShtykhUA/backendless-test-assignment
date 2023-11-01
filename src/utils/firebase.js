import { initializeApp } from "firebase/app";
import "firebase/firestore";
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
initializeApp.initializeApp(firebaseConfig);

// Отримання доступу до Firestore
const firestore = initializeApp.firestore();

export default function useTabsData() {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    // Отримання доступу до колекції tabsData в Firestore
    const tabsCollection = firestore.collection("tabsData");

    // Встановлення слухача для отримання змін у Firestore
    tabsCollection.onSnapshot((snapshot) => {
      const tabsData = [];
      snapshot.forEach((doc) => {
        // Отримання даних кожного документа
        const data = doc.data();
        tabsData.push(data);
      });

      // Оновлення стану з отриманими даними
      setTabs(tabsData);
    });
  }, []);

  return tabs;
}
