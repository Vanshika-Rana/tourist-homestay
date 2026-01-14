"use client";
import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Link from "next/link";

const Contact: React.FC = () => {
	return (
		<section
			id='contact'
			className='py-20 lg:py-28 bg-sage-400'>
			<div className='container mx-auto px-6 lg:px-12'>
				<div className='max-w-4xl mx-auto'>
					{/* Section Header */}
					<div className='text-center mb-12'>
						<h2 className='font-display text-5xl md:text-6xl font-light text-white mb-4'>
							Book Your Stay
						</h2>
						<div className='w-24 h-0.5 bg-gold-400 mx-auto mb-6'></div>
						<p className='text-white/90 text-lg font-light'>
							Come experience the warmth of home in the heart of the Himalayas
						</p>
					</div>

					{/* Contact Info */}
					<div className='grid md:grid-cols-3 gap-8 mb-12'>
						<div className='text-center'>
							<div className='inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4'>
								<FiPhone size={24} className='text-white' />
							</div>
							<p className='text-white/80 text-sm mb-2'>Phone</p>
							<a
								href='tel:+919543765554'
								className='text-white font-medium hover:text-gold-400 transition-colors'>
								+91 9543765554
							</a>
							<br />
							<a
								href='tel:+917310554723'
								className='text-white font-medium hover:text-gold-400 transition-colors'>
								+91 7310554723
							</a>
						</div>
						<div className='text-center'>
							<div className='inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4'>
								<FiMail size={24} className='text-white' />
							</div>
							<p className='text-white/80 text-sm mb-2'>Email</p>
							<a
								href='mailto:manodaya.homes@gmail.com'
								className='text-white font-medium hover:text-gold-400 transition-colors'>
								manodaya.homes@gmail.com
							</a>
						</div>
						<div className='text-center'>
							<div className='inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4'>
								<FiMapPin size={24} className='text-white' />
							</div>
							<p className='text-white/80 text-sm mb-2'>Location</p>
							<p className='text-white font-medium'>
								Guptkashi, Uttarakhand
							</p>
						</div>
					</div>

					{/* Booking CTA */}
					<div className='text-center'>
						<Link
							href='https://forms.gle/casY6rC2ig4Zugph6'
							target='_blank'>
							<button className='px-12 py-4 text-lg font-medium text-charcoal-500 bg-gold-400 hover:bg-gold-500 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105'>
								Book Your Stay
							</button>
						</Link>
						<p className='text-white/80 text-sm mt-4'>
							Or download our brochure for more information
						</p>
						<Link
							href='https://online.fliphtml5.com/obtmr/qeyo/'
							target='_blank'
							className='inline-block mt-2 text-white/90 hover:text-gold-400 underline text-sm transition-colors'>
							Download Brochure
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;

