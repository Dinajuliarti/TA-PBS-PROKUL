import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function CostumerSays() {
  return (
    <>
      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Apa Kata Pelanggan Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-amber-500 mr-2">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Roti sourdough dari Permata benar-benar luar biasa! Rasa
                asamnya pas dan teksturnya kenyal. Sekarang jadi menu wajib di
                rumah kami."
              </p>
              <div className="flex items-center">
                <Image
                  width={48}
                  height={48}
                  src="/girl.png"
                  alt="Customer"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Nona Ambon</h4>
                  <p className="text-gray-600 text-sm">
                    Pelanggan setia selama 3 tahun
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-amber-500 mr-2">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Saya punya sensitivitas terhadap gluten, dan sulit cari roti
                yang enak—sampai saya coba roti bebas gluten dari Permata.
                Rasanya mirip roti biasa!"
              </p>
              <div className="flex items-center">
                <Image
                  width={48}
                  height={48}
                  src="/man.png"
                  alt="Customer"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Andi Pratama</h4>
                  <p className="text-gray-600 text-sm">
                    Pelanggan peduli kesehatan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CostumerSays;
