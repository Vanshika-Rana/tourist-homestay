import React from "react";
import Image from "next/image";
import { GiHorizonRoad } from "react-icons/gi";
import { FaHelicopter } from "react-icons/fa";
const About: React.FC = () => {
	return (
		<div id="about" className='min-h-screen px-8 lg:px-12 xl:px-16 mt-16 flex flex-col xl:flex-row items-center justify-center w-full'>
			{/* Content on the left */}
			<div className='w-full '>
				<h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-4 text-red-400'>
					About Us
				</h2>
				<p className='text-gray-600 font-extralight text-md lg:text-lg xl:text-xl mb-8 '>
					Discover serenity at Manodaya Homes, nestled in the
					tranquility of Kedarnath Valley. Our retreat offers lush
					green hills, snow-covered peaks, and a perfect stop enroute
					to Kedarnath. Enjoy a peaceful getaway with a cup of tea in
					hand – your home away from home in the heart of natures
					beauty.
				</p>

				<p className='text-black uppercase font-bold text-lg lg:text-xl xl:text-2xl mb-2 '>
					Highlights:
				</p>
				<div className='flex items-center mt-4'>
					<div>
						<GiHorizonRoad size={25} />
					</div>
					<p className='text-red-400 font-medium text-md lg:text-lg xl:text-xl '>
						&nbsp; 2KM from Guptkashi Market
					</p>
				</div>
                <div className='flex items-center mt-4'>
					<div>
						<FaHelicopter  size={25} />
					</div>
					<p className='text-red-400 font-medium text-md lg:text-lg xl:text-xl  '>
					 &nbsp; 10 m from Guptkashi Helipad
				</p>
				</div>
				
			</div>

			{/* Photo grid on the right */}
			<div className='lg:w-full relative flex justify-center items-center  w-full'>
				<div className='flex flex-col justify-around'>
					{/* First photo */}
					<div className='relative mb-4'>
						<Image
							src='/images/img1.jpeg'
							objectFit='cover'
							alt='Photo 1'
							className='rounded-md shadow-lg'
							width={600}
							height={600}
						/>
					</div>

					{/* Second photo */}
					<div className='relative mt-4'>
						<Image
							src='/images/img2.jpeg'
							objectFit='cover'
							alt='Photo 2'
							className='rounded-md shadow-lg'
							width={600}
							height={600}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
