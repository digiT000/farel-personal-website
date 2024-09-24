import { NavLink } from "react-router-dom";

import "../styles/components/navigationBar.css";

// With Link to --> it will tell react where path or link we will go to
// Navlink digunakan apabila kita ingin meberikan tanda aktif pada link tersebut
function NavigationBar() {
  return (
    <nav className="navigationBar">
      <div className="navWrapper custonNav-animation">
        <a className="textLink" href="">
          <NavLink to="/">My Story</NavLink>
        </a>
        <a className="textLink" href="">
          <NavLink to="/my-project">My Project</NavLink>
        </a>
        <a className="buttonLink" href="">
          <NavLink to="/contact">Contact Me</NavLink>
        </a>
      </div>
    </nav>
  );
}

export default NavigationBar;
