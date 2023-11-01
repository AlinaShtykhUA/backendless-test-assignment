import { Routes, Route, Navigate, useParams } from "react-router-dom";
import LazyLoading from "./components/LazyLoading/LazyLoading";
import TabsNav from "./components/TabsNav/TabsNav";
import Footer from "./components/Footer/Footer";
import useTabsData from "./utils/firebase";
import "./App.css";

function App() {
  const tabs = useTabsData();
  const { tabId } = useParams();

  const defaultTab =
    tabId ||
    (tabs.length > 0 ? tabs.sort((a, b) => a.order - b.order)[0].id : null);

  return (
    <div className="App">
      <header className="header">
        <TabsNav tabs={tabs} />
      </header>

      <main className="main">
        <Routes>
          {tabs.map(({ id, path }) => (
            <Route key={id} path={id} element={<LazyLoading path={path} />} />
          ))}
          <Route path="*" element={<Navigate to={defaultTab} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
