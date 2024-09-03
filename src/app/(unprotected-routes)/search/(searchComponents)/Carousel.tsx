"use client"
import Slider from "react-slick";
import React, { useState, ReactNode, CSSProperties, MouseEventHandler } from "react"

interface CarouselProps {
	dots: boolean;
}

interface ArrowProps {
	className?: string;
	style?: CSSProperties;
	onClick?: MouseEventHandler<HTMLDivElement>;
}

function NextArrow(props: ArrowProps) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", right: 0, zIndex: 10 }}
			onClick={onClick}
		/>
	);
}

function PrevArrow(props: ArrowProps) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", left: 0, zIndex: 10 }}
			onClick={onClick}
		/>
	);
}

function Carousel({ dots }: CarouselProps) {

	const [currentSlide, setCurrentSlide] = useState(0);

	let settings = {
		dots: dots,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		appendDots: (dots: ReactNode) => (
			<ul style={{ margin: "0px", bottom: "16px" }}> {dots} </ul>
		),
		customPaging: function (i: number) {
			return (
				<i
					className={`bi bi-circle-fill ${currentSlide === i ? 'text-white' : ''}`}
					style={{ fontSize: "8px" }}
				></i>
			);
		},
		beforeChange: (oldIndex: number, newIndex: number) => {
			setCurrentSlide(newIndex);
		},
	};
	return (
		<div className="mx-auto" style={{ width: "100%" }}>
			<Slider {...settings}>
				<div>
					<div
						style={{
							backgroundImage: "url(files/images/advertiser_image_1.jpeg)",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							backgroundPosition: "center",
							width: "100%",
							height: "150px",
						}}
					></div>
				</div>
				<div>
					<div
						style={{
							backgroundImage: "url(files/images/advertiser_image_2.jpeg)",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							backgroundPosition: "center",
							width: "100%",
							height: "150px",
						}}
					></div>
				</div>
				<div>
					<div
						style={{
							backgroundImage: "url(files/images/advertiser_image_4.jpeg)",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							backgroundPosition: "center",
							width: "100%",
							height: "150px",
						}}
					></div>
				</div>
			</Slider>
		</div >
	);
}

export default Carousel;
