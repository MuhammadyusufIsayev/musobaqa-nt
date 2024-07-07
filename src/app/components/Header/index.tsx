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
    <div className="container mx-auto flex justify-between items-center py-[12px]">
      <div className="flex">
        <Link href="/">
          <Image src={logo} alt="Logo" width={97} height={21} />
        </Link>
      </div>
      <div className="flex">
        <Link href="/products">ALL PRODUCTS</Link>
        <Link href="/about">ABOUT SEEDRA</Link>
        <Link href="/blog">OUR BLOG</Link>
        <Link href="/contacts">CONTACTS</Link>
      </div>
      <div className="flex">
        <Image src={instagram} alt="instagram" width={24} height={24} />
        <Image src={facebook} alt="facebook" width={24} height={24} />
      </div>
      <div className="flex">
        <Image src={lupa} alt="lupa" width={24} height={24} />
        <p>Search</p>
      </div>
      <div className="flex">
      <Image src={like} alt="lupa" width={24} height={24} />
      <Image src={cart} alt="lupa" width={24} height={24} />
      </div>
    </div>
  );
};

export default Header;
