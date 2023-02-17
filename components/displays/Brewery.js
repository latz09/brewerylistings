import { AiFillStar } from 'react-icons/ai';
import { motion } from 'framer-motion';
import IconLinks from '../utils/IconLinks';

const Brewery = ({
	name,
	type,
	website,
	phone,
	street,
	longitude,
	latitude,
}) => {
	return (
		<motion.div
			className='grid gap-16 shadow-lg text-light   py-8 px-4 rounded backdrop-blur bg-secondary/60 mx-2 lg:mx-0'
			initial={{ opacity: 0, scale: 0.9 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1 }}
		>
			<div className='grid gap-2 lg:gap-0 lg:flex justify-between items-center'>
				<BreweryTitle name={name} />
				<FiveStars />
			</div>
			<div className='lg:hidden w-full h-full p-20 grid  place-items-center bg-light/60 shadow-md'>
				MAP
			</div>
			<div className='lg:flex gap-8 '>
				<div className='flex justify-between lg:grid gap-16'>
					<BreweryDetails name={name} type={type} street={street} />
					<IconLinks
						website={website}
						phone={phone}
						longitude={longitude}
						latitude={latitude}
					/>
				</div>

				<div className='hidden w-full h-full mx-8 p-4 lg:grid place-items-center bg-light/60 shadow-lg'>
					MAP
				</div>
			</div>
		</motion.div>
	);
};

export default Brewery;

// horizontal carousel using tailwindcss scroll snap

const BreweryTitle = ({ name }) => {
	return (
		<motion.div className='text-3xl opacity-90'
			initial={{ opacity: 0, scale: 0.9 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1 }}
		>
			<div className='text-2xl lg:text-3xl font-semibold lg:scale-y-110 '>
				{name}
			</div>
		</motion.div>
	);
};

const BreweryDetails = ({ name, type, street }) => {
	return (
		<div className='text-xl text-medium   tracking-widest grid gap-2 '>
			<div className='font-semibold tracking-wid  '>{street}</div>
			<div className=' text-base font-bold  '>
				{'1.4'} miles away
			</div>
		</div>
	);
};

const FiveStars = () => {
	const stars = [1, 2, 3, 4, 5];
	return (
		<>
			<div className='flex space-x-2 '>
				{stars.map((s, i) => (
					<motion.div
						key={i}
						className='text-dark text-xl lg:text-3xl'
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1.3, delay: 0.2 * i }}
					>
						<motion.div
							initial={{ scale: 0.85, opacity: 0.85 }}
							whileInView={{ scale: 1.0, opacity: 1 }}
							transition={{
								duration: 1,
								repeat: Infinity,
								repeatType: 'reverse',
								delay: 0.2 * i,
							}}
						>
							<AiFillStar />
						</motion.div>
					</motion.div>
				))}
			</div>
		</>
	);
};
