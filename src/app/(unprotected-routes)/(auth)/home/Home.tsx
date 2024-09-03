"use client";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import { useRef, useState, useEffect, useMemo, } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Session } from "inspector";
import { DefaultUser } from "next-auth";
import CompleteProfileModal from "./homeComponents/completeProfileModal";
function Home() {

	const router = useRouter();
	const inputRef = useRef<HTMLInputElement>(null);
	const pathname = usePathname();
	const [search, setSearch] = useState<string>('');
	const [CompanionsImgs, setCompanionsImgs] = useState<any>([]);
	const [displayAgeCard, setDisplayAgeCard] = useState<boolean>(true);
	const [displayCompleteProfileModal, setDisplayCompleteProfileModal] = useState<boolean>(false);
	const apiUrl = 'https://apifaixarosalin.azurewebsites.net/api/companion/featured-home'
	const { data: session } = useSession();
	const newSessionDeepCopy = JSON.parse(JSON.stringify(session || {}));

	useEffect(() => {

		if (newSessionDeepCopy?.user?.status !== 'ready') {
			console.log(newSessionDeepCopy?.user?.status);
			setDisplayCompleteProfileModal(true)
		}
	}, [newSessionDeepCopy])

	useEffect(() => {

		HomeFeaturedCompanions();

		if (localStorage.getItem('18yo')) {
			setDisplayAgeCard(false)
		} else {
			setDisplayAgeCard(true)
		}

		if (displayAgeCard || displayCompleteProfileModal) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};

	}, [displayAgeCard, displayCompleteProfileModal]);

	// Clear localStorage when accessing home page

	useEffect(() => {
		if (localStorage.getItem('search')) {
			localStorage.removeItem('search')
		}
	}, [])

	useEffect(() => {

		// Clean input field before going to search results page

		if (pathname.includes('/profile')) {
			if (inputRef.current) {
				inputRef.current.value = '';
			}
		}

		if (pathname.includes('/search')) {
			if (inputRef.current) {
				inputRef.current.value = '';
				setSearch('');
			}
		}

	}, [pathname])

	// Get featured companions images from API

	async function HomeFeaturedCompanions() {
		try {
			const response = await fetch(
				apiUrl,
				{
					method: 'GET',
					headers: {
						'Accept': 'text/plain'
					}
				});
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const dataJson = await response.text();
			const data = JSON.parse(dataJson);
			const featuredCompanionsArray = data.featuredCompanions['$values'];
			const featuredCompanionsImgs = featuredCompanionsArray.map((item: any) => item.url);
			setCompanionsImgs(featuredCompanionsImgs)

		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};


	// Icons info 

	const iconsInfo = {
		instagram: 'https://www.instagram.com/faixa.rosa.br?igsh=cmdhcTVkM3FyZjNp',
		tiktok: 'https://www.tiktok.com/@faixa.rosa.br?_t=8lAQyHcuUKs&_r=1',
		youtube: 'https://youtube.com/@faixa.rosa.br.?si=QU2dXkgl1e3rkYn6',
		twitter: 'https://x.com/faixarosabr10?s=21',
		telegram: 'https://t.me/+NPqKr1BHnoYyZWNh',
		whatsapp: 'https://chat.whatsapp.com/JhN54ArwFFy73rjnXWwxUv'
	};

	// Icons styles

	const iconsStyle = {
		fontSize: "16px",
	}

	// Handle user search
	const HandleKeyPress = (e: any) => {

		e.preventDefault();

		// Setting the search value in local storage

		localStorage.setItem('search', search);

		router.replace('/search');

	};

	// 18 years old warning card

	function AgeCard() {

		function esconderAvisos() {
			const aviso1 = document.getElementById('aviso1');
			const aviso2 = document.getElementById('aviso2');
			if (aviso1) aviso1.style.display = 'none';
			if (aviso2) aviso2.style.display = 'none';
		}

		return (
			<>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: 'rgba(0, 0, 0, 0.9)',
						overflowX: 'hidden',
						flexDirection: 'column',
						zIndex: '2',
						position: 'fixed',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						padding: '20px 20px 0px 20px',
						borderRadius: '10px',
					}}
				>
					<div
						className="aviso"
						id="aviso1"
						style={{
							position: 'relative',
							maxWidth: '100%',
							width: '400px',
							textAlign: 'center',
							boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
							borderRadius: '8px',
							padding: '16px',
							marginBottom: '20px',
						}}
					>
						<img
							src="files/images/Card18-dark.png"
							alt="Aviso do Site"
							style={{ maxWidth: '100%', height: 'auto' }}
						/>
						<button
							style={{
								position: 'absolute',
								top: '89%',
								left: '50%',
								transform: 'translate(-50%, -50%)',
								padding: '10px 20px',
								backgroundColor: '#D33B77',
								border: 'none',
								cursor: 'pointer',
								zIndex: '3',
								color: '#000000',
								fontWeight: 'bold',
								width: '190px',
								borderRadius: '10px',
								height: '40px',
							}}
							onClick={() => {
								setDisplayAgeCard(false);
								localStorage.setItem('18yo', 'true');
							}}
						>
							CONCORDO
						</button>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			{displayAgeCard &&
				<>
					<div
						style={{
							position: 'fixed',
							top: '0',
							left: '0',
							width: '100%',
							height: '100%',
							backgroundColor: 'rgba(0, 0, 0, 0.9)',
							zIndex: '1',
						}}
					></div>
					<AgeCard />
				</>
			}
			{displayCompleteProfileModal &&
				<>
					<div
						style={{
							position: 'fixed',
							top: '0',
							left: '0',
							width: '100%',
							height: '100%',
							backgroundColor: 'rgba(0, 0, 0, 0.9)',
							zIndex: '1',
						}}
					></div>
					<CompleteProfileModal
						setDisplayCompleteProfileModal={setDisplayCompleteProfileModal}
						session={session}
					/>
				</>
			}
			<section
				style={{
					backgroundImage: "url(files/images/banner_home.jpg)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "top center",
					height: "300px",
				}}
				className="d-flex align-items-center justify-content-center"
			>
				<h1
					style={{
						fontSize: "50px",
						background: "-webkit-linear-gradient(45deg, #D23C77, #DD4124)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
					}}
					className="text-center px-2 px-md-0"
				>
					A Nova Era em anúncios de <br /> acompanhantes no Brasil
					<br />
					<span
						style={{
							fontSize: "28px",
							background: "-webkit-linear-gradient(45deg, #D23C77, #DD4124)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
						className="text-center px-2 px-md-0"
					>
						O rosa nunca foi então quente!
					</span>
				</h1>
			</section>
			<section className="bg-dark" style={{ width: "100%" }}>
				<div className="container">
					<div className="row ">
						<div
							className="col d-flex align-items-center"
							style={{
								width: '40%',
							}}
						>
							<div
								className="d-flex flex-column"
								style={{
									width: '100%',
								}}
							>
								<div><img
									className="light-mode-item navbar-brand-item"
									src="/files/images/figurahome1.png"
									alt="card1"
								/></div>
								<div
									style={{
										marginTop: '15px'
									}}
								><img
										className="light-mode-item navbar-brand-item"
										src="/files/images/fig2.png"
										alt="card2"
									/>
								</div>
							</div>
							<div className="d-flex flex-column"
								style={{
									marginLeft: '15px',
									width: '100%',
								}}
							>
								<div><img
									className="light-mode-item navbar-brand-item"
									src="/files/images/figurahome3.png"
									alt="car3"
								/></div>
								<div
									style={{
										marginTop: '15px'
									}}
								><img
										className="light-mode-item navbar-brand-item"
										src="/files/images/figurahome4.png"
										alt="logo"
									/>
								</div>
							</div>
						</div>
						<div
							className="d-flex align-items-center flex-column justify-content-center"
							style={{
								width: '30%',
								marginRight: '-15px',
							}}
						>
							<div
								style={{
									fontSize: "30px",
									marginTop: "20px",
									textAlign: "center",
									backgroundImage: `linear-gradient(90deg, #B9496B, #EF644D)`,
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent'
								}}
							>
								Encontre seu momento exclusivo com conforto e segurança
							</div>
							<form
								onSubmit={HandleKeyPress}
								className="rounded position-relative"
								style={{ width: '80%', margin: '20px 0px' }}
							>
								<div style={{ position: 'relative' }}>
									<input
										ref={inputRef}
										value={search}
										onChange={(e) => setSearch(e.target.value)}
										className="form-control ps-5 bg-light"
										type="text"
										placeholder="Busque por cidade..."
										aria-label="Search"
									/>
									<div
										onClick={HandleKeyPress}
										className="bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
										style={{
											cursor: 'pointer',
											left: '80%',
											bottom: '2%',
											transform: 'translateY(-50%)',
										}}
									>
										<span className="fa fa-search" aria-hidden="true"></span>
									</div>
									<button
										className="btn"
										type="submit"
										style={{
											position: 'absolute',
											width: '40px',
											height: '40px',
											left: '-8px',
											top: '0px',

										}}

									>
										<i className="fa-solid fa-location-dot font-20 px-3 py-0" />
									</button>
								</div>
							</form>
							<div
								style={{
									fontSize: "11px",
									textAlign: "center",
									fontWeight: "bold",
								}}
							>A PROFISSÃO DE ACOMPANHANTE É LEGALIZADA NO BRASIL e reocnhecida pelo ministério do trabalho desde 2002.
							</div>
						</div>
						<div className="d-flex align-items-left flex-column"
							style={{
								width: '30%',
							}}
						>
							<div className="ms-3" style={{ marginTop: '-15px' }}>
								<h5 className="text-primary">Top 5 Acompanhantes</h5>
								<div className="d-flex mt-4">
									<Link href="/profile">
										<div className="avatar me-3">
											<img
												className="avatar-img rounded-circle"
												src="/assets/images/avatar/05.jpg"
												alt="mockup"
											/>
										</div>
									</Link>
									<div>
										<Link href="/profile">
											<h6 className="card-title mb-0">
												<span className="text-primary">
													Camila Ramos
												</span>
											</h6>
										</Link>
										<p className="small d-flex align-items-center gap-3">
											<span className="fw-bold">
												<i className="bi bi-geo-alt-fill"></i>
												Birigui - SP
											</span>
										</p>
									</div>
								</div>
								<div className="d-flex mt-3">
									<div className="avatar me-3">
										<Link href="/profile">
											<img
												className="avatar-img rounded-circle"
												src="/assets/images/avatar/10.jpg"
												alt="mockup"
											/>
										</Link>
									</div>
									<div>
										<h6 className="card-title mb-0">
											<Link href="/profile" className="text-primary">
												Alessandra Pinheiros
											</Link>
										</h6>
										<p className="small d-flex align-items-center gap-3">
											<span className="fw-bold">
												<i className="bi bi-geo-alt-fill"></i>
												Valparaíso - SP
											</span>
										</p>
									</div>
								</div>
								<div className="d-flex mt-3">
									<Link href="/profile">
										<div className="avatar me-3">
											<img
												className="avatar-img rounded-circle"
												src="/assets/images/avatar/05.jpg"
												alt="mockup"
											/>
										</div>
									</Link>
									<div>
										<h6 className="card-title mb-0">
											<Link href="/profile" className="text-primary">
												Camila Ramos
											</Link>
										</h6>
										<p className="small d-flex align-items-center gap-3">
											<span className="fw-bold">
												<i className="bi bi-geo-alt-fill"></i>
												Birigui - SP
											</span>
										</p>
									</div>
								</div>
								<div className="d-flex mt-3">
									<Link href="/profile">
										<div className="avatar me-3">
											<img
												className="avatar-img rounded-circle"
												src="/assets/images/avatar/05.jpg"
												alt="mockup"
											/>
										</div>
									</Link>
									<div>
										<h6 className="card-title mb-0">
											<Link href="/profile" className="text-primary">
												Camila Ramos
											</Link>
										</h6>
										<p className="small d-flex align-items-center gap-3">
											<span className="fw-bold">
												<i className="bi bi-geo-alt-fill"></i>
												Birigui - SP
											</span>
										</p>
									</div>
								</div>
								<div className="d-flex mt-3">
									<Link href="/profile">
										<div className="avatar me-3">
											<img
												className="avatar-img rounded-circle"
												src="/assets/images/avatar/05.jpg"
												alt="mockup"
											/>
										</div>
									</Link>
									<div>
										<h6 className="card-title mb-0">
											<Link href="/profile" className="text-primary">
												Camila Ramos
											</Link>
										</h6>
										<p className="small d-flex align-items-center gap-3">
											<span className="fw-bold">
												<i className="bi bi-geo-alt-fill"></i>
												Birigui - SP
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section >
			<section style={{ padding: "80px 10px" }}>
				<h2
					style={{ fontSize: "40px" }}
					className="text-center text-super-magenta"
				>
					Faixa Rosa: Onde a elegância encontra o seu momento exclusivo.
				</h2>
				<div
					style={{ maxWidth: "800px", height: "400px" }}
					className="mt-5 mx-auto px-5"
				>
					<Carousel dots={false}>
						<div>
							<iframe
								style={{ width: "100%", height: "400px" }}
								src="https://www.youtube.com/embed/W3qdauYS3ck"
							></iframe>
						</div>
						<div>
							<iframe
								style={{ width: "100%", height: "400px" }}
								src="https://www.youtube.com/embed/W3qdauYS3ck"
							></iframe>
						</div>
						<div>
							<iframe
								style={{ width: "100%", height: "400px" }}
								src="https://www.youtube.com/embed/W3qdauYS3ck"
							></iframe>
						</div>
					</Carousel>
				</div>
				<div
					className="mt-5 mx-auto d-flex flex-column align-items-center"
					style={{ maxWidth: "800px" }}
				>
					<h4 className="text-black-50 text-center">
						Clique no botão abaixo, inscreva-se em nosso canal do YouTube e
					</h4>
					<button
						className="btn btn-danger fs-4 mt-3"
						style={{ border: "1px soid #d23c77" }}
						onClick={() => window.open('https://www.youtube.com/@faixa.rosa.br.', '_blank')}
					>
						<span className="me-3 d-inline-block">FaixaRosaNoYT</span>
						<i className="bi bi-caret-right-square-fill"></i>
					</button>
				</div>
			</section>
			<section className="border-top border-primary bg-primary bg-opacity-10 ">
				<div className="container">
					<h3>Acompanhantes em destaque em todo o Brasil</h3>
					<div className="row g-4 mt-3">
						<div className="col-6 col-md-4 col-lg-3">
							<Link href="/profile">
								<div
									style={{
										boxShadow: "6px 3px 10px rgba(0, 0, 0, 0.2)",
										backgroundImage:
											"url(files/images/advertiser_image_home_1.jpeg)",
										backgroundRepeat: "no-repeat",
										backgroundSize: "cover",
										backgroundPosition: "center",
										height: "250px",
										width: "250px",
									}}
									className="rounded d-flex flex-colunm align-items-end"
								>
									<h6
										className="text-white p-2 fs-5"
										style={{ textShadow: "1px 1px 2px black" }}
									>
										Ana Silva - SP
									</h6>
								</div>
							</Link>
						</div>

						<div className="col-6 col-md-4 col-lg-3">
							<Link href="/profile">
								<div
									style={{
										boxShadow: "6px 3px 10px rgba(0, 0, 0, 0.2)",
										backgroundImage:
											"url(files/images/advertiser_image_home_2.jpeg)",
										backgroundRepeat: "no-repeat",
										backgroundSize: "cover",
										backgroundPosition: "center",
										height: "250px",
										width: "250px",
									}}
									className="rounded d-flex flex-colunm align-items-end"
								>
									<h6
										className="text-white p-2 fs-5"
										style={{ textShadow: "1px 1px 2px black" }}
									>
										Maria Santos - MG
									</h6>
								</div>
							</Link>
						</div>

						<div className="col-6 col-md-4 col-lg-3">
							<Link href="/profile">
								<div
									style={{
										boxShadow: "6px 3px 10px rgba(0, 0, 0, 0.2)",
										backgroundImage:
											"url(files/images/advertiser_image_home_3.jpeg)",
										backgroundRepeat: "no-repeat",
										backgroundSize: "cover",
										backgroundPosition: "center",
										height: "250px",
										width: "250px",
									}}
									className="rounded d-flex flex-colunm align-items-end"
								>
									<h6
										className="text-white p-2 fs-5"
										style={{ textShadow: "1px 1px 2px black" }}
									>
										Gabriela Santos - RJ
									</h6>
								</div>
							</Link>
						</div>
						<div className="col-6 col-md-4 col-lg-3">
							<Link href="/profile">
								<div
									style={{
										boxShadow: "6px 3px 10px rgba(0, 0, 0, 0.2)",
										backgroundImage:
											"url(files/images/advertiser_image_home_4.jpeg)",
										backgroundRepeat: "no-repeat",
										backgroundSize: "cover",
										backgroundPosition: "center",
										height: "250px",
										width: "250px",
									}}
									className="rounded d-flex flex-colunm align-items-end"
								>
									<h6
										className="text-white p-2 fs-5"
										style={{ textShadow: "1px 1px 2px black" }}
									>
										Amanda Pontes - SP
									</h6>
								</div>
							</Link>
						</div>

						<div className="col-6 col-md-4 col-lg-3">
							<Link href="/profile">
								<div
									style={{
										boxShadow: "6px 3px 10px rgba(0, 0, 0, 0.2)",
										backgroundImage:
											"url(files/images/advertiser_image_home_5.jpeg)",
										backgroundRepeat: "no-repeat",
										backgroundSize: "cover",
										backgroundPosition: "center",
										height: "250px",
										width: "250px",
									}}
									className="rounded d-flex flex-colunm align-items-end"
								>
									<h6
										className="text-white p-2 fs-5"
										style={{ textShadow: "1px 1px 2px black" }}
									>
										Camila Souza - MG
									</h6>
								</div>
							</Link>
						</div>

						<div className="col-6 col-md-4 col-lg-3">
							<Link href="/profile">
								<div
									style={{
										boxShadow: "6px 3px 10px rgba(0, 0, 0, 0.2)",
										backgroundImage:
											"url(files/images/advertiser_image_home_6.jpeg)",
										backgroundRepeat: "no-repeat",
										backgroundSize: "cover",
										backgroundPosition: "center",
										height: "250px",
										width: "250px",
									}}
									className="rounded d-flex flex-colunm align-items-end"
								>
									<h6
										className="text-white p-2 fs-5"
										style={{ textShadow: "1px 1px 2px black" }}
									>
										Letícia Rodrigues - MG
									</h6>
								</div>
							</Link>
						</div>

						<div className="col-6 col-md-4 col-lg-3">
							<Link href="/profile">
								<div
									style={{
										boxShadow: "6px 3px 10px rgba(0, 0, 0, 0.2)",
										backgroundImage:
											"url(files/images/advertiser_image_home_7.jpeg)",
										backgroundRepeat: "no-repeat",
										backgroundSize: "cover",
										backgroundPosition: "center",
										height: "250px",
										width: "250px",
									}}
									className="rounded d-flex flex-colunm align-items-end "
								>
									<h6
										className="text-white p-2 fs-5"
										style={{ textShadow: "1px 1px 2px black" }}
									>
										Ana Silva - GO
									</h6>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section
				style={{}}
			>
				<div
					className="container"
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						flexDirection: 'column',
					}}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<h1
							style={{
								fontSize: "60px",
								background: "-webkit-linear-gradient(45deg, #D23C77, #DD4124)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
							className="text-center px-2 px-md-0"
						>
							Blog Faixa Rosa
						</h1>
					</div>
					<div
						style={{
							display: 'flex',
							marginTop: '30px'
						}}
					>
						<div
							style={{
								cursor: 'pointer'
							}}
							onClick={() => window.open('https://faixarosa.blog/por-que-anunciar-no-faixa-rosa/', '_blank')}
						>
							<img
								src="/files/images/Blog01.png"
								alt="blog image 1"
							/>
						</div>
						<div
							style={{
								cursor: 'pointer'
							}}
							onClick={() => window.open('https://faixarosa.blog/diversidade-e-inclusao-o-faixa-rosa-como-espaco-livre-de-discriminacao/', '_blank')}
						><img
								src="/files/images/Blog02.png"
								alt="blog image 2"
								style={{
									marginTop: '5px',
									width: '96%',
									height: 'auto',
								}}
							/></div>
						<div
							style={{
								cursor: 'pointer'
							}}
							onClick={() => window.open('https://faixarosa.blog/dicas-faixarosa/', '_blank')}
						><img
								src="/files/images/Blog03.png"
								alt="blog image 3"
							/></div>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: '40px'
						}}
					>
						<button
							className=""
							onClick={() => window.open('https://faixarosa.blog/', '_blank')}
							style={{
								background: "-webkit-linear-gradient(45deg, #D23C77, #DD4124)",
								width: '330px',
								height: '50px',
								borderRadius: '20px / 10px',
								color: 'white',
								wordSpacing: '5px',
								fontSize: '25px',
								border: 'none',
								outline: 'none'
							}}
						>
							Veja mais artigos
						</button>
					</div>
				</div>
			</section>
			<footer className="footer">
				<div className="footer-container">
					<div className="footer-content">
						<div className="footer-content-left">
							{Object.entries(iconsInfo).map(([icon, url], index) => (
								<div key={index} onClick={() => window.open(url, '_blank')} rel="noopener noreferrer">
									<i style={iconsStyle} className={`bi bi-${icon}`}></i>
								</div>
							))}
						</div>
						<div
							className="footer-content-right d-flex align-items-center gap-3"
						>
							<div>©2024 <a target="_blank" href="https://faixarosa.com.br/">Faixa Rosa</a> - Direitos reservados</div>
							<div>
								CNPJ - 53.839.625/0001-08
							</div>
							<div>
								Leia nossos <Link target="_blank" href="/terms">Termos</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}



export default Home;
