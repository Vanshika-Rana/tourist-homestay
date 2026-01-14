"use client";
import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiCalendar, FiUsers } from "react-icons/fi";

const BookingForm: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		checkIn: "",
		checkOut: "",
		guests: "",
		roomType: "",
		message: "",
	});

	const [errors, setErrors] = useState<Record<string, string>>({});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: "" }));
		}
	};

	const validateForm = () => {
		const newErrors: Record<string, string> = {};

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}
		if (!formData.phone.trim()) {
			newErrors.phone = "Phone number is required";
		} else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ""))) {
			newErrors.phone = "Please enter a valid 10-digit phone number";
		}
		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}
		if (!formData.checkIn) {
			newErrors.checkIn = "Check-in date is required";
		}
		if (!formData.checkOut) {
			newErrors.checkOut = "Check-out date is required";
		}
		if (formData.checkIn && formData.checkOut) {
			const checkInDate = new Date(formData.checkIn);
			const checkOutDate = new Date(formData.checkOut);
			if (checkOutDate <= checkInDate) {
				newErrors.checkOut =
					"Check-out date must be after check-in date";
			}
		}
		if (!formData.guests) {
			newErrors.guests = "Number of guests is required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const formatWhatsAppMessage = () => {
		const message = `🏠 *New Booking Request - Manodaya Homes*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Check-in Date:* ${formData.checkIn}
*Check-out Date:* ${formData.checkOut}
*Number of Guests:* ${formData.guests}
*Room Type:* ${formData.roomType || "Not specified"}
${formData.message ? `*Message:* ${formData.message}` : ""}

_This booking request was submitted from the Manodaya Homes website._`;

		return encodeURIComponent(message);
	};

	const formatEmailMessage = () => {
		const subject = encodeURIComponent(
			`New Booking Request - ${formData.name}`
		);
		const body = encodeURIComponent(
			`New Booking Request from Manodaya Homes Website

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Check-in Date: ${formData.checkIn}
Check-out Date: ${formData.checkOut}
Number of Guests: ${formData.guests}
Room Type: ${formData.roomType || "Not specified"}
${formData.message ? `Message: ${formData.message}` : ""}`
		);
		return { subject, body };
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		// Format WhatsApp message
		const whatsappMessage = formatWhatsAppMessage();
		const whatsappNumber = "917310554723"; // Your WhatsApp number
		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

		// Try to open WhatsApp
		window.open(whatsappUrl, "_blank");

		// Also provide email fallback
		const { subject, body } = formatEmailMessage();
		const emailUrl = `mailto:manodaya.homes@gmail.com?subject=${subject}&body=${body}`;

		// Show success message
		alert(
			"Form submitted! Opening WhatsApp...\n\nIf WhatsApp doesn't open, you can also send an email using the email button below."
		);

		// Reset form after a delay
		setTimeout(() => {
			setFormData({
				name: "",
				phone: "",
				email: "",
				checkIn: "",
				checkOut: "",
				guests: "",
				roomType: "",
				message: "",
			});
		}, 2000);
	};

	return (
		<section id='contact' className='py-20 lg:py-28 bg-sage-400'>
			<div className='container mx-auto px-6 lg:px-12'>
				<div className='max-w-4xl mx-auto'>
					{/* Section Header */}
					<div className='text-center mb-8 sm:mb-12 px-4'>
						<h2 className='font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3 sm:mb-4'>
							Book Your Stay
						</h2>
						<div className='w-24 h-0.5 bg-gold-400 mx-auto mb-4 sm:mb-6'></div>
						<p className='text-white/90 text-sm sm:text-base md:text-lg font-light'>
							Fill out the form below and we&apos;ll get back to
							you via WhatsApp
						</p>
					</div>

					{/* Contact Info */}
					<div className='flex flex-wrap items-start justify-start gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12'>
						{/* Phone */}
						<div className='flex items-start gap-2 sm:gap-3'>
							<div className='flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex-shrink-0 mt-0.5'>
								<FiPhone className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white' />
							</div>
							<div className='flex flex-col'>
								<p className='text-white/80 text-xs sm:text-sm mb-1'>
									Phone
								</p>
								<a
									href='tel:+919543765554'
									className='text-white font-medium hover:text-gold-400 transition-colors text-xs sm:text-sm leading-tight'>
									+91 9543765554
								</a>
								<a
									href='tel:+917310554723'
									className='text-white font-medium hover:text-gold-400 transition-colors text-xs sm:text-sm leading-tight'>
									+91 7310554723
								</a>
							</div>
						</div>

						{/* Divider */}
						<div className='hidden sm:block w-px h-12 bg-white/20'></div>

						{/* Email */}
						<div className='flex items-start gap-2 sm:gap-3'>
							<div className='flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex-shrink-0 mt-0.5'>
								<FiMail className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white' />
							</div>
							<div className='flex flex-col'>
								<p className='text-white/80 text-xs sm:text-sm mb-1'>
									Email
								</p>
								<a
									href='mailto:manodaya.homes@gmail.com'
									className='text-white font-medium hover:text-gold-400 transition-colors text-xs sm:text-sm leading-tight break-all'>
									manodaya.homes@gmail.com
								</a>
							</div>
						</div>

						{/* Divider */}
						<div className='hidden sm:block w-px h-12 bg-white/20'></div>

						{/* Location */}
						<div className='flex items-start gap-2 sm:gap-3'>
							<div className='flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex-shrink-0 mt-0.5'>
								<FiMapPin className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white' />
							</div>
							<div className='flex flex-col'>
								<p className='text-white/80 text-xs sm:text-sm mb-1'>
									Location
								</p>
								<p className='text-white font-medium text-xs sm:text-sm leading-tight'>
									Guptkashi, Uttarakhand
								</p>
							</div>
						</div>
					</div>

					{/* Booking Form */}
					<div className='bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12'>
						<form
							onSubmit={handleSubmit}
							className='space-y-4 sm:space-y-6'>
							{/* Name and Phone */}
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
								<div>
									<label
										htmlFor='name'
										className='block text-charcoal-600 font-medium mb-2'>
										Full Name *
									</label>
									<input
										type='text'
										id='name'
										name='name'
										value={formData.name}
										onChange={handleChange}
										className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400 transition-all ${
											errors.name
												? "border-red-300"
												: "border-cream-300"
										}`}
										placeholder='Enter your full name'
									/>
									{errors.name && (
										<p className='text-red-500 text-sm mt-1'>
											{errors.name}
										</p>
									)}
								</div>
								<div>
									<label
										htmlFor='phone'
										className='block text-charcoal-600 font-medium mb-2'>
										Phone Number *
									</label>
									<input
										type='tel'
										id='phone'
										name='phone'
										value={formData.phone}
										onChange={handleChange}
										className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400 transition-all ${
											errors.phone
												? "border-red-300"
												: "border-cream-300"
										}`}
										placeholder='10-digit phone number'
									/>
									{errors.phone && (
										<p className='text-red-500 text-sm mt-1'>
											{errors.phone}
										</p>
									)}
								</div>
							</div>

							{/* Email */}
							<div>
								<label
									htmlFor='email'
									className='block text-charcoal-600 font-medium mb-2'>
									Email Address *
								</label>
								<input
									type='email'
									id='email'
									name='email'
									value={formData.email}
									onChange={handleChange}
									className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400 transition-all ${
										errors.email
											? "border-red-300"
											: "border-cream-300"
									}`}
									placeholder='your.email@example.com'
								/>
								{errors.email && (
									<p className='text-red-500 text-sm mt-1'>
										{errors.email}
									</p>
								)}
							</div>

							{/* Check-in and Check-out */}
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
								<div>
									<label
										htmlFor='checkIn'
										className='block text-charcoal-600 font-medium mb-2'>
										<FiCalendar className='inline mr-2' />
										Check-in Date *
									</label>
									<input
										type='date'
										id='checkIn'
										name='checkIn'
										value={formData.checkIn}
										onChange={handleChange}
										min={
											new Date()
												.toISOString()
												.split("T")[0]
										}
										className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400 transition-all ${
											errors.checkIn
												? "border-red-300"
												: "border-cream-300"
										}`}
									/>
									{errors.checkIn && (
										<p className='text-red-500 text-sm mt-1'>
											{errors.checkIn}
										</p>
									)}
								</div>
								<div>
									<label
										htmlFor='checkOut'
										className='block text-charcoal-600 font-medium mb-2'>
										<FiCalendar className='inline mr-2' />
										Check-out Date *
									</label>
									<input
										type='date'
										id='checkOut'
										name='checkOut'
										value={formData.checkOut}
										onChange={handleChange}
										min={
											formData.checkIn ||
											new Date()
												.toISOString()
												.split("T")[0]
										}
										className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400 transition-all ${
											errors.checkOut
												? "border-red-300"
												: "border-cream-300"
										}`}
									/>
									{errors.checkOut && (
										<p className='text-red-500 text-sm mt-1'>
											{errors.checkOut}
										</p>
									)}
								</div>
							</div>

							{/* Guests and Room Type */}
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
								<div>
									<label
										htmlFor='guests'
										className='block text-charcoal-600 font-medium mb-2'>
										<FiUsers className='inline mr-2' />
										Number of Guests *
									</label>
									<input
										type='number'
										id='guests'
										name='guests'
										value={formData.guests}
										onChange={handleChange}
										min='1'
										max='10'
										className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400 transition-all ${
											errors.guests
												? "border-red-300"
												: "border-cream-300"
										}`}
										placeholder='Number of guests'
									/>
									{errors.guests && (
										<p className='text-red-500 text-sm mt-1'>
											{errors.guests}
										</p>
									)}
								</div>
								<div>
									<label
										htmlFor='roomType'
										className='block text-charcoal-600 font-medium mb-2'>
										Room Type
									</label>
									<select
										id='roomType'
										name='roomType'
										value={formData.roomType}
										onChange={handleChange}
										className='w-full px-4 py-3 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400 transition-all'>
										<option value=''>
											Select room type
										</option>
										<option value='Deluxe Room'>
											Deluxe Room
										</option>
										<option value='Family Room'>
											Family Room
										</option>
									</select>
								</div>
							</div>

							{/* Message */}
							<div>
								<label
									htmlFor='message'
									className='block text-charcoal-600 font-medium mb-2'>
									Additional Message / Special Requirements
								</label>
								<textarea
									id='message'
									name='message'
									value={formData.message}
									onChange={handleChange}
									rows={4}
									className='w-full px-4 py-3 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400 transition-all resize-none'
									placeholder='Any special requirements or questions...'
								/>
							</div>

							{/* Submit Button */}
							<div className='flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4'>
								<button
									type='submit'
									className='flex-1 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-charcoal-500 bg-gold-400 hover:bg-gold-500 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105'>
									Submit via WhatsApp
								</button>
								<a
									href={`mailto:manodaya.homes@gmail.com?subject=${encodeURIComponent(
										`Booking Request - ${
											formData.name || "Guest"
										}`
									)}&body=${encodeURIComponent(
										`Name: ${formData.name || ""}\nPhone: ${
											formData.phone || ""
										}\nEmail: ${
											formData.email || ""
										}\nCheck-in: ${
											formData.checkIn || ""
										}\nCheck-out: ${
											formData.checkOut || ""
										}\nGuests: ${
											formData.guests || ""
										}\nRoom Type: ${
											formData.roomType || ""
										}\nMessage: ${formData.message || ""}`
									)}`}
									className='px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-sage-500 hover:bg-sage-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center'>
									Or Send Email
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BookingForm;
