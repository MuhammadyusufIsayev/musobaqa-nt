'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import star from "@/app/images/star.svg";
import Image from 'next/image';

const HomeSection5 = () => {
  const testimonials = [
    {
      text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. ",
      client: "John Doe",
      date:"12.09.2021"
    },
    {
      text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. ",
      client: "Jane Smith",
      date:"12.09.2021"
    },
    {
      text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. ",
      client: "Alice Johnson",
      date:"12.12.2021"
    },
    {
      text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. ",
      client: "Michael Brown",
      date:"22.3.2021"
    },
  ];

  return (
    <div>
      <div className="flex justify-center items-center pb-[40px] container mx-auto">
        <h2 className="text-[36px] font-bold">What our clients say</h2>
      </div>
      <div className="swiper-container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          initialSlide={1}
          coverflowEffect={{
            rotate: -10,
            stretch: 0,
            depth: 80,
            modifier: 0.8,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="h-[400px]"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center p-6 bg-white rounded-lg mx-2">
              <div className="text-left flex flex-col gap-4">
                <p className="font-semibold text-[18px]">{testimonial.client}</p>
                <p className="text-[14px] italic">{testimonial.date}</p>
                <div className="flex">
                  <Image src={star} alt="star" width={20} height={20} />
                  <Image src={star} alt="star" width={20} height={20} />
                  <Image src={star} alt="star" width={20} height={20} />
                  <Image src={star} alt="star" width={20} height={20} />
                </div>
                <p className="text-lg italic">{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSection5;
