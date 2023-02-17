import { BsFillImageFill } from 'react-icons/bs';
import { FaLocationArrow } from 'react-icons/fa';
import { AiTwotonePhone } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Image from 'next/image';

const IconLinks = ({ website, phone, longitude, latitude }) => {
	console.log(website);
	return (
		<>
			<motion.div className='flex gap-8 text-sm ga items-center opacity-70 text-secondary  transition duration-700 mr-4 lg:mr-0 '
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1,  }}
                transition={{ duration: 1, delay: .3 }}
            >
				{website !== null && (
					<MotionHover>
						<a href={website} target='_blank' rel='noreferrer'>
							<BsFillImageFill className='text-3xl lg:text-4xl' />
						</a>
					</MotionHover>
				)}
				<MotionHover>
					<AiTwotonePhone className='text-3xl lg:text-4xl' />
				</MotionHover>
				<MotionHover>
					<FaLocationArrow className='text-3xl lg:text-4xl' />
				</MotionHover>
			</motion.div>
		</>
	);
};

export default IconLinks;

const MotionHover = ({ children }) => {
	return (
		<motion.div
			initial={{ scale: 1, y: 0 }}
			whileInView={{ scale: 0.92, y: 2 }}
			transition={{
				duration: 1.2,
				repeat: Infinity,
				repeatType: 'mirror',
				ease: 'easeInOut',
			}}
			className='flex gap-8 text-sm ga items-center  '
		>
			{children}
		</motion.div>
	);
};
