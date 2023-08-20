import { useEffect, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import ConnexionApi from "../services/ConnexionApi.js";
import Navbar from "./templates/Navbar.js";

function Film() {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("films");
  }, [setTheme]);

  return (
    <>
      <Navbar />
      <ConnexionApi theme="films" />
    </>
  );
}

export default Film;
