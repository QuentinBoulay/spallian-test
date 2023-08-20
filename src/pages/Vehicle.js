import { useEffect, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import ConnexionApi from "../services/ConnexionApi.js";
import Navbar from "./templates/Navbar.js";

function Vehicle() {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("vehicles");
  }, [setTheme]);

  return (
    <>
      <Navbar />
      <ConnexionApi theme="vehicles" />
    </>
  );
}

export default Vehicle;
