import React from "react";
import Image from "next/image";
import logo from "../../images/Frame.svg";
import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook.svg";
import like from "../../images/like.svg";
import cart from "../../images/cart.svg";
import lupa from "../../images/lupa.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-evenly items-center py-[20px]">
      <div className="flex items-center">
        <Link href="/">
          <Image src={logo} alt="Logo" width={100} height={21} />
        </Link>
      </div>
      <div className="flex items-center">
        <Link
          className="px-[16px] border-r-[1px] text-[#70737C]"
          href="/products"
        >
          ALL PRODUCTS
        </Link>
        <Link className="px-[16px] border-r-[1px] text-[#70737C]" href="/about">
          ABOUT SEEDRA
        </Link>
        <Link className="px-[16px] border-r-[1px] text-[#70737C]" href="/blog">
          OUR BLOG
        </Link>
        <Link className="px-[16px] text-[#70737C]" href="/contacts">
          CONTACTS
        </Link>
      </div>
      <div className="flex gap-[20px] items-center">
        <Image src={instagram} alt="instagram" width={24} height={24} />
        <Image src={facebook} alt="facebook" width={24} height={24} />
      </div>
      <div className="flex gap-[16px] w-[290px] border-[1px] border-[#EFEFEF] p-[12px] px-[20px] rounded-full">
        <Image src={lupa} alt="lupa" width={24} height={24} />
        <input
          className="w-full outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex gap-[24px]">
        <Link href="/like">
          <Image src={like} alt="lupa" width={24} height={24} />
        </Link>
        <Link href="/cart">
          <Image src={cart} alt="lupa" width={24} height={24} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
