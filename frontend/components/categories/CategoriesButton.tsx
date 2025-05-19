import React from "react";

function CategoriesButton() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Bread Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="category-btn px-6 py-2 rounded-full border border-amber-300 text-amber-700 font-medium transition active">
            All Products
          </button>
          <button className="category-btn px-6 py-2 rounded-full border border-amber-300 text-amber-700 font-medium hover:bg-amber-100 transition">
            Whole Wheat
          </button>
          <button className="category-btn px-6 py-2 rounded-full border border-amber-300 text-amber-700 font-medium hover:bg-amber-100 transition">
            Sourdough
          </button>
          <button className="category-btn px-6 py-2 rounded-full border border-amber-300 text-amber-700 font-medium hover:bg-amber-100 transition">
            Sweet Bread
          </button>
          <button className="category-btn px-6 py-2 rounded-full border border-amber-300 text-amber-700 font-medium hover:bg-amber-100 transition">
            Gluten-Free
          </button>
        </div>
      </div>
    </section>
  );
}

export default CategoriesButton;
