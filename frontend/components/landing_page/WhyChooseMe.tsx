import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import {
  faLeaf,
  faBreadSlice,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WhyChooseMe() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Permata Bread?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center px-4">
            <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon
                icon={faLeaf}
                className="text-amber-700 w-6"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Natural Ingredients
            </h3>
            <p className="text-gray-600">
              We use only the finest natural ingredients with no artificial
              preservatives.
            </p>
          </div>
          <div className="text-center px-4">
            <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon
                icon={faBreadSlice}
                className="text-amber-700 w-6"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Artisan Quality
            </h3>
            <p className="text-gray-600">
              Each loaf is handcrafted by our skilled bakers with traditional
              techniques.
            </p>
          </div>
          <div className="text-center px-4">
            <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon
                icon={faTruck}
                className="text-amber-700 w-6"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Fresh Delivery
            </h3>
            <p className="text-gray-600">
              Baked fresh daily and delivered to your doorstep for maximum
              freshness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseMe;
