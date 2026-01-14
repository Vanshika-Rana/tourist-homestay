"use client";
import React from "react";

const Video: React.FC = () => {
	return (
		<section id='video' className='py-20 lg:py-28 bg-white'>
			<div className='container mx-auto px-6 lg:px-12'>
				<div className='max-w-6xl mx-auto'>
					{/* Section Header */}
					<div className='text-center mb-12 sm:mb-16 px-4'>
						<h2 className='font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-charcoal-500 mb-3 sm:mb-4'>
							Experience Our Homestay
						</h2>
						<div className='w-24 h-0.5 bg-gold-400 mx-auto mb-4 sm:mb-6'></div>
						<p className='text-charcoal-400 text-base sm:text-lg max-w-2xl mx-auto font-light'>
							Take a virtual tour and see what makes Manodaya
							Homes special
						</p>
					</div>

					{/* Video Container */}
					<div className='relative group'>
						<div className='absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-sage-400/20 to-gold-400/20 rounded-2xl sm:rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500'></div>
						<div className='relative bg-charcoal-500 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl p-1 sm:p-2'>
							<div className='aspect-video w-full rounded-lg sm:rounded-xl overflow-hidden'>
								<iframe
									width='100%'
									height='100%'
									src='https://www.youtube.com/embed/q-NyPr01gu0?si=wOsSf4n-rEn7VwAn'
									title='YouTube video player - Manodaya Homes Virtual Tour'
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
									referrerPolicy='strict-origin-when-cross-origin'
									allowFullScreen
									className='w-full h-full rounded-xl'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Video;
