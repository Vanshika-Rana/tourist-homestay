"use client";
import React from "react";
import Image from "next/image";

const Dining: React.FC = () => {
	return (
		<section className='py-20 lg:py-28 bg-white'>
			<div className='container mx-auto px-6 lg:px-12'>
				<div className='grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center max-w-6xl mx-auto'>
					{/* Image */}
					<div className='relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1'>
						<Image
							src='/images/cuisine.jpeg'
							alt='Delicious home-cooked meals featuring authentic Uttarakhand cuisine and continental dishes at Manodaya Homes homestay in Guptkashi'
							fill
							className='object-cover'
							sizes='(max-width: 1024px) 100vw, 50vw'
						/>
					</div>

					{/* Content */}
					<div className='order-1 lg:order-2'>
						<h2 className='font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-charcoal-500 mb-4 sm:mb-6'>
							Home-Cooked Meals
						</h2>
						<div className='w-24 h-0.5 bg-gold-400 mb-4 sm:mb-6'></div>
						<p className='text-charcoal-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 font-light'>
							Enjoy delicious home-cooked meals featuring authentic
							local Uttarakhand cuisine and continental dishes
							prepared with fresh, local ingredients. Our kitchen
							brings you the heartwarming flavors of the
							Himalayas, made with love and care.
						</p>
						<p className='text-charcoal-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-light'>
							Every meal feels like dining at home, with
							breathtaking mountain views and the warmth of
							Himalayan hospitality.
						</p>
						<div className='space-y-3'>
							<div className='flex items-center gap-3'>
								<div className='w-2 h-2 rounded-full bg-gold-400'></div>
								<span className='text-charcoal-600'>
									Local Uttarakhand Specialties
								</span>
							</div>
							<div className='flex items-center gap-3'>
								<div className='w-2 h-2 rounded-full bg-gold-400'></div>
								<span className='text-charcoal-600'>
									Continental Cuisine
								</span>
							</div>
							<div className='flex items-center gap-3'>
								<div className='w-2 h-2 rounded-full bg-gold-400'></div>
								<span className='text-charcoal-600'>
									Fresh, Locally Sourced Ingredients
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Dining;

