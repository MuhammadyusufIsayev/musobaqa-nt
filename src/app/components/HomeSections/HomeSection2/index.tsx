import Link from "next/link";

const index = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <div className="w-[550px]">
                    <p className="text-[#70737C] text-[14px]">OUR PRODUCTS</p>
                    <h2 className="text-[#0D0D0D] text-[40px] font-bold">Our Products</h2>
                </div>
                <Link href="/products">
                    <p className="text-[#359740] text-[14px]">VIEW ALL</p>
                </Link>
            </div>
        </div>
    );
}

export default index;