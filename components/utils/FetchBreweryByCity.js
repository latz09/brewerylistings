import { useState, useRef } from 'react';
import axios from 'axios';


const FetchBreweryByCity = ({ breweries, setBreweries }) => {
	const [userInputCity, setUserInputCity] = useState('');
	const [loading, setLoading] = useState(false);

	const url = `https://api.openbrewerydb.org/breweries?by_city=${userInputCity}&per_page=100`;

	const fetchBreweries = async (event) => {
		event.preventDefault();
		setLoading(true);
		axios.get(url).then((res) => {
			setBreweries(res.data);
		});
		setUserInputCity('');
		setLoading(false);
	};
	return (
		<form
			onSubmit={fetchBreweries}
			className='grid gap-4 place-items-center mt-4 h-[10vh]'
		>
			<div className="flex items-center gap-2">
				<div className=''>
					<input
						type='text'
						value={userInputCity}
						onChange={(e) => setUserInputCity(e.target.value)}
						placeholder='Search for breweries by state'
						className='border p-4 rounded'
					/>
				</div>
				<button
					type='submit'
					className='p-2 bg-blue-900 text-xl font-bold text-white rounded-full '
				>
					Search
				</button>
				
			</div>
		</form>
	);
};

export default FetchBreweryByCity;
