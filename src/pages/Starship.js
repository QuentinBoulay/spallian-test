import { useEffect, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import ConnexionApi from "../services/ConnexionApi.js";
import Navbar from "./templates/Navbar.js";
import Footer from "./templates/Footer";

function Starship() {
  const { setTheme } = useContext(ThemeContext);
  useEffect(() => {
    setTheme("starships");
  }, [setTheme]);

  return (
    <>
      <Navbar />
      <ConnexionApi theme="starships" />
      <Footer/>
    </>
  );
}

export default Starship;
