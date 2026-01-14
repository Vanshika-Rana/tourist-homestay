"use client";
import React from "react";
import Link from "next/link";

const TourPackages: React.FC = () => {
	const packagesData = [
		{
			id: 1,
			name: "Kedarnath Yatra Package",
			duration: "3 Days",
			price: "Rs. 15,000",
			description:
				"Complete pilgrimage package to Kedarnath Temple from our Uttarakhand homestay. Includes accommodation, meals, and guided tour.",
		},
		{
			id: 2,
			name: "Uttarakhand Valley Explorer",
			duration: "5 Days",
			price: "Rs. 25,000",
			description:
				"Explore the beautiful valleys and scenic spots of Uttarakhand. Perfect for nature lovers and adventure seekers.",
		},
		{
			id: 3,
			name: "Mountain Adventure Package",
			duration: "4 Days",
			price: "Rs. 20,000",
			description:
				"Trekking and adventure activities in the mountains of Uttarakhand. Experience the thrill of the Himalayas.",
		},
	];

	return (
		<section
			id='packages'
			className='min-h-screen w-full bg-gray-900 relative overflow-hidden py-20 lg:py-28'>
			{/* Background elements */}
			<div className='absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl'></div>
			<div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-400/10 rounded-full blur-3xl'></div>

			<div className='relative z-10 container mx-auto px-6 lg:px-8'>
				{/* Header */}
				<div className='text-center mb-16'>
					<div className='inline-block mb-4'>
						<span className='text-primary-300 text-sm font-semibold uppercase tracking-wider'>
							Tour Packages
						</span>
					</div>
					<h2 className='text-white text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 leading-tight'>
						Uttarakhand{" "}
						<span className='text-primary-300'>Tour Packages</span>
					</h2>
					<p className='text-white/80 text-lg md:text-xl max-w-3xl mx-auto'>
						Explore our curated tour packages designed for an
						unforgettable Uttarakhand experience. From Kedarnath
						pilgrimage to mountain adventures, we have the perfect
						package for your stay.
					</p>
				</div>

				{/* Packages Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
					{packagesData.map((pkg) => (
						<article
							key={pkg.id}
							className='group relative bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500'>
							{/* Header section with gradient */}
							<div className='bg-gradient-to-br from-primary-500 to-primary-600 p-6'>
								<div className='flex items-start justify-between mb-3'>
									<h3 className='text-white text-xl font-playfair font-bold pr-2'>
										{pkg.name}
									</h3>
									<span className='text-white/80 text-xs font-semibold bg-white/20 px-3 py-1 rounded-full flex-shrink-0'>
										{pkg.duration}
									</span>
								</div>
								<p className='text-white/90 text-sm leading-relaxed'>
									{pkg.description}
								</p>
							</div>

							{/* Content section */}
							<div className='p-6 bg-white'>
								<div className='flex items-baseline justify-between mb-6'>
									<div>
										<p className='text-gray-500 text-xs mb-1 font-medium'>
											Starting from
										</p>
										<p className='text-gray-900 font-bold text-2xl'>
											{pkg.price}
										</p>
									</div>
								</div>

								<Link
									href='https://forms.gle/casY6rC2ig4Zugph6'
									target='_blank'
									aria-label={`Book ${pkg.name} package`}>
									<button className='w-full px-5 py-3 font-semibold text-base rounded-lg text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-md'>
										Book Package
									</button>
								</Link>
							</div>

							{/* Accent corner */}
							<div className='absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full'></div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default TourPackages;
