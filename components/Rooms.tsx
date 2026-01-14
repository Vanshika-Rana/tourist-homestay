"use client";
import React from "react";
import Image from "next/image";

const Rooms: React.FC = () => {
	const roomsData = [
		{
			id: 1,
			name: "Deluxe Room",
			beds: 1,
			bedType: "King Size",
			num: "3",
			price: "Rs. 3,500",
			imageUrl: "/images/room1.jpeg",
			description: "Cozy deluxe room with beautiful mountain views",
			features: ["Mountain View", "King Size Bed", "Private Balcony"],
		},
		{
			id: 2,
			name: "Family Room",
			beds: 2,
			bedType: "Queen Size",
			num: "2",
			price: "Rs. 5,500",
			imageUrl: "/images/room2.jpeg",
			description: "Spacious family room perfect for groups",
			features: ["Family Friendly", "Two Beds", "Extra Space"],
		},
	];

	return (
		<section id='rooms' className='py-20 lg:py-28 bg-cream-200'>
			<div className='container mx-auto px-6 lg:px-12'>
				{/* Section Header */}
				<div className='text-center mb-12 sm:mb-16 px-4'>
					<h2 className='font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-charcoal-500 mb-3 sm:mb-4'>
						Our Cozy Rooms
					</h2>
					<div className='w-24 h-0.5 bg-gold-400 mx-auto mb-4 sm:mb-6'></div>
					<p className='text-charcoal-400 text-base sm:text-lg max-w-2xl mx-auto font-light'>
						Comfortable rooms designed to feel like home, with
						beautiful mountain views
					</p>
				</div>

				{/* Rooms Gallery */}
				<div className='grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12'>
					{roomsData.map((room) => (
						<div
							key={room.id}
							className='group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'>
							{/* Image */}
							<div className='relative h-80 overflow-hidden'>
								<Image
									src={room.imageUrl}
									alt={`${
										room.name
									} at Manodaya Homes homestay in Uttarakhand - ${
										room.description
									} with ${room.features
										.join(", ")
										.toLowerCase()}`}
									fill
									className='object-cover group-hover:scale-110 transition-transform duration-700'
									sizes='(max-width: 1024px) 100vw, 50vw'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-charcoal-500/70 via-charcoal-500/20 to-transparent'></div>
								<div className='absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6'>
									<h3 className='font-display text-xl sm:text-2xl md:text-3xl text-white mb-1 sm:mb-2 font-medium'>
										{room.name}
									</h3>
									<p className='text-white/90 text-xs sm:text-sm'>
										{room.description}
									</p>
								</div>
							</div>

							{/* Content */}
							<div className='p-6 sm:p-8'>
								<div className='grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-cream-300'>
									<div>
										<p className='text-charcoal-400 text-xs mb-1 font-medium'>
											Beds
										</p>
										<p className='text-charcoal-500 font-semibold text-base sm:text-lg'>
											{room.beds}
										</p>
									</div>
									<div>
										<p className='text-charcoal-400 text-xs mb-1 font-medium'>
											Bed Type
										</p>
										<p className='text-charcoal-500 font-semibold text-sm sm:text-base'>
											{room.bedType}
										</p>
									</div>
									<div>
										<p className='text-charcoal-400 text-xs mb-1 font-medium'>
											Available
										</p>
										<p className='text-charcoal-500 font-semibold text-base sm:text-lg'>
											{room.num}
										</p>
									</div>
								</div>

								<div className='flex items-center justify-between'>
									<div>
										<p className='text-charcoal-400 text-xs mb-1 font-medium'>
											Starting from
										</p>
										<p className='text-charcoal-500 font-bold text-2xl'>
											{room.price}
										</p>
										<p className='text-charcoal-400 text-xs mt-1'>
											Includes Home-Cooked Breakfast &
											Taxes
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Rooms;
