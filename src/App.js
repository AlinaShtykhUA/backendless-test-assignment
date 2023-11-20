import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import LazyLoading from "./components/LazyLoading/LazyLoading";
import TabsNav from "./components/TabsNav/TabsNav";
import Footer from "./components/Footer/Footer";
import useTabsData from "./utils/fetchData";
import "./App.css";

function App() {
  const tabs = useTabsData();
  const location = useLocation();
  const navigate = useNavigate();

  tabs.forEach(({ path }) => {
    console.log(path); //tabsContent/dummyTable.js
    //tabsContent/dummyChart.js
    //tabsContent/dummyList.js
  });

  const defaultTab =
    tabs.length > 0 ? tabs.sort((a, b) => a.order - b.order)[0].id : null;

  const searchParams = new URLSearchParams(location.search);
  const tabFromUrl = searchParams.get("tab");

  const defaultTabId = tabFromUrl || defaultTab || "";

  useEffect(() => {
    if (!tabFromUrl) {
      navigate(`/?tab=${defaultTabId}`);
    }
  }, [tabFromUrl, defaultTabId, navigate]);

  return (
    <div className="App">
      <header className="header">
        <TabsNav tabs={tabs} tabFromUrl={tabFromUrl} />
      </header>

      <main className="main">
        <Routes>
          {tabs.map(({ id, path }) => (
            <Route key={id} to={id} element={<LazyLoading path={path} />} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
