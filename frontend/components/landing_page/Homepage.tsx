import ButtonCatalog from "../button/ButtonCatalog";

function Homepage() {
  return (
    <section className="hero-gradient bread-bg py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 bg-amber-100 opacity-80 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Premium Quality <span className="text-amber-700">Permata</span>{" "}
            Bread
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Handcrafted with love using the finest ingredients for your family's
            health and happiness.
          </p>
          <ButtonCatalog Props={{ title: "Explore Our Products" }} />
          {/* <button className="bg-amber-600 opacity-100 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full transition transform hover:scale-105">
            Explore Our Products
          </button> */}
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
            alt="Fresh Permata Bread"
            className="rounded-full w-64 h-64 object-cover shadow-xl floating-bread border-8 border-white"
          />
        </div>
      </div>
    </section>
  );
}

export default Homepage;
