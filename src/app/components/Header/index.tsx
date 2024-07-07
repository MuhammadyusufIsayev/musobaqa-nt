import React from "react";
import Image from "next/image";
import logo from "../../images/Frame.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div>
        <Link href="/">
          <Image src={logo} alt="Logo" width={97} height={21} />
        </Link>
      </div>
      <div>
        <Link href="/products">ALL PRODUCTS</Link>
        <Link href="/about">ABOUT SEEDRA</Link>
        <Link href="/blog">OUR BLOG</Link>
        <Link href="/contacts">CONTACTS</Link>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Header;
