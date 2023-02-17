import { useState } from 'react';

import Brewery from './Brewery';

const BreweryDisplay = ({ breweries }) => {
	const firstBrewery = breweries[0];
    const DUMBYBREWERY = [
        {
            "id": "buckeye-beer-engine-lakewood",
            "name": "Buckeye Beer Engine",
            "brewery_type": "brewpub",
            "street": "15315 Madison Ave",
            "address_2": null,
            "address_3": null,
            "city": "Lakewood",
            "state": "Ohio",
            "county_province": null,
            "postal_code": "44107-4020",
            "country": "United States",
            "longitude": "-81.803918",
            "latitude": "41.477245",
            "phone": "2162262337",
            "website_url": "http://www.buckeyebeerengine.com",
            "updated_at": "2023-01-04T04:46:02.393Z",
            "created_at": "2023-01-04T04:46:02.393Z"
        },
  
    ]



	return (
		<div className='grid gap-8 h-full'>
			<div className="h-[10vh]">
				<LocationHeader city={firstBrewery.city} state={firstBrewery.state} />
				{/* <LocationHeader city={'Minneapolis'} state={'Minnesota'} /> */}
				
			</div>
			<div className="snap-y snap-mandatory h-[70vh]  overflow-scroll scrollbar-hide  ">
				{breweries.map((brewery) => (
					<div key={brewery.id} className="snap-center grid   max-w-4xl w-full mx-auto my-36 ">
						<Brewery
							name={brewery.name}
							type={brewery.brewery_type}
							website={brewery.website_url}
							phone={brewery.phone}
							street={brewery.street}
							latitude={brewery.latitude}
							longitude={brewery.longitude}

						/>
					</div>
				))}
				
			</div>
		</div>
	);
};

export default BreweryDisplay;



const LocationHeader = ({ city, state }) => {
	return (
		<div className='flex space-x-8 items-baseline text-4xl opacity-80'>
			<div className=''>{city}</div>
			<div className='opacity-70'>{state}</div>
		</div>
	);
};
