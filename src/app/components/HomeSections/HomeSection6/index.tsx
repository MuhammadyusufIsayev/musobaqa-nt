import React from 'react'
import Image from 'next/image';
import img1 from '@/app/images/images/aboutImage1.png'

const HomeSection6 = () => {
  return (
    <div className="container mx-auto">
        <div className='flex justify-between mt-[100px]'>
                <div className='w-[521px]'>
                    <h2 className='text-[#0D0D0D] text-[36px]  font-bold mb-[20px]'>Seedra helps to grow fast and efficiant</h2>
                    <p className='mb-[20px]'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p>
                    <p className='mb-[20px]'>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. </p>
                    <p className='mb-[20px]'> Your easy growing experience is our guarantee
                    Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p>
                    <p className='mb-[20px]'> Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>
                </div>
                <Image src={img1} alt="Logo" width={630} height={550}/>
            </div>
    </div>
  )
}

export default HomeSection6