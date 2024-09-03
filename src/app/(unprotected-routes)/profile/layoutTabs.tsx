"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'

function LayoutTabs() {

	const [isFeed, setIsFeed] = useState(false);
	const [isFotos, setisFotos] = useState(false);
	const [isVideos, setisVideos] = useState(false);
	const [isSobre, setisSobre] = useState(false);;
	const [isLocalidade, setisLocalidade] = useState(false);
	const [isServicos, setisSevicos] = useState(false);
	const [isValores, setisValores] = useState(false);
	const pathname = usePathname()
	const companionId = pathname.split('/').pop();

	useEffect(() => {
		// if (pathname.includes('/profile/feed/')) {
		// 	setIsFeed(true);
		// 	setisFotos(false);
		// 	setisVideos(false);
		// 	setisSobre(false);
		// 	setisLocalidade(false);
		// 	setisSevicos(false);
		// 	setisValores(false);
		// }

		if (pathname.includes('/profile/fotos')) {
			setIsFeed(false);
			setisFotos(true);
			setisVideos(false);
			setisSobre(false);
			setisLocalidade(false);
			setisSevicos(false);
			setisValores(false);
		}
		if (pathname.includes('/profile/videos')) {
			setIsFeed(false);
			setisFotos(false);
			setisVideos(true);
			setisSobre(false);
			setisLocalidade(false);
			setisSevicos(false);
			setisValores(false);
		}
		if (pathname.includes('/profile/sobre')) {
			setIsFeed(false);
			setisFotos(false);
			setisVideos(false);
			setisSobre(true);
			setisLocalidade(false);
			setisSevicos(false);
			setisValores(false);
		}
		if (pathname.includes('/profile/localidade')) {
			setIsFeed(false);
			setisFotos(false);
			setisVideos(false);
			setisSobre(false);
			setisLocalidade(true);
			setisSevicos(false);
			setisValores(false);
		}
		if (pathname.includes('/profile/servicos')) {
			setIsFeed(false);
			setisFotos(false);
			setisVideos(false);
			setisSobre(false);
			setisLocalidade(false);
			setisSevicos(true);
			setisValores(false);
		}
		if (pathname.includes('/profile/valores')) {
			setIsFeed(false);
			setisFotos(false);
			setisVideos(false);
			setisSobre(false);
			setisLocalidade(false);
			setisSevicos(false);
			setisValores(true);
		}
	})

	return (
		<>
			<div className="card-footer mt-3 pt-2 pb-0">
				{/* Nav profile pages */}
				<ul className="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0">
					{/* <li className="nav-item">
						<Link
							href={"/profile/feed/" + companionId}
							className={`nav-link ${isFeed ? 'active' : ''} `}
							onClick={() => {
								setIsFeed(true);
								setisFotos(false);
								setisVideos(false);
								setisSobre(false);
								setisLocalidade(false);
								setisSevicos(false);
								setisValores(false);
							}}
						>
							Feed
						</Link>
					</li> */}
					<li className="nav-item">
						<Link
							href={"/profile/fotos/" + companionId}
							className={`nav-link ${isFotos ? 'active' : ''} `}
							onClick={() => {
								setIsFeed(false);
								setisFotos(true);
								setisVideos(false);
								setisSobre(false);
								setisLocalidade(false);
								setisSevicos(false);
								setisValores(false);
							}}
						>
							Fotos
						</Link>
					</li>
					<li className="nav-item">
						<Link
							href={"/profile/videos/" + companionId}
							className={`nav-link ${isVideos ? 'active' : ''} `}
							onClick={() => {
								setIsFeed(false);
								setisFotos(false);
								setisVideos(true);
								setisSobre(false);
								setisLocalidade(false);
								setisSevicos(false);
								setisValores(false);
							}}
						>
							Vídeos
						</Link>
					</li>
					<li className="nav-item">
						<Link
							href={"/profile/sobre/" + companionId}
							className={`nav-link ${isSobre ? 'active' : ''} `}
							onClick={() => {
								setIsFeed(false);
								setisFotos(false);
								setisVideos(false);
								setisSobre(true);
								setisLocalidade(false);
								setisSevicos(false);
								setisValores(false);
							}}
						>
							Sobre
						</Link>
					</li>
					<li className="nav-item">
						<Link
							href={"/profile/localidade/" + companionId}
							className={`nav-link ${isLocalidade ? 'active' : ''} `}
							onClick={() => {
								setIsFeed(false);
								setisFotos(false);
								setisVideos(false);
								setisSobre(false);
								setisLocalidade(true);
								setisSevicos(false);
								setisValores(false);
							}}
						>
							Localidade
						</Link>
					</li>
					<li className="nav-item">
						<Link
							href={"/profile/servicos/" + companionId}
							className={`nav-link ${isServicos ? 'active' : ''} `}
							onClick={() => {
								setIsFeed(false);
								setisFotos(false);
								setisVideos(false);
								setisSobre(false);
								setisLocalidade(false);
								setisSevicos(true);
								setisValores(false);
							}}
						>
							Serviços
						</Link>
					</li>
					<li className="nav-item">
						<Link
							href={"/profile/valores/" + companionId}
							className={`nav-link ${isValores ? 'active' : ''} `}
							onClick={() => {
								setIsFeed(false);
								setisFotos(false);
								setisVideos(false);
								setisSobre(false);
								setisLocalidade(false);
								setisSevicos(false);
								setisValores(true);
							}}
						>
							Valores
						</Link>
					</li>
				</ul>
			</div>
		</>
	)
}

export default LayoutTabs;