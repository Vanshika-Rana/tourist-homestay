// components/ResponsiveMenu.tsx
"use client";
import React from "react";
import Link from "next/link";

interface ResponsiveMenuProps {
	isMenuOpen: boolean;
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ isMenuOpen }) => {
	return (
		<div
			className={`lg:flex flex-col w-full lg:flex-row transition-all duration-300 ${
				isMenuOpen ? "block animate-fade-in" : "hidden"
			}`}>
			<div className='lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 w-full'>
				{/* Links */}
				<div className='flex items-center justify-around w-full flex-col my-4 lg:flex-row gap-4 lg:gap-0'>
					<Link href='#about' className='group'>
						<p className='text-gray-800 text-base font-medium mt-4 lg:mt-0 transition-all duration-300 hover:text-primary-500 hover:scale-105 cursor-pointer relative'>
							About
							<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300'></span>
						</p>
					</Link>
					<Link href='#rooms' className='group'>
						<p className='font-medium text-base text-gray-800 mt-4 lg:mt-0 transition-all duration-300 hover:text-primary-500 hover:scale-105 cursor-pointer relative'>
							Rooms
							<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300'></span>
						</p>
					</Link>
					<Link href='#services' className='group'>
						<p className='font-medium text-base text-gray-800 mt-4 lg:mt-0 transition-all duration-300 hover:text-primary-500 hover:scale-105 cursor-pointer relative'>
							Services
							<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300'></span>
						</p>
					</Link>
					<Link href='#video' className='group'>
						<p className='font-medium text-base text-gray-800 mt-4 lg:mt-0 transition-all duration-300 hover:text-primary-500 hover:scale-105 cursor-pointer relative'>
							Video
							<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300'></span>
						</p>
					</Link>
					<Link href='#packages' className='group'>
						<p className='font-medium text-base text-gray-800 mt-4 lg:mt-0 transition-all duration-300 hover:text-primary-500 hover:scale-105 cursor-pointer relative'>
							Packages
							<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300'></span>
						</p>
					</Link>
					<Link href='#contact'>
						<button className='font-semibold text-base bg-gradient-to-r from-primary-500 to-primary-600 text-white px-5 py-2 rounded-lg mt-4 lg:mt-0 transition-all duration-300 hover:from-primary-600 hover:to-primary-700 hover:scale-105 hover:shadow-lg cursor-pointer'>
							Book Now
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ResponsiveMenu;
