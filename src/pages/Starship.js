import { useEffect, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import ConnexionApi from '../services/ConnexionApi.js';
import Navbar from './templates/Navbar.js';

function Starship() {

    const { setTheme } = useContext(ThemeContext);
    useEffect(() => {
        setTheme('starships');
    }, [setTheme]);

    return (
        <>
            <Navbar />
            <h1>Starship</h1>
            <ConnexionApi theme="starships"/>
        </>
    );
  }

export default Starship;


