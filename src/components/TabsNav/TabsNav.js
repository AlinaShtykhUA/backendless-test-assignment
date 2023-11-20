import { Link } from "react-router-dom";
import "./tabsNav.css";

const TabsNav = ({ tabs, tabFromUrl }) => {
  return (
    <nav className="nav">
      {tabs
        .sort((a, b) => a.order - b.order)
        .map(({ id, title }) => (
          <Link
            className={`nav-link ${tabFromUrl === id ? "active" : ""}`}
            key={id}
            to={`/?tab=${id}`}
          >
            {title}
          </Link>
        ))}
    </nav>
  );
};

export default TabsNav;
