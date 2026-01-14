"use client";
import React from "react";
import Image from "next/image";
import { GiHorizonRoad } from "react-icons/gi";
import { FaHelicopter } from "react-icons/fa";

const About: React.FC = () => {
	return (
		<section
			id='about'
			className='min-h-screen w-full bg-white relative overflow-hidden py-20 lg:py-28'>
			<div className='container mx-auto px-6 lg:px-8'>
				<div className='max-w-7xl mx-auto'>
					{/* Section Header */}
					<div className='text-center mb-16'>
						<div className='mb-4 inline-block'>
							<span className='text-primary-500 text-sm font-semibold uppercase tracking-wider'>
								About Our Homestay
							</span>
						</div>
						<h2 className='text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 leading-tight text-gray-900'>
							Discover Serenity in{" "}
							<span className='text-primary-500'>
								Uttarakhand
							</span>
						</h2>
						<p className='text-gray-600 text-lg max-w-3xl mx-auto'>
							Experience the best homestay in Uttarakhand at
							Manodaya Homes, nestled in the tranquility of
							Kedarnath Valley, Guptkashi
						</p>
					</div>

					<div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20'>
						{/* Left side - Large image */}
						<div className='relative group order-2 lg:order-1'>
							<div className='absolute -inset-4 bg-gradient-to-r from-primary-400 to-primary-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-500'></div>
							<div className='relative'>
								<Image
									src='/images/img1.jpeg'
									alt='Manodaya Homes homestay in Uttarakhand - Scenic mountain view from Guptkashi'
									className='rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500 w-full h-[450px] object-cover'
									width={800}
									height={600}
									priority
								/>
							</div>
						</div>

						{/* Right side - Content */}
						<div className='order-1 lg:order-2'>
							<h3 className='text-3xl md:text-4xl font-playfair font-bold mb-6 text-gray-900'>
								Your Perfect Uttarakhand Stay
							</h3>
							<p className='text-gray-700 leading-relaxed text-base md:text-lg mb-8'>
								Discover serenity at Manodaya Homes, nestled in
								the tranquility of Kedarnath Valley. Our
								Uttarakhand homestay offers lush green hills,
								snow-covered peaks, and a perfect stop enroute
								to Kedarnath. Enjoy a peaceful getaway with a
								cup of tea in hand – your home away from home in
								the heart of nature&apos;s beauty.
							</p>
							<p className='text-gray-700 leading-relaxed text-base md:text-lg mb-8'>
								Located in Guptkashi, one of the most beautiful
								regions of Uttarakhand, our homestay provides
								comfortable accommodation with stunning mountain
								views. Whether you&apos;re visiting for
								pilgrimage or exploring the natural beauty of
								Uttarakhand, Manodaya Homes is your ideal base.
							</p>

							{/* Highlights */}
							<div className='space-y-4'>
								<div className='flex items-start group'>
									<div className='p-3 bg-primary-500 rounded-lg shadow-md group-hover:bg-primary-600 transition-all duration-300 transform group-hover:scale-105 mr-4 flex-shrink-0'>
										<GiHorizonRoad
											size={24}
											className='text-white'
											aria-hidden='true'
										/>
									</div>
									<div>
										<h4 className='text-gray-900 font-semibold text-lg mb-1'>
											2KM from Guptkashi Market
										</h4>
										<p className='text-gray-600 text-sm'>
											Easy access to local markets,
											restaurants, and amenities in
											Guptkashi, Uttarakhand
										</p>
									</div>
								</div>
								<div className='flex items-start group'>
									<div className='p-3 bg-primary-500 rounded-lg shadow-md group-hover:bg-primary-600 transition-all duration-300 transform group-hover:scale-105 mr-4 flex-shrink-0'>
										<FaHelicopter
											size={24}
											className='text-white'
											aria-hidden='true'
										/>
									</div>
									<div>
										<h4 className='text-gray-900 font-semibold text-lg mb-1'>
											10 m from Guptkashi Helipad
										</h4>
										<p className='text-gray-600 text-sm'>
											Convenient for helicopter services
											to Kedarnath and other Uttarakhand
											destinations
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Second image section */}
					<div className='relative group max-w-5xl mx-auto'>
						<div className='absolute -inset-4 bg-gradient-to-r from-primary-400 to-primary-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-500'></div>
						<div className='relative'>
							<Image
								src='/images/img2.jpeg'
								alt='Beautiful landscape view from Manodaya Homes homestay in Kedarnath Valley, Uttarakhand'
								className='rounded-2xl shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-500 w-full h-[400px] object-cover'
								width={1200}
								height={500}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
