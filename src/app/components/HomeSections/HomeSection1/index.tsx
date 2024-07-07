import image from "../../../images/banners/HomeHeaderBacground.png";
import seed from "../../../images/images/seed.png";
import burnLogo from "../../../images/burn.png";
import Image from "next/image";

const HomeSection1 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${image.src})`, borderRadius: "40px" }}
      className="flex justify-between container mx-auto pt-[48px] pb-[52px] pl-[76px] bg-slate-800 bg-no-repeat bg-cover h-[455px]"
    >
      <div>
        <h1 className="text-[#0D0D0D] text-[48px] font-bold w-[670px]">
          SEEDRA Basil Seeds for Indoor and Outdoor Planting
        </h1>
        <p className="text-[#70737C] text-[16px] w-[560px] font-light mb-7">
          Be sure of our quality - the freshest batches of this season. Non-GMO,
          Heirloom - our seeds were tested and have the best germination
          ratings. Your easy growing experience is our guarantee
        </p>
        <h2 className="flex items-center text-[42px] font-bold">
          <Image
            className="mr-5"
            src={burnLogo}
            alt="Logo"
            width={35}
            height={35}
          />
          $12.56 <p className="text-[22px] line-through ml-4">$15.56</p>
        </h2>
        <div className="mt-[10px]">
          <button className="text-[#fff] text-[16px] font-bold border-[1px] bg-[#359740] pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg">
            Add to cart
          </button>
          <button className="text-[#359740] text-[16px] font-bold border-[1px] bg-[#fff] pl-[33px] pr-[33px] pt-[11px] pb-[11px] rounded-lg ml-5">
            Discover
          </button>
        </div>
      </div>
      <div>
        <Image src={seed} alt="Logo" width={400} height={350} />
      </div>
    </div>
  );
};

export default HomeSection1;
