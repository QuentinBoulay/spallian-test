import { useEffect, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import ConnexionApi from "../services/ConnexionApi.js";
import Navbar from "./templates/Navbar.js";

function Species() {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("species");
  }, [setTheme]);

  return (
    <>
      <Navbar />
      <ConnexionApi theme="species" />
    </>
  );
}

export default Species;
