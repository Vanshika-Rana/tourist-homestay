"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
	bgImage: string;
}

const Hero: React.FC<HeroProps> = ({ bgImage }) => {
	return (
		<section className='relative w-full h-screen overflow-hidden'>
			{/* Hero Background Image */}
			<div className='absolute inset-0'>
				<Image
					src='/images/hero-image.jpg'
					alt='Beautiful Himalayan landscape with lush green hills, terraced fields, and misty mountains - Manodaya Homes homestay view'
					fill
					priority
					className='object-cover'
					sizes='100vw'
				/>
				{/* Elegant overlay */}
				<div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50'></div>
			</div>

			{/* Navigation */}
			<nav className='absolute top-0 left-0 right-0 z-50 px-6 lg:px-12 py-6'>
				<div className='container mx-auto flex items-center justify-between'>
					<div className='flex items-center gap-3'>
						<Image
							src='/images/logo-black.png'
							width={50}
							height={50}
							alt='Manodaya Homes Logo'
							className='brightness-0 invert'
						/>
						<span className='text-white font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide drop-shadow-md'>
							Manodaya Homes
						</span>
					</div>
					<Link
						href='#contact'
						className='hidden lg:block px-6 py-2.5 text-sm font-medium text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-300'>
						Book Your Stay
					</Link>
				</div>
			</nav>

			{/* Hero Content */}
			<div className='relative z-10 h-full flex items-center justify-center text-center px-6'>
				<div className='max-w-5xl mx-auto'>
					{/* Elegant Script-Style Heading */}
					<h1 className='text-white font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-light mb-4 sm:mb-6 leading-[0.9] tracking-tight px-2'>
						Manodaya
						<br />
						<span className='text-gold-400 font-normal italic'>
							Homes
						</span>
					</h1>

					{/* Subtitle */}
					<p className='text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light mb-8 sm:mb-10 md:mb-12 font-sans tracking-wide px-4'>
						Your Cozy Stay Nestled in the Himalayas
					</p>

					{/* CTA Button */}
					<Link href='#contact'>
						<button className='px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-medium text-charcoal-500 bg-gold-400 hover:bg-gold-500 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105'>
							Book Your Stay
						</button>
					</Link>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce'>
				<svg
					className='w-6 h-6 text-white/60'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M19 14l-7 7m0 0l-7-7m7 7V3'
					/>
				</svg>
			</div>
		</section>
	);
};

export default Hero;
