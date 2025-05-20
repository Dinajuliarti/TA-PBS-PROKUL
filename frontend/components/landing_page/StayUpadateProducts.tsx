function StayUpdateProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Tetap Terhubung
        </h2>
        <p className="text-gray-600 mb-8">
          Berlangganan buletin kami untuk peluncuran produk baru, penawaran
          spesial, dan tips memanggang!
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Alamat email Anda"
            className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition">
            Berlangganan
          </button>
        </div>
      </div>
    </section>
  );
}

export default StayUpdateProducts;
