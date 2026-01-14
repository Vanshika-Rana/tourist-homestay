import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
	return (
		<footer className='bg-charcoal-500 text-white py-12 px-6'>
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8'>
					{/* Logo and Description */}
					<div className='sm:col-span-2 lg:col-span-2'>
						<div className='flex items-center gap-3 mb-4'>
							<Image
								src='/images/logo-black.png'
								alt='Manodaya Homes Logo'
								width={50}
								height={50}
								className='brightness-0 invert'
							/>
							<span className='font-display text-2xl font-medium'>
								Manodaya Homes
							</span>
						</div>
						<p className='text-white/70 text-sm leading-relaxed mb-4 font-light'>
							Cozy homestay nestled in Uttarakhand&apos;s
							Kedarnath Valley. Experience the warmth of home,
							comfort, and authentic Himalayan hospitality.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='font-display text-lg font-medium mb-4'>
							Quick Links
						</h3>
						<nav className='flex flex-col gap-2'>
							<Link
								href='#about'
								className='text-white/70 hover:text-gold-400 text-sm transition-colors'>
								About Us
							</Link>
							<Link
								href='#rooms'
								className='text-white/70 hover:text-gold-400 text-sm transition-colors'>
								Rooms
							</Link>
							<Link
								href='#contact'
								className='text-white/70 hover:text-gold-400 text-sm transition-colors'>
								Contact
							</Link>
						</nav>
					</div>

					{/* Contact */}
					<div>
						<h3 className='font-display text-lg font-medium mb-4'>
							Contact
						</h3>
						<div className='space-y-2 text-sm text-white/70'>
							<p>Guptkashi, Uttarakhand</p>
							<a
								href='tel:+919543765554'
								className='block hover:text-gold-400 transition-colors'>
								+91 9543765554
							</a>
							<a
								href='mailto:manodaya.homes@gmail.com'
								className='block hover:text-gold-400 transition-colors'>
								manodaya.homes@gmail.com
							</a>
						</div>
					</div>
				</div>

				{/* Bottom */}
				<div className='border-t border-white/10 pt-8 text-center'>
					<p className='text-white/60 text-sm'>
						© {new Date().getFullYear()} Manodaya Homes. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
