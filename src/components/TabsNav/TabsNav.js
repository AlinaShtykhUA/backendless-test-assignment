import { NavLink } from "react-router-dom";
import "./tabsNav.css";
import useTabsData from "../../utils/fetchData";

const TabsNav = () => {
  const tabs = useTabsData();
  return (
    <nav className="nav">
      {tabs
        .sort((a, b) => a.order - b.order)
        .map(({ id, title }) => (
          <NavLink className="nav-link" key={id} to={id}>
            {title}
          </NavLink>
        ))}
    </nav>
  );
};

export default TabsNav;
