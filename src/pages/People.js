import { useEffect, useContext } from "react";
import ConnexionApi from "../services/ConnexionApi.js";
import Navbar from "./templates/Navbar.js";
import ThemeContext from "../context/ThemeContext";

function People() {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("people");
  }, [setTheme]);

  return (
    <>
      <Navbar />
      <ConnexionApi theme="people" />
    </>
  );
}

export default People;
