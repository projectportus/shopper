import React from "react";

const Info = () => {
  return (
    <div className="flex flex-col items-center justify-between">
      <section className="max-w-4xl mx-auto px-4 py-10 text-lg leading-relaxed flex flex-col items-center justify-center ">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-center">
          Furniro was founded in 2023 with one mission: to bring timeless,
          elegant, and affordable furniture to your home...
        </p>
      </section>
      <section className="bg-[#FFF3E3] py-10 w-[70%] rounded-2xl">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Quality First</h3>
            <p>We use premium materials and skilled craftsmanship.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Sustainable</h3>
            <p>Eco-friendly processes and sustainable sourcing.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Customer First</h3>
            <p>Top-rated support and flexible return policies.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
