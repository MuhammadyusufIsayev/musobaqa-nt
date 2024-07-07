import Image from 'next/image'
import React from 'react'
import all from "@/app/images/all.svg"
import bundles from "@/app/images/bundls.svg"
import herbs from "@/app/images/herbs.svg"
import vegetables from "@/app/images/vegetables.svg"
import fruits from "@/app/images/fruits.svg"
import supplies from "@/app/images/suplies.svg"
import flowers from "@/app/images/flowers.svg"


const HomeSection3 = () => {
  return (
    <div className='container mx-auto '>
        <div className='flex items center justify-between my-[45px]'>
            <h2 className='text-[36px] font-bold'>Our products.</h2>
            <button className='px-[33px] py-[11px] border-[1px] border-[#EFEFEF] rounded-lg text-[#359740] font-semibold'>View all (12)</button>
        </div>
        <div className='flex items center justify-between'>
            <div className="flex items-center gap-[16px] p-[20px] border-[2px] border-[#EFEFEF] rounded-lg">
              <Image src={all} alt="all" width={28} height={28} />
              <p>ALL </p>
            </div>
            <div className="flex items-center gap-[16px] p-[20px] border-[2px] border-[#EFEFEF] rounded-lg">
              <Image src={bundles} alt="all" width={28} height={28} />
              <p>BUNDLES</p>
            </div>
            <div className="flex items-center gap-[16px] p-[20px] border-[2px] border-[#EFEFEF] rounded-lg">
              <Image src={herbs} alt="all" width={28} height={28} />
              <p>HERBS</p>
            </div>
            <div className="flex items-center gap-[16px] p-[20px] border-[2px] border-[#EFEFEF] rounded-lg">
              <Image src={vegetables} alt="all" width={28} height={28} />
              <p>VEGETABLES</p>
            </div>
            <div className="flex items-center gap-[16px] p-[20px] border-[2px] border-[#EFEFEF] rounded-lg">
              <Image src={fruits} alt="all" width={28} height={28} />
              <p>FRUITS</p>
            </div>
            <div className="flex items-center gap-[16px] p-[20px] border-[2px] border-[#EFEFEF] rounded-lg">
              <Image src={supplies} alt="all" width={28} height={28} />
              <p>SUPPLIES</p>
            </div>
            <div className="flex items-center gap-[16px] p-[20px] border-[2px] border-[#EFEFEF] rounded-lg">
              <Image src={flowers} alt="all" width={28} height={28} />
              <p>FLOWERS</p>
            </div>
        </div>
    </div>
  )
}

export default HomeSection3