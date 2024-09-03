"use client";
import Slider from "react-slick";
import React, {
  ReactNode,
  CSSProperties,
  MouseEventHandler,
  Children,
} from "react";

interface CarouselProps {
  dots: boolean;
  children: React.ReactNode;
  arrowsInside?: boolean;
  bgArrowColorClass?: string;
  arrowColorClass?: string;
}

interface ArrowProps {
  className?: string;
  style?: CSSProperties;
  inside: boolean;
  bgColorClass?: string;
  arrowColorClass?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function NextArrow(props: ArrowProps) {
  const { className, style, inside, bgColorClass, arrowColorClass, onClick } =
    props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: inside ? "8px" : "-35px",
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <span
        style={{ width: "24px", height: "24px" }}
        className={`rounded-circle d-flex align-items-center justify-content-center bg-opacity-50 p-1 ${
          bgColorClass ?? "bg-white"
        }`}
      >
        <i
          className={`fa-solid fa-chevron-right fs-6 ${
            arrowColorClass ?? "text-primary"
          }`}
        ></i>
      </span>
    </div>
  );
}

function PrevArrow(props: ArrowProps) {
  const { className, style, inside, bgColorClass, arrowColorClass, onClick } =
    props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: inside ? "3px" : "-35px",
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <span
        style={{ width: "24px", height: "24px" }}
        className={`rounded-circle d-flex align-items-center justify-content-center bg-opacity-50 p-1 ${
          bgColorClass ?? "bg-white"
        }`}
      >
        <i
          className={`fa-solid fa-chevron-left fs-6 ${
            arrowColorClass ?? "text-primary"
          }`}
        ></i>
      </span>
    </div>
  );
}

function Carousel({
  dots,
  arrowsInside,
  bgArrowColorClass,
  arrowColorClass,
  children,
}: CarouselProps) {
  let settings = {
    dots: dots,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <NextArrow
        inside={arrowsInside ?? false}
        bgColorClass={bgArrowColorClass}
        arrowColorClass={arrowColorClass}
      />
    ),
    prevArrow: (
      <PrevArrow
        inside={arrowsInside ?? false}
        bgColorClass={bgArrowColorClass}
        arrowColorClass={arrowColorClass}
      />
    ),
    appendDots: (dots: any) => (
      <ul style={{ margin: "0px", bottom: "16px" }}> {dots} </ul>
    ),
    customPaging: function (i: number) {
      return (
        <i
          className="bi bi-circle-fill text-white-50"
          style={{ fontSize: "8px" }}
        ></i>
      );
    },
  };
  return (
    <div className="mx-auto" style={{ width: "100%" }}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default Carousel;
