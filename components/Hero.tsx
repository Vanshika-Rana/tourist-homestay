import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
interface HeroProps {
	bgImage: string;
}

const Hero: React.FC<HeroProps> = ({ bgImage }) => {
	const backgroundStyle = {
		backgroundImage: `url(/images/${bgImage})`, // Adjust the path accordingly
	};
	const overlayStyle = {
		backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust the opacity (0.5) as needed
	};

	return (
		<div
			className='h-screen w-full bg-cover bg-fixed bg-center bg-no-repeat  '
			style={backgroundStyle}>
               
			<div
				className='relative w-full h-screen  flex flex-col justify-center items-center'
				style={overlayStyle}>
				<Image
					src='/images/logo.png'
					width={200}
					height={200}
					alt='Picture of the author'
				/>

				<h1 className='z-10 text-white text-center text-5xl lg:text-7xl xl:text-8xl font-bold  uppercase mt-8'>
					Manodaya Homes
				</h1>
				<p className='z-10 text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-light mt-2'>
					Home Away ... From Home
				</p>
                <Link href='https://forms.gle/casY6rC2ig4Zugph6' target="_blank">
				<button  className='font-bold text-lg mt-8  px-6 py-2 rounded-lg text-white lg:mt-8 transition duration-300 bg-red-400 hover:scale-95 cursor-pointer'>
					Book Now
				</button>
                </Link>
			</div>
		</div>
	);
};

export default Hero;
