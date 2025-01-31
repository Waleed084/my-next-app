import Features from "@/components/common/Features";
import MarqueeSection2 from "@/components/common/MarqueeSection2";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar5 from "@/components/headers/Topbar5";
import Categories from "@/components/home/Categories";
import Collections from "@/components/home/Collections";
import Hero from "@/components/home/Hero";
import NewsLetter from "@/components/home/NewsLetter";
import Products1 from "@/components/home/Products";
import Products2 from "@/components/home/Products2";
import Shopgram from "@/components/home/Shopgram";
import Testimonials from "@/components/home/Testimonials";
import React from "react";

export const metadata = {
  title:
    "Home Jewelry 02 || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function page() {
  return (
    <>
      <Topbar5 parentClass="tf-topbar style-2 line-bt" />
      <Header1 />
      <Hero />
      <Categories />
      <Products1 parentClass="flat-spacing pt-0" />
      <Collections />
      <Products2 parentClass="flat-spacing" />
      <Testimonials />
      <Features parentClass="flat-spacing line-top-containe pt-0" />
      <Shopgram />
      <MarqueeSection2 />
      <NewsLetter />
      <Footer1 />
    </>
  );
}
