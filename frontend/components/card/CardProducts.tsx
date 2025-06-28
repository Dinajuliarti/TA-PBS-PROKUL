"use client";
import { useState } from "react";
import CategoriesButton from "../categories/CategoriesButton";
import CardListproducts from "./CardListproducts";

function CardProducts() {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <>
      <CategoriesButton
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <CardListproducts activeCategory={activeCategory} />
    </>
  );
}

export default CardProducts;
