"use client";
// components/Navbar.tsx
import React, { useState } from "react";
import Link from "next/link";
import ResponsiveMenu from "./ResponsiveMenu";
import Image from "next/image";

const Navbar: React.FC = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<nav className='bg-white px-4 py-6'>
			<div className='container mx-auto flex flex-col lg:flex-row items-center justify-between'>
				<div className='flex w-full items-center justify-between'>
					{/* Logo on the left */}
                    <div className="flex flex-col items-start justify-center">
					<Image
						src='/images/logo-black.png'
						width={150}
						height={150}
						alt='Picture of the author'
					/>
					<Link href='/'>
						<p className='text-red-400 text-xl lg:text-3xl font-bold tracking-wide'>
							Manodaya Homes
						</p>
					</Link>
                    </div>
					{/* Hamburger menu for small screens */}
					<div className='lg:hidden'>
						<button
							onClick={toggleMenu}
							className='text-gray-800 focus:outline-none'>
							{isMenuOpen ? (
								<svg
									className='h-6 w-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M6 18L18 6M6 6l12 12'></path>
								</svg>
							) : (
								<svg
									className='h-6 w-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h16m-7 6h7'></path>
								</svg>
							)}
						</button>
					</div>
				</div>

				{/* Use ResponsiveMenu component for the responsive menu */}
				<ResponsiveMenu isMenuOpen={isMenuOpen} />
			</div>
		</nav>
	);
};

export default Navbar;
