import React from "react";
import Image from "next/image";
import logoSquare from "../../../assets/images/logo/logo-square.png";
import vat from "../../../assets/images/logo/vat.png";
import heroImage from "../../../assets/images/hero-image.jpg";
import bottle from "../../../assets/images/icons/bottle.png";
import freeDelivery from "../../../assets/images/icons/free-delivery.png";
import measurementTap from "../../../assets/images/icons/measurement-tap.png";
import tags from "../../../assets/images/icons/tags.png";
import FeaturesCard from "../features-card/FeaturesCard";
import styles from "./Features.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import allIcons from "../../../assets/images/icons/all-icons.svg";

function Features() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
  };
  const features = [
    {
      img: freeDelivery,
      title: "شحن محلي مجاني",
      text: "شحن مجاني من المصممات السعوديات",
    },
    {
      img: measurementTap,
      title: "تفصيل حسب المقاس",
      text: "نقدم تشكيلة واسعة من القطع المفصلة حسب المقاس",
    },
    {
      img: bottle,
      title: "تغليف عالي الجودة",
      text: "كيس قطني عالي الجودة لضمان وصول قطعتك بأحسن حال",
    },
    {
      img: tags,
      title: "أسعار شاملة الشحن والضريبة",
      text: "جميع أسعار القطع تشمل الضريبة والشحن إلى منزلك",
    },
  ];
  return (
    <>
      <section className="my-[30px] px-[25px] py-[30px]">
        <div
          className={`${styles.features_container} container flex flex-wrap justify-center gap-y-[50px] hidden     sm:flex md:gap-y-[0]`}
        >
          {features.map((value, index) => {
            return <FeaturesCard key={index} data={value} />;
          })}
        </div>
        <div className="feature-slider-mob block     sm:hidden">
          <Slider {...settings}>
            {features.map((value, index) => {
              return <FeaturesCard key={index} data={value} />;
            })}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Features;
