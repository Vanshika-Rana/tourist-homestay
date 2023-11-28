import React from "react";
import {
	IoFastFoodOutline,
	IoWifiOutline,

} from "react-icons/io5";

import { GiMountainRoad } from "react-icons/gi";

const Services: React.FC = () => {
	// Placeholder data for services
	const servicesData = [
		{
			id: 1,
			name: "Food & Snacks",
			icon: <IoFastFoodOutline size={40} />,
		},
		{
			id: 2,
			name: "WiFi",
			icon: <IoWifiOutline size={40} />,
		},
		{
			id: 3,
			name: "Customized Tours",
			icon: <GiMountainRoad size={40} />,
		},
	];

	return (
		<div id="services" className='border-2  mb-4 '>
			<h2 className='z-10 mt-16 text-red-400 text-center text-5xl lg:text-7xl xl:text-8xl font-bold '>
				Services
			</h2>
			<div className='p-12  grid grid-cols-1 md:grid-cols-3 gap-4'>
				{servicesData.map((service) => (
					<div
						key={service.id}
						className='bg-white rounded-xl border-2 border-red-400 overflow-hidden shadow-xl'>
						<div className='flex items-center justify-center p-4'>
							{service.icon}
						</div>
						<div className='p-4 text-center'>
							<h3 className='text-xl font-semibold mb-2'>
								{service.name}
							</h3>
							
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
