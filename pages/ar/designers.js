import React, { useState, useRef } from "react";
import Image from "next/image";
import Hero from "../../components/rtl/hero/Hero";
import Layout from "../../components/rtl/layout/Layout";
import ShopByCategory from "../../components/rtl/shop-by-category/ShopByCategory";
import TextImgSection from "../../components/rtl/text-img-section/TextImgSection";
import productImg1 from "../../assets/images/products/orange-1/img3.jpg";
import productImg2 from "../../assets/images/products/product2.jpg";
import productImg3 from "../../assets/images/products/product3.jpg";
import productImg4 from "../../assets/images/products/product4.jpg";

import Eight from "../../assets/images/designers/eight.jpg";
import FourteenTen from "../../assets/images/designers/fourteen-ten.jpg";
import NadaLine from "../../assets/images/designers/nada-line.jpg";
import ZahraLine from "../../assets/images/designers/zahra-line.jpg";
import WalaaKazem from "../../assets/images/designers/walaa-kazem.jpg";
import KafByKaf from "../../assets/images/designers/kaf-by-kaf.jpg";
import FouzCouture from "../../assets/images/designers/fouz-couture.jpg";
import Gmash from "../../assets/images/designers/gmash.jpg";
import Nakhlah from "../../assets/images/designers/nakhlah.jpg";
import Clue from "../../assets/images/designers/clue.jpg";
import Maliha from "../../assets/images/designers/maliha.jpg";
import RawMestika from "../../assets/images/designers/raw-mestika.jpg";
import EstiloDesigns from "../../assets/images/designers/estilo-designs.jpg";
import MunaMattar from "../../assets/images/designers/muna-mattar.jpg";

import img1 from "../../assets/images/products/orange-1/img1.jpg";
import img2 from "../../assets/images/products/orange-1/img2.jpg";
import img3 from "../../assets/images/products/orange-1/img3.jpg";
import img4 from "../../assets/images/products/orange-1/img4.jpg";
import styles from "../../components/rtl/designers.module.css";
import Features from "../../components/rtl/features/Features";
import ColorBox from "../../components/rtl/color-box/ColorBox";
import OtherProducts from "../../components/rtl/other-products/OtherProducts";
import ProductSlider from "../../components/rtl/product-slider/Product-slider";
import HeadingAndText from "../../components/rtl/heading-and-text/HeadingAndText";
import SizeGuideModal from "../../components/rtl/size-guide-modal/SizeGuideModal";
import MessageModal from "../../components/rtl/message-modal/MessageModal";
import ShopFilters from "../../components/rtl/shop-filters/ShopFilters";
import ProductCard from "../../components/rtl/product-card/ProductCard";
import Link from "next/link";
import ImgLazyLoad from "../../components/rtl/img-lazy-load/Img-lazy-load";
import { useEffect } from "react";
function Designers() {
  useEffect(() => {
    document.querySelector("body").style.direction = 'rtl'
  }, [])
  const designers = [
    {
      name: "ثمانية",
      image: Eight,
    },
    {
      name: "فورتين تين",
      image: FourteenTen,
    },
    {
      name: "ندى لاين",
      image: NadaLine,
    },
    {
      name: "زهرة لاين",
      image: ZahraLine,
    },
    {
      name: "ولاء كاظم",
      image: WalaaKazem,
    },
    {
      name: "کاف باي كاف",
      image: KafByKaf,
    },
    {
      name: "فوز كوتور",
      image: FouzCouture,
    },
    {
      name: "جماش",
      image: Gmash,
    },
    {
      name: "نخلة",
      image: Nakhlah,
    },
    {
      name: "كلو",
      image: Clue,
    },
    {
      name: "مليحة",
      image: Maliha,
    },
    {
      name: "رومیستكا",
      image: RawMestika,
    },
    {
      name: "Estilo Designs",
      image: EstiloDesigns,
    },
    {
      name: "منى مطر",
      image: MunaMattar,
    },
  ];

  return (
    <>
      <Layout>
        <div className="w-[100%] max-w-[1600px] mx-auto mt-[80px] px-[3%]     sm:mt-[10px]">
          <div className="flex flex-wrap justify-center gap-x-[20px] flex-col pb-[0px]      sm:flex-row sm:pb-[50px]">
            {designers.map((value, index) => {
              return (
                <>
                  <div
                    key={index}
                    className={`${styles.designer_card} designer-card mt-[20px] mb-[20px]      md:mt-[90px]`}
                  >
                    <Link href="/ar/shop/designer">
                      <a>
                        <div className="w-[100%] h-[100%] mb-[20px]">
                          {/* <Image src={value.image} alt="image" /> */}
                          <ImgLazyLoad src={value.image} alt={"image"} classes={""} />
                        </div>
                        <p className=" text-[#000] text-[18px] mb-[10px]">
                          {value.name}
                        </p>
                      </a>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Designers;
