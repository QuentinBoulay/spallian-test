import { useEffect, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import ConnexionApi from "../services/ConnexionApi.js";
import Navbar from "./templates/Navbar.js";
import Footer from "./templates/Footer";

function Vehicle() {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("vehicles");
  }, [setTheme]);

  return (
    <>
      <Navbar />
      <ConnexionApi theme="vehicles" />
      <Footer />
    </>
  );
}

export default Vehicle;
