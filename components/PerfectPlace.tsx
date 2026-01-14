"use client";
import React from "react";
import Image from "next/image";
import { FaHome, FaMountain, FaHiking } from "react-icons/fa";

const PerfectPlace: React.FC = () => {
	const cards = [
		{
			id: 1,
			icon: <FaHome size={32} />,
			title: "For Families Looking for a Getaway",
			description:
				"Spacious family rooms and a safe, welcoming environment perfect for creating beautiful memories together in the mountains.",
			features: [
				"Family-friendly rooms",
				"Safe and peaceful surroundings",
				"Kid-friendly home-cooked meals",
				"Perfect for quality family time",
			],
			image: "/images/family.jpg",
		},
		{
			id: 2,
			icon: <FaMountain size={32} />,
			title: "For Pilgrims Visiting Sacred Temples",
			description:
				"A peaceful base for your spiritual journey to Kedarnath, Tungnath, and other sacred temples of Uttarakhand. Experience the divine in comfort.",
			features: [
				"Perfect location for temple visits",
				"Comfortable stay after long journeys",
				"Home-cooked vegetarian meals",
				"Warm hospitality for pilgrims",
			],
			image: "/images/pilgrim.jpg",
		},
		{
			id: 3,
			icon: <FaHiking size={32} />,
			title: "For Trekkers & Adventure Seekers",
			description:
				"Your comfortable base camp for exploring the mighty Himalayas. Perfect for groups planning treks, climbs, and mountain adventures.",
			features: [
				"Ideal base for trekking expeditions",
				"Group accommodation available",
				"Expert local guidance",
				"Rest and recharge after adventures",
			],
			image: "/images/trek.jpg",
		},
	];

	return (
		<section className='py-20 lg:py-28 bg-white'>
			<div className='container mx-auto px-6 lg:px-12'>
				{/* Section Header */}
				<div className='text-center mb-12 sm:mb-16 px-4'>
					<h2 className='font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-charcoal-500 mb-3 sm:mb-4'>
						Perfect Place for Every Guest
					</h2>
					<div className='w-24 h-0.5 bg-gold-400 mx-auto mb-4 sm:mb-6'></div>
					<p className='text-charcoal-400 text-base sm:text-lg max-w-2xl mx-auto font-light'>
						A welcoming space for every kind of guest
					</p>
				</div>

				{/* Cards Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto'>
					{cards.map((card) => (
						<div
							key={card.id}
							className='group bg-cream-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'>
							{/* Image */}
							<div className='relative h-64 overflow-hidden'>
								<Image
									src={card.image}
									alt={`${
										card.title
									} - Manodaya Homes homestay in Uttarakhand offers ${card.description.toLowerCase()}`}
									fill
									className='object-cover group-hover:scale-110 transition-transform duration-700'
									sizes='(max-width: 768px) 100vw, 33vw'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-charcoal-500/60 to-transparent'></div>
								<div className='absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white'>
									<div className='mb-1 sm:mb-2'>
										{card.icon}
									</div>
									<h3 className='font-display text-lg sm:text-xl md:text-2xl font-medium'>
										{card.title}
									</h3>
								</div>
							</div>

							{/* Content */}
							<div className='p-6 sm:p-8'>
								<p className='text-charcoal-600 mb-4 sm:mb-6 leading-relaxed font-light text-sm sm:text-base'>
									{card.description}
								</p>
								<ul className='space-y-2 sm:space-y-3'>
									{card.features.map((feature, index) => (
										<li
											key={index}
											className='flex items-center gap-2 sm:gap-3 text-charcoal-500'>
											<div className='w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0'></div>
											<span className='text-xs sm:text-sm'>
												{feature}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default PerfectPlace;
