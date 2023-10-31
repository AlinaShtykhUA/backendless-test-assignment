import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams,
} from "react-router-dom";
import LazyLoading from "./components/LazyLoading/LazyLoading";
import TabsNav from "./components/TabsNav/TabsNav";
import Footer from "./components/Footer/Footer";
import useTabsData from "./utils/fetchData";
import "./App.css";

function App() {
  const tabs = useTabsData();
  const navigate = useNavigate();
  const { tabId } = useParams();

  const defaultTab =
    tabId ||
    (tabs.length > 0 ? tabs.sort((a, b) => a.order - b.order)[0].id : null);

  const handleTabClick = (tabId) => {
    navigate(tabId);
  };

  return (
    <div className="App">
      <header className="header">
        <TabsNav tabs={tabs} onTabClick={handleTabClick} />
      </header>

      <main className="main">
        <Routes>
          {tabs.map(({ id, path }) => (
            <Route key={id} path={id} element={<LazyLoading path={path} />} />
          ))}
          <Route index element={<Navigate to={defaultTab} />} />
          <Route path="*" element={<Navigate to={defaultTab} />} />
        </Routes>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
