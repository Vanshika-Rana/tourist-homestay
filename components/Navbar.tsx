"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const navLinks = [
		{
			href: "#about",
			label: "About",
			ariaLabel: "About our Uttarakhand homestay",
		},
		{
			href: "#rooms",
			label: "Rooms",
			ariaLabel: "Rooms and accommodation",
		},
		{
			href: "#services",
			label: "Services",
			ariaLabel: "Services and amenities",
		},
		{ href: "#video", label: "Video", ariaLabel: "Virtual tour video" },
		{
			href: "#packages",
			label: "Packages",
			ariaLabel: "Uttarakhand tour packages",
		},
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
					: "bg-white/90 backdrop-blur-sm"
			}`}
			role='navigation'
			aria-label='Main navigation'>
			<div className='container mx-auto px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16 lg:h-20'>
					{/* Logo on the left */}
					<Link
						href='/'
						className='flex items-center gap-2'
						aria-label='Manodaya Homes - Premium Homestay in Uttarakhand'>
						<Image
							src='/images/logo-black.png'
							width={40}
							height={40}
							alt='Manodaya Homes Logo - Uttarakhand Homestay'
							className='transition-all duration-300'
						/>
						<span className='text-primary-500 font-semibold text-lg lg:text-xl tracking-wide'>
							Manodaya Homes
						</span>
					</Link>

					{/* Navigation links in center - Desktop */}
					<div className='hidden lg:flex items-center gap-8'>
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								aria-label={link.ariaLabel}
								className='text-gray-700 text-sm font-medium hover:text-primary-500 transition-colors duration-200'>
								{link.label}
							</Link>
						))}
					</div>

					{/* Primary CTA on the right */}
					<div className='hidden lg:block'>
						<Link
							href='#contact'
							aria-label='Book your stay at Manodaya Homes Uttarakhand homestay'>
							<button className='px-5 py-2.5 text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-200'>
								Book Now
							</button>
						</Link>
					</div>

					{/* Mobile menu button */}
					<button
						onClick={toggleMenu}
						aria-label='Toggle mobile menu'
						aria-expanded={isMenuOpen}
						className='lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200'>
						{isMenuOpen ? (
							<svg
								className='h-6 w-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								aria-hidden='true'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						) : (
							<svg
								className='h-6 w-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								aria-hidden='true'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						)}
					</button>
				</div>

				{/* Mobile menu */}
				{isMenuOpen && (
					<div className='lg:hidden border-t border-gray-100 py-4'>
						<nav
							className='flex flex-col gap-3'
							aria-label='Mobile navigation'>
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									onClick={() => setMenuOpen(false)}
									aria-label={link.ariaLabel}
									className='text-gray-700 text-base font-medium hover:text-primary-500 transition-colors duration-200 py-2'>
									{link.label}
								</Link>
							))}
							<Link
								href='#contact'
								onClick={() => setMenuOpen(false)}
								className='mt-2'
								aria-label='Book your Uttarakhand homestay stay'>
								<button className='w-full px-5 py-2.5 text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-lg shadow-sm transition-all duration-200'>
									Book Now
								</button>
							</Link>
						</nav>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
