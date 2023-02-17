import { useState, useRef } from 'react';
import BreweryDisplay from '../components/displays/BreweryDisplay';
import FetchBreweryByCity from '../components/utils/FetchBreweryByCity';
import Image from 'next/image';
import beer from '../public/images/pbr-bottle.jpg';
export default function Home() {
	const [breweries, setBreweries] = useState({});

	return (
		<div className='relative w-full h-[100vh] '>
			<Image
				src={beer}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative h-full  bg-dark/80'>
				<div className='py-2  '>
					<FetchBreweryByCity setBreweries={setBreweries} />
					{breweries.length > 0 && (
						<BreweryDisplay breweries={breweries} setBreweries={setBreweries} />
					)}
					{/* <div className='absolute bg-dark top-0 left-0 right-0 bottom-0 z-[1]'>
						<Image
							src={beer}
							alt='beer'
							layout='fill'
							objectFit='cover'
							objectPosition='center'
						/>
					</div> */}
				</div>
			</div>
		</div>
	);
}
