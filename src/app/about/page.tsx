import image from '../images/banners/AboutBanner.png';
import Image from 'next/image';
import img1 from '../images/images/aboutImage1.png';
import img2 from '../images/images/aboutImage2.png';
import coruselImage1 from '../images/images/coruselImage1.png';
import coruselImage2 from '../images/images/coruselImage2.png';
import coruselImage3 from '../images/images/coruselImage3.png';
import coruselImage4 from '../images/images/coruselImage4.png';

const About = () => {
    return (
        <div className='container mx-auto'>
            <div style={{ backgroundImage: `url(${image.src})`, backgroundSize: 'cover', borderRadius: '40px' }} className="container mx-auto items-center pt-[40px] h-[205px]">
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-[#0D0D0D] text-[48px]  font-bold text-center'>Who we are and what we do</h1>
                    <p className='text-[#70737C] text-[16px] w-[560px]  text-center'>Here you can find a lot of interesting and useful information that you need in gardening and creating a beautiful garden</p>
                </div>
            </div>
            <div className='flex justify-between mt-[40px]'>
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
            <div className='flex justify-between mt-[40px] items-center'>
                <Image src={img2} alt="Logo" width={550} height={550}/>
                <div className='w-[521px]'>
                    <h2 className='text-[#0D0D0D] text-[36px]  font-bold mb-[20px]'>Our story</h2>
                    <p className='mb-[20px]'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p>
                    <p className='mb-[20px]'>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. </p>
                    <p className='mb-[20px]'> Your easy growing experience is our guarantee
                    Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p>
                    <p className='mb-[20px]'> Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>
                </div>
            </div>
            <div>
                <h1 className='text-[#0D0D0D] text-[36px]  font-bold text-center mt-[80px]'>Meet our team</h1>
                <div className='flex justify-between mt-[80px]'>
                    <div>
                        <Image className='rounded-[50%]' src={coruselImage1} alt="Logo" width={220} height={220}/>
                        <p className='text-center text-[22px] font-bold mt-[15px] mb-[20px]'>Leslie Alexander</p>
                        <p className='text-center'>Nursing Assistant</p>
                    </div>
                    <div>
                        <Image className='rounded-[50%]' src={coruselImage2} alt="Logo" width={220} height={220}/>
                        <p className='text-center text-[22px] font-bold mt-[15px] mb-[20px]'>Leslie Alexander</p>
                        <p className='text-center'>Nursing Assistant</p>
                    </div>
                    <div>
                        <Image className='rounded-[50%]' src={coruselImage3} alt="Logo" width={220} height={220}/>
                        <p className='text-center text-[22px] font-bold mt-[15px] mb-[20px]'>Leslie Alexander</p>
                        <p className='text-center'>Nursing Assistant</p>
                    </div>
                    <div>
                        <Image className='rounded-[50%]' src={coruselImage4} alt="Logo" width={220} height={220}/>
                        <p className='text-center text-[22px] font-bold mt-[15px] mb-[20px]'>Leslie Alexander</p>
                        <p className='text-center'>Nursing Assistant</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;