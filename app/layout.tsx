import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-montserrat",
});

const cormorant = Cormorant_Garamond({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-cormorant",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://tourist-homestay.vercel.app"),
	title: {
		default:
			"Manodaya Homes | Cozy Homestay in Uttarakhand | Kedarnath Valley",
		template: "%s | Manodaya Homes",
	},
	description:
		"Experience the warmth of home at Manodaya Homes, a cozy homestay nestled in Uttarakhand's Kedarnath Valley near Guptkashi. Comfortable rooms, delicious home-cooked meals, and authentic Himalayan hospitality. Perfect for families, pilgrims visiting Kedarnath Temple, and trekkers exploring the Himalayas.",
	keywords: [
		"homestay uttarakhand",
		"uttarakhand homestay",
		"cozy homestay kedarnath",
		"homestay guptkashi",
		"himalayan homestay",
		"manodaya homes",
		"kedarnath valley homestay",
		"uttarakhand stay",
		"homestay near kedarnath",
		"guptkashi homestay",
		"himalayan accommodation",
		"uttarakhand family homestay",
		"kedarnath temple stay",
		"himalayan retreat",
		"mountain homestay uttarakhand",
		"pahadi homestay",
		"garhwal homestay",
		"uttarakhand tourism",
		"himalayan hospitality",
		"cozy mountain stay",
		"uttarakhand bed and breakfast",
		"himalayan family stay",
		"kedarnath pilgrimage stay",
		"uttarakhand vacation rental",
	],
	authors: [{ name: "Manodaya Homes" }],
	creator: "Manodaya Homes",
	publisher: "Manodaya Homes",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Manodaya Homes | Cozy Homestay in Uttarakhand | Kedarnath Valley",
		description:
			"Experience the warmth of home in the Himalayas. Comfortable accommodation, home-cooked meals, and authentic Himalayan hospitality at Manodaya Homes in Guptkashi, Uttarakhand.",
		url: "https://tourist-homestay.vercel.app",
		siteName: "Manodaya Homes",
		images: [
			{
				url: "/images/hero-image.jpg",
				width: 1200,
				height: 630,
				alt: "Manodaya Homes - Cozy Homestay in Uttarakhand's Kedarnath Valley",
			},
		],
		locale: "en_IN",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Manodaya Homes | Cozy Homestay in Uttarakhand",
		description:
			"Experience the warmth of home in the Himalayas. Comfortable accommodation, home-cooked meals, and authentic Himalayan hospitality.",
		images: ["/images/hero-image.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: [
			{ url: "/images/logo-black.png", type: "image/png" },
			{
				url: "/images/logo-black.png",
				sizes: "32x32",
				type: "image/png",
			},
			{
				url: "/images/logo-black.png",
				sizes: "16x16",
				type: "image/png",
			},
		],
		apple: [
			{
				url: "/images/logo-black.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
		shortcut: "/images/logo-black.png",
	},
	verification: {
		google: undefined,
	},
	category: "Travel & Tourism",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='scroll-smooth'>
			<head>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "LodgingBusiness",
							"@id": "https://tourist-homestay.vercel.app/#lodging",
							name: "Manodaya Homes",
							alternateName: "Manodaya Homes Homestay",
							description:
								"Cozy homestay in Uttarakhand, Guptkashi near Kedarnath offering warm hospitality, comfortable accommodation, home-cooked meals, and authentic Himalayan experiences. Perfect for families, pilgrims, and trekkers.",
							url: "https://tourist-homestay.vercel.app",
							logo: "https://tourist-homestay.vercel.app/images/logo-black.png",
							image: "https://tourist-homestay.vercel.app/images/hero-image.jpg",
							address: {
								"@type": "PostalAddress",
								streetAddress: "Guptkashi (Hyun)",
								addressLocality: "Guptkashi",
								addressRegion: "Uttarakhand",
								postalCode: "246439",
								addressCountry: "IN",
							},
							geo: {
								"@type": "GeoCoordinates",
								latitude: "30.5333",
								longitude: "79.0667",
							},
							telephone: ["+91-9543765554", "+91-7310554723"],
							email: "manodaya.homes@gmail.com",
							priceRange: "₹₹",
							starRating: {
								"@type": "Rating",
								ratingValue: "5",
							},
							amenityFeature: [
								{
									"@type": "LocationFeatureSpecification",
									name: "WiFi",
									value: true,
								},
								{
									"@type": "LocationFeatureSpecification",
									name: "Home-Cooked Meals",
									value: true,
								},
								{
									"@type": "LocationFeatureSpecification",
									name: "Mountain View",
									value: true,
								},
								{
									"@type": "LocationFeatureSpecification",
									name: "Personalized Tours",
									value: true,
								},
							],
							checkinTime: "14:00",
							checkoutTime: "11:00",
							numberOfRooms: {
								"@type": "QuantitativeValue",
								value: "5",
							},
							areaServed: {
								"@type": "Country",
								name: "India",
							},
							sameAs: [],
						}),
					}}
				/>
				<link
					rel='icon'
					href='/images/logo-black.png'
					type='image/png'
				/>
				<link
					rel='shortcut icon'
					href='/images/logo-black.png'
					type='image/png'
				/>
				<link rel='apple-touch-icon' href='/images/logo-black.png' />
			</head>
			<body
				className={`${montserrat.variable} ${cormorant.variable} font-sans bg-cream-200 text-charcoal-500 antialiased`}>
				{children}
			</body>
		</html>
	);
}
