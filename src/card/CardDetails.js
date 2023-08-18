import { useParams } from "react-router-dom";
import React, { useContext } from 'react';
import ThemeContext from "../context/ThemeContext";
import {useQuery} from 'react-query';
import Navbar from "../pages/templates/Navbar";

function CardDetails() {

    const { userId } = useParams();
    const { theme } = useContext(ThemeContext);

      // Fetcher function
	const getFacts = async () => {
		const res = await fetch('https://swapi.dev/api/'+theme+'/'+userId);
		return res.json();
	};
	// Using the hook
	const {data, error, isLoading} = useQuery(['data', theme, userId], getFacts);
	// Error and Loading states
	if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;
	// Show the response if everything is fine

    console.log(data)

    return (
        <>
        <Navbar/>
            {data.name}<br></br>
            {data.height}<br></br>
            {data.mass}<br></br>
            {data.hair_color}<br></br>
            {data.skin_color}<br></br>
            {data.eye_color}<br></br>
            {data.birth_year}<br></br>
            {data.gender}
        </>
    );
  }

export default CardDetails;