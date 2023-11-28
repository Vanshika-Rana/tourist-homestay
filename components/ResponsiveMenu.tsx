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
			className={`lg:flex flex-col w-full lg:flex-row ${
				isMenuOpen ? "block" : "hidden"
			}`}>
			<div className='lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 w-full'>
				{/* Links */}
				<div className='flex items-center justify-around w-full flex-col my-4 lg:flex-row'>
					<Link href='#about'>
						<p className='text-gray-800 text-lg font-medium mt-4 lg:mt-0 transition duration-300 hover:text-red-400 hover:scale-95 cursor-pointer'>
							About
						</p>
					</Link>
					<Link href='#rooms'>
						<p className='font-medium text-lg text-gray-800 mt-4 lg:mt-0 transition duration-300 hover:text-red-400 hover:scale-95 cursor-pointer'>
							Rooms
						</p>
					</Link>
					<Link href='#services'>
						<p className='font-medium text-lg text-gray-800 mt-4 lg:mt-0 transition duration-300 hover:text-red-400 hover:scale-95 cursor-pointer'>
							Services
						</p>
					</Link>

					<Link href='https://forms.gle/nGEt2a79UuFiAb9L7' target="_blank">
						<button className='font-bold text-lg bg-transparent border-2 border-red-400 px-6 py-2 rounded-lg text-gray-800 mt-4 lg:mt-0 transition duration-300 hover:bg-red-400 hover:scale-95 cursor-pointer'>
							Book Now
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ResponsiveMenu;
