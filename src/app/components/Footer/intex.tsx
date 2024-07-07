import Link from "next/link"
import logo from "../../images/Frame.svg"
import logoInsta from "../../images/instaBottom.svg"
// import logoFacebook from "../../images/faceBottom.svg"



import Image from "next/image"

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex-direction-column border-b-[1px] border-[#359740] py-[20px] mb-[20px]">
        <ul className="flex justify-between">
          <li><Link href="/products">ALL PRODUCTS</Link></li>
          <li><Link href="/about">ABOUT SEEDRA</Link></li>
          <li><Link href="/blog">OUT BLOG</Link></li>
          <li><Link href="/"><Image src={logo} alt="Logo" width={127} height={31} /></Link></li>
          <li><Link href="/">Terms&Conditions</Link></li>
          <li><Link href="/">Privacy Policy</Link></li>
        </ul>
      </div>
      <div className="bottom flex justify-between items-center">
        <div className="flex">
          <Image className="mr-[10px]" src={logoInsta} alt="Logo" width={30} height={30} />
          {/* <Image src={logoFacebook} alt="Logo" width={30} height={30} /> */}
        </div>
        <p>All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
