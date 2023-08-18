import Cards from '../card/Cards.js';
import {useQuery} from 'react-query';


function ConnexionApi(props) {
	// Fetcher function
	const getFacts = async () => {
		const res = await fetch('https://swapi.dev/api/'+props.theme+'/');
		return res.json();
	};
	// Using the hook
	const {data, error, isLoading} = useQuery(['data', props.theme], getFacts);

	// Error and Loading states
	if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;
	// Show the response if everything is fine
	return (
    <>
      <Cards cards={data.results} theme={props.theme}/>
    </>
	);
}

export default ConnexionApi;