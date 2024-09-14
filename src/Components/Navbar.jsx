import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import "./theme.css";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    dispatch({ type: "SET_THEME" });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <nav className={`navbar ${state.theme}`}>
      <div className="navbar-left">
        <h1>DH Odonto</h1>
      </div>
      <div className="navbar-right">
        <button className= {`menu-toggle ${state.theme}`} onClick={toggleMenu}>
          &#9776; 
        </button>
        <div className={`menu-items ${isOpen ? "open" : ""} `}>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/favs">Favs</Link>
          <button  className="change-theme" onClick={toggleTheme}>
          {state.theme !== 'dark' ? (
            <>
              &#9790;
            </>
          ) : (
            <>
              &#9728;
            </>
          )}
        </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
