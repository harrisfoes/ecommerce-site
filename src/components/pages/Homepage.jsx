import Header from "../Header";
import couponImg from "../../assets/ticket-percent.svg";
import closeImg from "../../assets/icons/close.svg";
import Hero from "../Hero";
import ProductCategory from "../ProductCategory";

const Promo = () => {
  return (
    <>
      <div className="text-xs font-inter py-3 bg-neutral-200 w-full text-center font-semibold flex justify-center">
        <div className="flex justify-between w-8/12 max-w-xl">
          <div className="flex gap-1 min-w-min">
            <img className="block" src={couponImg} alt="coupon image" />
            <span className="flex-shrink-0">
              30% off storewide -- Limited time!
            </span>
          </div>
          <img src={closeImg} alt="close button" />
        </div>
      </div>
    </>
  );
};

function Homepage() {
  return (
    <>
      <Promo />
      <div className="w-10/12 py-4">
        <Header />
        <main>
          <Hero />
        </main>
        <section>
          <ProductCategory />
        </section>
      </div>
    </>
  );
}

export default Homepage;
