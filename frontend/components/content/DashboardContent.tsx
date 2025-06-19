"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faMapMarkerAlt,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function DashboardContent() {
  return (
    <section id="locations" className="py-16 bg-amber-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Temukan Toko Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="bg-amber-700 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <FontAwesomeIcon icon={faStore} className="mr-2" /> Cabang Utama
              </h3>
              <p className="mb-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                Jl. Roti Enak No. 123, Bandar Lampung
              </p>
              <p className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                (021) 1234-5678
              </p>
              <p>
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                Buka setiap hari 07.00 - 21.00 WIB
              </p>
            </div>

            <div className="bg-amber-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <FontAwesomeIcon icon={faStore} className="mr-2" /> Cabang BSD
              </h3>
              <p className="mb-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                Mall BSD, Lantai 1, Tangerang Selatan
              </p>
              <p className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                (021) 8765-4321
              </p>
              <p>
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                Buka setiap hari 10.00 - 22.00 WIB
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1623394253179!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
