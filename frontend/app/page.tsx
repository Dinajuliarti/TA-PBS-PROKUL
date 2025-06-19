import CardProducts from "@/components/card/CardProducts";
import CostumerSays from "@/components/landing_page/CostumerSays";
import Footerpage from "@/components/landing_page/Footerpage";
import Homepage from "@/components/landing_page/Homepage";
import StayUpadateProducts from "@/components/landing_page/StayUpadateProducts";
import WhyChooseMe from "@/components/landing_page/WhyChooseMe";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <Homepage />
      <CardProducts />
      <WhyChooseMe />
      <CostumerSays />
      <StayUpadateProducts />
      <Footerpage />
    </>
  );
}

export default page;
