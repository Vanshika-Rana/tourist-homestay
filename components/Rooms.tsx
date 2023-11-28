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
			name: "Standard Room",
			beds: 1,
            bedType: "King Size",
            num: "2",
			imageUrl: "/images/hero-img.jpg",
		},
		{
			id: 2,
			name: "Deluxe Room",
			beds: 2,
            bedType:"Queen Size",
            num:"2",
			imageUrl: "/images/hero-img.jpg",
		},
	];
	const backgroundStyle = {
		backgroundImage: `url(/images/${bgImage})`, // Adjust the path accordingly
	};
	const overlayStyle = {
		backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust the opacity (0.5) as needed
	};
	return (
		<div
			className='min-h-screen w-full bg-cover bg-fixed bg-center bg-no-repeat  '
			style={backgroundStyle}>
			<div
				className=' w-full min-h-screen flex flex-col lg:flex-col justify-center items-center'
				style={overlayStyle}>
				<h2 className='z-10  text-white text-center text-5xl lg:text-7xl xl:text-8xl font-bold  uppercase mt-8'>
					Available Rooms
				</h2>
                <div className="flex flex-col lg:flex-row justify-center items-center mt-12">
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
							<h3 className='text-3xl font-semibold mb-2'>
								{room.name}
							</h3>
							<p className='text-gray-600 text-xl'>Beds: {room.beds}</p>
                            <p className='text-gray-600 text-xl'>Type of Bed: {room.bedType}</p>
                            <p className='text-gray-600 text-xl'>No. of Rooms: {room.num}</p>
						</div>
					</div>
				))}
                </div>
			</div>
		</div>
	);
};

export default Rooms;
