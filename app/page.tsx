import Hero from "@/components/Hero";
import About from "@/components/About";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {

	return (
		<main>
			<Navbar />
			<Hero bgImage="hero-img.jpg" />

			<About />
		</main>
	);
}
