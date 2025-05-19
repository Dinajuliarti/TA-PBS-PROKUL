import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { Product } from "@/types/products";

interface CardProps {
  product: Product;
}

function CardPropsItemProducts({ product }: CardProps) {
  return (
    <div className="bread-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          width={500}
          height={500}
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.label && (
          <div
            className={`absolute top-2 right-2 ${product.labelColor} text-white text-xs font-bold px-2 py-1 rounded-full`}
          >
            {product.label}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-amber-700 font-bold text-lg">
            Rp{product.price.toLocaleString()}
          </span>
          <button className="bg-amber-100 hover:bg-amber-200 text-amber-800 font-medium py-2 px-4 rounded-full transition">
            <FontAwesomeIcon icon={faBookmark} className="w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPropsItemProducts;
