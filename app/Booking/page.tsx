"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

const Booking = () => {
	const backgroundStyle = {
		backgroundImage: `url(/images/Book.jpg)`, // Adjust the path accordingly
	};
	const overlayStyle = {
		backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust the opacity (0.5) as needed
	};

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		room: "",
		package: "",
		message: "",
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Perform form submission logic here
		console.log(formData);
		// Reset form data after submission
		setFormData({
			name: "",
			email: "",
			room: "",
			package: "",
			message: "",
		});
	};

	return (
		<>
			<Navbar />
			<div
				className='min-h-screen w-full bg-cover  bg-fixed bg-center bg-no-repeat  '
				style={backgroundStyle}>
				<div
					className=' w-full min-h-screen flex flex-col lg:flex-col justify-center items-center'
					style={overlayStyle}>
					<form
						onSubmit={handleSubmit}
						className=' w-[70%] md:w-[50%] lg:w-[30%] p-8 bg-gray-200 rounded-md shadow-md'>
						<h2 className='text-2xl font-bold mb-4'>
							Booking Form
						</h2>

						<div className='mb-4'>
							<label
								className='block text-gray-800 text-sm font-semibold mb-2'
								htmlFor='name'>
								Name:
							</label>
							<input
								type='text'
								id='name'
								name='name'
								value={formData.name}
								onChange={handleChange}
								className='w-full px-3 py-2 border rounded-md'
								required
							/>
						</div>

						<div className='mb-4'>
							<label
								className='block text-gray-800 text-sm font-semibold mb-2'
								htmlFor='email'>
								Email:
							</label>
							<input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								className='w-full px-3 py-2 border rounded-md'
								required
							/>
						</div>

						<div className='mb-4'>
							<label
								className='block text-gray-800 text-sm font-semibold mb-2'
								htmlFor='room'>
								Choose a Room:
							</label>
							<select
								id='room'
								name='room'
								value={formData.room}
								onChange={handleChange}
								className='w-full px-3 py-2 border rounded-md'
								required>
								<option value=''>Select a Room</option>
								<option value='room1'>Room 1</option>
								<option value='room2'>Room 2</option>
							</select>
						</div>

						<div className='mb-4'>
							<label
								className='block text-gray-800 text-sm font-semibold mb-2'
								htmlFor='package'>
								Choose a Package:
							</label>
							<select
								id='package'
								name='package'
								value={formData.package}
								onChange={handleChange}
								className='w-full px-3 py-2 border rounded-md'
								required>
								<option value=''>Select a Package</option>
								<option value='package1'>Package 1</option>
								<option value='package2'>Package 2</option>
								<option value='package3'>Package 3</option>
								<option value='package4'>Package 4</option>
							</select>
						</div>

						<div className='mb-4'>
							<label
								className='block text-gray-800 text-sm font-semibold mb-2'
								htmlFor='message'>
								Message (Optional):
							</label>
							<textarea
								id='message'
								name='message'
								value={formData.message}
								onChange={handleChange}
								className='w-full px-3 py-2 border rounded-md'></textarea>
						</div>

						<button
							type='submit'
							className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>
							Submit
						</button>
					</form>
				</div>
			</div>
            <Footer/>
		</>
	);
};

export default Booking;
