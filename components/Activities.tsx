"use client";
import React from "react";
import Image from "next/image";
import { FaMountain, FaHiking, FaCamera } from "react-icons/fa";

const Activities: React.FC = () => {
	const activities = [
		{
			icon: <FaMountain size={28} />,
			title: "Mountain Exploration",
			description:
				"Discover the majestic peaks and scenic trails of the Himalayas",
			image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
		},
		{
			icon: <FaHiking size={28} />,
			title: "Guided Tours",
			description:
				"Customized tours to Kedarnath and nearby attractions",
			image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070",
		},
		{
			icon: <FaCamera size={28} />,
			title: "Photography",
			description:
				"Capture breathtaking moments in the heart of the Himalayas",
			image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070",
		},
	];

	return (
		<section className='py-20 lg:py-28 bg-sage-100'>
			<div className='container mx-auto px-6 lg:px-12'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<h2 className='font-display text-5xl md:text-6xl lg:text-7xl font-light text-charcoal-500 mb-4'>
						Experiences & Activities
					</h2>
					<div className='w-24 h-0.5 bg-gold-400 mx-auto mb-6'></div>
					<p className='text-charcoal-400 text-lg max-w-2xl mx-auto font-light'>
						Create beautiful memories in the heart of the Himalayas
					</p>
				</div>

				{/* Activities Grid */}
				<div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
					{activities.map((activity, index) => (
						<div
							key={index}
							className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'>
							{/* Image */}
							<div className='relative h-64 overflow-hidden'>
								<Image
									src={activity.image}
									alt={activity.title}
									fill
									className='object-cover group-hover:scale-110 transition-transform duration-700'
									sizes='(max-width: 768px) 100vw, 33vw'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-sage-400/80 to-transparent'></div>
								<div className='absolute top-6 left-6 text-white'>
									{activity.icon}
								</div>
							</div>

							{/* Content */}
							<div className='p-6'>
								<h3 className='font-display text-2xl font-medium text-charcoal-500 mb-3'>
									{activity.title}
								</h3>
								<p className='text-charcoal-600 leading-relaxed font-light'>
									{activity.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Activities;

