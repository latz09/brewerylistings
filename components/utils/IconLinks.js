import { BsFillImageFill } from 'react-icons/bs';
import { FaLocationArrow } from 'react-icons/fa';
import { AiTwotonePhone } from 'react-icons/ai';

import Image from 'next/image';

const IconLinks = ({ website, phone, longitude, latitude }) => {
	console.log(website);
	return (
		<>
			<div className='flex gap-8 text-sm ga items-center opacity-70 text-medium hover:text-dark transition duration-700 mr-4 lg:mr-0'>
				{website !== null && (
					<a href={website} target='_blank' rel='noreferrer'>
						<BsFillImageFill className='text-3xl lg:text-4xl' />
					</a>
				)}
		
				<AiTwotonePhone className='text-3xl lg:text-4xl' />
				<FaLocationArrow className='text-3xl lg:text-4xl' />
			</div>
			
		</>
	);
};

export default IconLinks;
