import React from "react";
import Hero from "../components/hero/Hero";
import Layout from "../components/layout/Layout";
import ShopByCategory from "../components/shop-by-category/ShopByCategory";
import TextImgSection from "../components/text-img-section/TextImgSection";
import katwalkBag from "../assets/images/designers/katwalk-bag.jpg";
import bestSellingProduct from "../assets/images/best-selling/best-selling-product.jpg";
import Features from "../components/features/Features";

function HomePage() {
  const designerData = {
    title: "designers",
    text: "Explore our talented and independent designers.",
    img: katwalkBag,
    type: "designer"
  };
  const bestSellingData = {
    title: "Best Selling",
    text: "Our customers' favorite picks",
    img: bestSellingProduct,
    type: "product"
  }



  const countries = ['Norway', 'Sweden', 'Denmark', 'New Zealand', 'North'];

  const startsWithN = countries.filter((country) => country.startsWith("No"));
  console.log(",startsWithN", startsWithN)
  return (
    <>
      <Layout>
        <Hero />
        <ShopByCategory />
        <TextImgSection data={designerData} />
        <TextImgSection data={bestSellingData} />
        <Features />
      </Layout>
    </>
  );
}

export default HomePage;
