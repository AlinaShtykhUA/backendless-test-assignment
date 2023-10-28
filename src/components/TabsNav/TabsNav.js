import tabs from "../../data/tabs.json";
import { NavLink } from "react-router-dom";

const TabsNav = () => {
  return (
    <nav>
      <ul>
        {tabs.map(({ id, title }) => (
          <li key={id}>
            <NavLink to={id}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TabsNav;
