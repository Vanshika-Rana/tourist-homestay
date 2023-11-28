import Hero from "@/components/Hero";
import About from "@/components/About";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Rooms from "@/components/Rooms";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero bgImage='hero-img.jpg' />
			<About />
			<Rooms bgImage='hero-image.jpg' />
      <Services />
      <Footer/>
		</main>
	);
}
