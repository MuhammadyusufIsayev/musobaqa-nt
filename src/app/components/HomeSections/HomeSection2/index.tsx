import image from '../../../images/banners/b.png';

const HomeSection2 = () => {
    return (
        <div style={{ backgroundImage: `url(${image.src})`, borderRadius: '40px' }} className="container mx-auto h-[105px] my-[16px] flex flex-col items-center justify-center">
            <h3 className='text-[#1F2533] text-[24px] font-bold'>We sell seeds </h3>
            <p className='text-[#70737C] text-[16px] font-semibold'>that always sprout and gardening supplies which never break</p>
        </div>
    );
}

export default HomeSection2;