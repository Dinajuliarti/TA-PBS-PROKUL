import CardProducts from "@/components/card/CardProducts";
import Homepage from "@/components/landing_page/Homepage";
import WhyChooseMe from "@/components/landing_page/WhyChooseMe";
import React from "react";

function page() {
  return (
    <>
      <Homepage />
      <CardProducts />
      <WhyChooseMe />
    </>
  );
}

export default page;
