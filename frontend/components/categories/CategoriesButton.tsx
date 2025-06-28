type CategoriesButtonProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

function CategoriesButton({
  activeCategory,
  setActiveCategory,
}: CategoriesButtonProps) {
  const categories = [
    { name: "Semua Produk", value: "" },
    { name: "Roti Manis", value: "roti-manis" },
    { name: "Roti Isi", value: "roti-isi" },
    { name: "Roti Kering", value: "roti-kering" },
    { name: "Roti Lainnya", value: "roti-lainnya" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Kategori Roti Kami
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              className={`px-6 py-2 rounded-full border ${
                activeCategory === category.value
                  ? "bg-amber-300 text-amber-800 border-amber-500"
                  : "border-amber-300 text-amber-700 hover:bg-amber-100"
              } font-medium transition`}
              onClick={() => setActiveCategory(category.value)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesButton;
