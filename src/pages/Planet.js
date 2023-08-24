import { useEffect, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import ConnexionApi from "../services/ConnexionApi.js";
import Navbar from "./templates/Navbar.js";
import Footer from "./templates/Footer";

function Planet() {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("planets");
  }, [setTheme]);

  return (
    <>
      <Navbar />
      <ConnexionApi theme="planets" />
      <Footer />
    </>
  );
}

export default Planet;
