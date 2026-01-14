"use client";
import React from "react";
import { IoFastFoodOutline, IoWifiOutline } from "react-icons/io5";
import { GiMountainRoad } from "react-icons/gi";

const Services: React.FC = () => {
	const servicesData = [
		{
			id: 1,
			name: "Food & Snacks",
			description:
				"Delicious local Uttarakhand cuisine and continental dishes prepared with fresh ingredients. Experience authentic flavors during your homestay stay.",
			icon: <IoFastFoodOutline size={48} />,
		},
		{
			id: 2,
			name: "High-Speed WiFi",
			description:
				"Reliable internet connectivity throughout our Uttarakhand homestay. Stay connected while enjoying your mountain retreat.",
			icon: <IoWifiOutline size={48} />,
		},
		{
			id: 3,
			name: "Customized Tours",
			description:
				"Personalized Uttarakhand travel experiences and guided tours to Kedarnath and nearby attractions. Explore the best of Uttarakhand.",
			icon: <GiMountainRoad size={48} />,
		},
	];

	return (
		<section
			id='services'
			className='min-h-screen py-20 lg:py-28 bg-white relative overflow-hidden'>
			{/* Background elements */}
			<div className='absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl'></div>
			<div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-400/5 rounded-full blur-3xl'></div>

			<div className='relative z-10 container mx-auto px-6 lg:px-8'>
				{/* Header */}
				<div className='text-center mb-16'>
					<div className='inline-block mb-4'>
						<span className='text-primary-500 text-sm font-semibold uppercase tracking-wider'>
							Our Amenities
						</span>
					</div>
					<h2 className='text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 leading-tight text-gray-900'>
						Services at Our{" "}
						<span className='text-primary-500'>
							Uttarakhand Homestay
						</span>
					</h2>
					<p className='text-gray-600 text-lg md:text-xl max-w-3xl mx-auto'>
						Everything you need for a comfortable and memorable stay
						in Uttarakhand. Our homestay in Guptkashi offers premium
						amenities for your perfect Uttarakhand experience.
					</p>
				</div>

				{/* Services Grid */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
					{servicesData.map((service) => (
						<article
							key={service.id}
							className='group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500'>
							{/* Gradient background on hover */}
							<div className='absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

							<div className='relative p-8'>
								{/* Icon container */}
								<div className='flex items-center justify-center mb-6'>
									<div className='p-5 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg'>
										{service.icon}
									</div>
								</div>

								{/* Content */}
								<div>
									<h3 className='text-xl font-playfair font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors duration-300'>
										{service.name}
									</h3>
									<p className='text-gray-600 leading-relaxed text-sm'>
										{service.description}
									</p>
								</div>
							</div>

							{/* Decorative corner */}
							<div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full'></div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
