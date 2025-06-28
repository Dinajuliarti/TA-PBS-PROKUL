import { DataProducts } from "@/data/products";
import CardPropsItemProducts from "./CardPropsItemProducts";
import { Product } from "@/types/products";

type CardListproductsProps = {
  activeCategory: string;
};

function CardListproducts({ activeCategory }: CardListproductsProps) {
  const filteredProducts = activeCategory
    ? DataProducts.filter((product) => product.kategori === activeCategory)
    : DataProducts;

  return (
    <section className="bg-amber-50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product: Product) => (
            <CardPropsItemProducts key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardListproducts;
