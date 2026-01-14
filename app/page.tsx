import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import PerfectPlace from "@/components/PerfectPlace";
import Rooms from "@/components/Rooms";
import Dining from "@/components/Dining";
import Video from "@/components/Video";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className='overflow-x-hidden' role='main'>
			<Hero bgImage='hero-img.png' />
			<WhyChooseUs />
			<PerfectPlace />
			<Rooms />
			<Dining />
			<Video />
			{/* <Testimonials /> */}
			<BookingForm />
			<Footer />
		</main>
	);
}
