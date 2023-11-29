import React from "react";
import Image from "next/image";
interface RoomsProps {
	bgImage: string;
}

const Rooms: React.FC<RoomsProps> = ({ bgImage }) => {
	// Placeholder data for rooms
	const roomsData = [
		{
			id: 1,
			name: "Deluxe Room",
			beds: 1,
			bedType: "King Size",
			num: "3",
			price: "Rs. 3500",
			imageUrl: "/images/room1.jpeg",
		},
		{
			id: 2,
			name: "Family Room",
			beds: 2,
			bedType: "Queen Size",
			num: "2",
			price: "Rs. 5500",
			imageUrl: "/images/room2.jpeg",
		},
	];
	const backgroundStyle = {
		backgroundImage: `url(/images/${bgImage})`, // Adjust the path accordingly
	};
	const overlayStyle = {
		backgroundColor: "rgba(0, 0, 0, 0.8)", // Adjust the opacity (0.5) as needed
	};
	return (
		<div
			id='rooms'
			className='min-h-screen w-full bg-cover mt-12 bg-fixed bg-center bg-no-repeat  '
			style={backgroundStyle}>
			<div
				className=' w-full min-h-screen flex flex-col lg:flex-col justify-center items-center'
				style={overlayStyle}>
				<h2 className='z-10  text-white text-center text-5xl lg:text-7xl xl:text-8xl font-bold  mt-8'>
					Types Of Rooms
				</h2>
				<div className='flex flex-col lg:flex-row justify-center items-center mt-12'>
					{roomsData.map((room) => (
						<div
							key={room.id}
							className='m-8 bg-white rounded-md overflow-hidden shadow-lg'>
							<Image
								src={room.imageUrl}
								alt={room.name}
								width={500}
								height={500}
								className='w-full object-cover object-center'
							/>
							<div className='p-4'>
								<h3 className='text-3xl  font-bold mb-2'>
									{room.name}
								</h3>
								<p className='text-gray-600 font-light text-xl'>
									Beds: {room.beds}
								</p>
								<p className='text-gray-600 font-light text-xl'>
									Type of Bed: {room.bedType}
								</p>
								<p className='text-gray-600 font-light text-xl'>
									No. of Rooms: {room.num}
								</p>
								<p className='text-black font-semibold text-xl'>
									Price: {room.price} (Inc. Breakfast and Taxes)
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Rooms;
