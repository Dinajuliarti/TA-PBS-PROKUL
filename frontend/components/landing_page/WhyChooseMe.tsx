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
          Mengapa Memilih Permata Bread?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center px-4">
            <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faLeaf} className="text-amber-700 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Bahan Alami
            </h3>
            <p className="text-gray-600">
              Kami hanya menggunakan bahan alami terbaik tanpa pengawet buatan.
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
              Kualitas Artisan
            </h3>
            <p className="text-gray-600">
              Setiap roti dibuat secara manual oleh baker ahli dengan teknik
              tradisional.
            </p>
          </div>
          <div className="text-center px-4">
            <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faTruck} className="text-amber-700 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Pengiriman Segar
            </h3>
            <p className="text-gray-600">
              Dipanggang segar setiap hari dan roti sampai ke rumah anda dengan
              kesegaran maksimal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseMe;
