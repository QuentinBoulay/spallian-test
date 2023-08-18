import { useEffect, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import ConnexionApi from '../services/ConnexionApi.js';
import Navbar from './templates/Navbar.js';

function Planet() {

    const { setTheme } = useContext(ThemeContext);
    
    useEffect(() => {
        setTheme('planets');
    }, [setTheme]);

    return (
        <>
            <Navbar />
            <h1>Planet</h1>
            <ConnexionApi theme="planets"/>
        </>
    );
  }

export default Planet;


