import { useEffect, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import ConnexionApi from "../services/ConnexionApi.js";
import Navbar from "./templates/Navbar.js";
import Footer from "./templates/Footer";

function Species() {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("species");
  }, [setTheme]);

  return (
    <>
      <Navbar />
      <ConnexionApi theme="species" />
      <Footer/>
    </>
  );
}

export default Species;
