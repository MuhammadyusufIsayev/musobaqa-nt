import image from '../../../images/banners/HomeHeaderBacground.png';

const HomeSection1 = () => {
    return (
        <div
            style={{ backgroundImage: `url(${image.src})`, borderRadius: '40px' }}
            className="container mx-auto p-10 bg-slate-800 bg-no-repeat bg-cover h-[455px]"
        >
            <h1 className="text-[#0D0D0D] text-[48px] font-bold w-[670px]">SEEDRA Basil Seeds for Indoor and Outdoor Planting</h1>
            <p className='text-[#70737C] text-[16px] w-[560px] font-light'>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee</p>
        </div>
    );
}

export default HomeSection1;
