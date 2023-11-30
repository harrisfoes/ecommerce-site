import livingRoom from "../assets/product/category/livingroom.png";
import ArrowLink from "./ArrowLink";
import bedroom from "../assets/product/category/bedroom.png";
import kitchen from "../assets/product/category/kitchen.png";

const ProductSmall = ({ heading, image }) => {
  return (
    <>
      <div className="h-[180px] relative w-[311px] my-6 bg-green">
        <div className="absolute left-[40px] top-[82px]">
          <h1 className="text-3xl font-poppins">{heading}</h1>
          <ArrowLink text={"Shop Now"} />
        </div>
        <img src={image} alt="living room couch" />
      </div>
    </>
  );
};

function ProductCategory() {
  return (
    <>
      <div className="h-[377px] relative w-[311px] my-2">
        <div className="absolute left-[40px] top-[32px]">
          <h1 className="text-3xl font-poppins">Living room</h1>
          <ArrowLink text={"Shop Now"} />
        </div>
        <img src={livingRoom} alt="living room couch" />
      </div>
      <ProductSmall heading={"Bedroom"} image={bedroom} />

      <ProductSmall heading={"Kitchen"} image={kitchen} />
    </>
  );
}

export default ProductCategory;
