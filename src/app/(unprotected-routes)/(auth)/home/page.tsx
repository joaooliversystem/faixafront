"use client";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isMobile } from "react-device-detect";
import dynamic from 'next/dynamic';

function HomePage() {

	const router = useRouter();

	useEffect(() => {
		if (localStorage.getItem('search')) {
			localStorage.removeItem('search')
		}
	}, [])

	// Icons info 

	const iconsInfo = {
		instagram: 'https://www.instagram.com/faixa.rosa.br?igsh=cmdhcTVkM3FyZjNp',
		tiktok: 'https://www.tiktok.com/@faixa.rosa.br?_t=8lAQyHcuUKs&_r=1',
		youtube: 'https://youtube.com/@faixa.rosa.br.?si=QU2dXkgl1e3rkYn6',
		twitter: 'https://x.com/faixarosabr10?s=21',
		telegram: 'https://t.me/+NPqKr1BHnoYyZWNh',
		whatsapp: 'https://chat.whatsapp.com/JhN54ArwFFy73rjnXWwxUv'
	};

	const DynamicHome = dynamic(() => import('./Home'), {
		ssr: false
	})

	const DynamicHomeMobile = dynamic(() => import('./HomeMobile'), {
		ssr: false
	})

	// Icons styles

	const iconsStyle = {
		fontSize: "16px",
	}

	return (
		<>
			{!isMobile && (
				<DynamicHome />
			)}
			{isMobile && (
				<DynamicHomeMobile />
			)}
		</>
	);
}



export default HomePage;
