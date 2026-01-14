"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GiHorizonRoad } from "react-icons/gi";
import { FaHelicopter } from "react-icons/fa";
import { MdSpa } from "react-icons/md";

const WhyChooseUs: React.FC = () => {
	const [activeTab, setActiveTab] = useState("history");

	const tabs = [
		{ id: "history", label: "History" },
		{ id: "location", label: "Location" },
		{ id: "amenities", label: "Amenities" },
	];

	const content = {
		history: {
			title: "Our Story",
			text: "We are a Pahadi family from Garhwal, born and raised in the beautiful village of Guptkashi (Hyun) in Kedarnath Valley. Manodaya Homes is a dream born from the love and passion of two generations who have called this village home for decades. When we decided to open this homestay, it was with a simple wish: to share the warmth of our mountains and the genuine hospitality that comes from the heart. This is our home, and we want you to feel at home too. Come, experience the Himalayas the way we have known it all our lives.",
			image: "/images/img1.jpeg",
		},
		location: {
			title: "Prime Location",
			text: "Located in Guptkashi, one of the most beautiful regions of Uttarakhand, our homestay provides comfortable accommodation with stunning mountain views. Just 2KM from Guptkashi Market and 10 meters from Guptkashi Helipad, making it perfect for both pilgrimage and exploration.",
			image: "/images/location.jpeg",
		},
		amenities: {
			title: "Home Comforts",
			text: "Enjoy all the comforts of home including WiFi, delicious home-cooked meals with local and continental options, and personalized tours. Our homestay offers everything you need for a cozy and memorable stay in the Himalayas.",
			image: "/images/amenities.jpeg",
		},
	};

	return (
		<section id='about' className='py-20 lg:py-28 bg-cream-200'>
			<div className='container mx-auto px-6 lg:px-12'>
				{/* Section Header */}
				<div className='text-center mb-12 sm:mb-16 px-4'>
					<h2 className='font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-charcoal-500 mb-3 sm:mb-4'>
						Why Choose Us
					</h2>
					<div className='w-24 h-0.5 bg-gold-400 mx-auto mb-4 sm:mb-6'></div>
					<p className='text-charcoal-400 text-base sm:text-lg max-w-2xl mx-auto font-light'>
						Experience the warmth of home in the heart of the
						mountains
					</p>
				</div>

				{/* Tab Buttons */}
				<div className='flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4'>
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-lg transition-all duration-300 ${
								activeTab === tab.id
									? "bg-sage-400 text-white shadow-lg"
									: "bg-white text-charcoal-500 hover:bg-sage-100 border border-sage-200"
							}`}>
							{tab.label}
						</button>
					))}
				</div>

				{/* Content Card */}
				<div className='max-w-6xl mx-auto'>
					<div className='bg-sage-400 rounded-3xl overflow-hidden shadow-2xl'>
						<div className='grid lg:grid-cols-2 gap-0'>
							{/* Image */}
							<div className='relative h-96 lg:h-auto'>
								<Image
									src={
										content[
											activeTab as keyof typeof content
										].image
									}
									alt={
										activeTab === "history"
											? "Manodaya Homes homestay in Guptkashi, Uttarakhand - A cozy family-run homestay in Kedarnath Valley"
											: activeTab === "location"
											? "Beautiful location of Manodaya Homes homestay in Guptkashi, Uttarakhand near Kedarnath Temple"
											: "Comfortable amenities and facilities at Manodaya Homes homestay in Uttarakhand"
									}
									fill
									className='object-cover'
									sizes='(max-width: 1024px) 100vw, 50vw'
								/>
							</div>

							{/* Text Content */}
							<div className='p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center bg-sage-400 text-white'>
								<h3 className='font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6'>
									{
										content[
											activeTab as keyof typeof content
										].title
									}
								</h3>
								<p className='text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 font-light'>
									{
										content[
											activeTab as keyof typeof content
										].text
									}
								</p>

								{/* Location Highlights */}
								{activeTab === "location" && (
									<div className='space-y-4'>
										<div className='flex items-center gap-4'>
											<div className='p-3 bg-white/20 rounded-lg'>
												<GiHorizonRoad
													size={24}
													className='text-white'
												/>
											</div>
											<div>
												<p className='font-medium'>
													2KM from Guptkashi Market
												</p>
												<p className='text-white/80 text-sm'>
													Easy access to local
													amenities
												</p>
											</div>
										</div>
										<div className='flex items-center gap-4'>
											<div className='p-3 bg-white/20 rounded-lg'>
												<FaHelicopter
													size={24}
													className='text-white'
												/>
											</div>
											<div>
												<p className='font-medium'>
													10m from Guptkashi Helipad
												</p>
												<p className='text-white/80 text-sm'>
													Convenient helicopter
													services
												</p>
											</div>
										</div>
									</div>
								)}

								{/* Amenities Highlights */}
								{activeTab === "amenities" && (
									<div className='grid grid-cols-1 gap-4'>
										<div className='flex items-center gap-4'>
											<MdSpa
												size={24}
												className='text-gold-400'
											/>
											<span className='text-white/90'>
												High-Speed WiFi
											</span>
										</div>
										<div className='flex items-center gap-4'>
											<MdSpa
												size={24}
												className='text-gold-400'
											/>
											<span className='text-white/90'>
												Food & Snacks
											</span>
										</div>
										<div className='flex items-center gap-4'>
											<MdSpa
												size={24}
												className='text-gold-400'
											/>
											<span className='text-white/90'>
												Customized Tours
											</span>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
