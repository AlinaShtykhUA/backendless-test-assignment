import { Routes, Route, Navigate } from "react-router-dom";
import tabs from "./data/tabs.json";
import LazyLoading from "./components/LazyLoading/LazyLoading";
import "./App.css";
import TabsNav from "./components/TabsNav/TabsNav";

function App() {
  return (
    <div className="App">
      <header>
        <TabsNav />
      </header>

      <main>
        <Routes>
          {tabs.map(({ id, path }) => (
            <Route key={id} path={id} element={<LazyLoading path={path} />} />
          ))}
          <Route index element={<Navigate to={tabs[0].id} />} />
          <Route path="*" element={<Navigate to={tabs[0].id} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
