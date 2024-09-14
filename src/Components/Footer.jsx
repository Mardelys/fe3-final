import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import "./theme.css";

const Footer = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <footer className={`footer ${state.theme}`}>
      <p>Powered by</p>
      <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  );
};

export default Footer;
