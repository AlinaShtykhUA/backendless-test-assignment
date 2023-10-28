import tabs from "../../data/tabs.json";
import { NavLink } from "react-router-dom";
import "./tabsNav.css";

const TabsNav = () => {
  return (
    <nav className="nav">
      {tabs.map(({ id, title }) => (
        <NavLink className="nav-link" key={id} to={id}>
          {title}
        </NavLink>
      ))}
    </nav>
  );
};

export default TabsNav;