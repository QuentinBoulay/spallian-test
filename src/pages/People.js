import { useEffect, useContext } from "react";
import ConnexionApi from "../services/ConnexionApi.js";
import Navbar from "./templates/Navbar.js";
import ThemeContext from "../context/ThemeContext";
import Footer from "./templates/Footer.js";

function People() {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("people");
  }, [setTheme]);

  return (
    <>
      <Navbar />
      <ConnexionApi theme="people" />
      <Footer/>
    </>
  );
}

export default People;
