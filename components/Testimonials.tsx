"use client";
import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials: React.FC = () => {
	const testimonials = [
		{
			name: "Rajesh Kumar",
			location: "Delhi",
			rating: 5,
			text: "An absolutely wonderful stay! The rooms were comfortable, the food was delicious, and the mountain views were breathtaking. Perfect for our family vacation.",
		},
		{
			name: "Priya Sharma",
			location: "Mumbai",
			rating: 5,
			text: "Manodaya Homes exceeded all expectations. The hospitality was exceptional, and the location near Kedarnath made our pilgrimage journey smooth and memorable.",
		},
		{
			name: "Amit Patel",
			location: "Ahmedabad",
			rating: 5,
			text: "Best homestay experience in Uttarakhand! Clean rooms, great amenities, and the staff went above and beyond to make our stay comfortable. Highly recommended!",
		},
	];

	return (
		<section className='py-20 lg:py-28 bg-cream-200'>
			<div className='container mx-auto px-6 lg:px-12'>
				{/* Section Header */}
				<div className='text-center mb-12 sm:mb-16 px-4'>
					<h2 className='font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-charcoal-500 mb-3 sm:mb-4'>
						What Our Guests Say
					</h2>
					<div className='w-24 h-0.5 bg-gold-400 mx-auto mb-4 sm:mb-6'></div>
					<p className='text-charcoal-400 text-base sm:text-lg max-w-2xl mx-auto font-light'>
						Real experiences from our valued guests
					</p>
				</div>

				{/* Testimonials Grid */}
				<div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300'>
							{/* Rating */}
							<div className='flex gap-1 mb-4'>
								{[...Array(testimonial.rating)].map((_, i) => (
									<FaStar
										key={i}
										className='text-gold-400'
										size={20}
									/>
								))}
							</div>

							{/* Text */}
							<p className='text-charcoal-600 leading-relaxed mb-6 font-light italic'>
								&ldquo;{testimonial.text}&rdquo;
							</p>

							{/* Author */}
							<div className='border-t border-cream-300 pt-4'>
								<p className='font-semibold text-charcoal-500'>
									{testimonial.name}
								</p>
								<p className='text-charcoal-400 text-sm'>
									{testimonial.location}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;

