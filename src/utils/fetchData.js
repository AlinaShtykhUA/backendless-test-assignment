import { useEffect, useState } from "react";

export default function useTabsData() {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    async function fetchTabs() {
      try {
        const response = await fetch("tabs.json");
        const data = await response.json();
        setTabs(data);
      } catch (error) {
        console.error("Error ", error);
      }
    }

    fetchTabs();
  }, []);

  return tabs;
}
