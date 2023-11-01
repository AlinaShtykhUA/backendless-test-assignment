// import { useEffect, useState } from "react";
//
// export default function useTabsData() {
//   const [tabs, setTabs] = useState([]);
//
//   useEffect(() => {
//     async function fetchTabs() {
//       try {
//         const response = await fetch("http://localhost:3000/tabsData");
//         const data = await response.json();
//         setTabs(data);
//       } catch (error) {
//         console.error("Error ", error);
//       }
//     }
//
//     fetchTabs();
//   }, []);
//
//   return tabs;
// }
