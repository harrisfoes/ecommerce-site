import sofa1 from "../assets/product/landing/sofa1.jpeg";

function Hero() {
  return (
    <section className="my-2">
      <div
        className="bg-cover bg-bottom min-h-[300px]"
        style={{
          backgroundImage:
            "url(ecommerce-site/src/assets/product/landing/sofa1.jpeg)",
        }}
      ></div>
      <h1 className="font-poppins font-medium text-4.5xl leading-10 py-4">
        Simply Unique<span className="text-neutral-400">/</span> Simply Better
        <span className="text-neutral-400">.</span>
      </h1>
      <p className="text-neutral-400 py-2">
        <span className="text-neutral-500 font-semibold">3scallant</span> is a
        gift & decorations store based in Cebu. EST since 2019
      </p>
    </section>
  );
}

export default Hero;
