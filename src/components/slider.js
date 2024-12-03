import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

export default function Slider(props) {
  return (
    <div className="w-full ">
      <Swiper className="mySwiper">
        {props.images.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="w-full h-[400px] bg-slate-100 relative">
              <div className="absolute px-2 px-3 py-2 text-white bg-black bottom-4">
                <h1 className="text-2xl">{item.title}</h1>
              </div>
              <Image
                src={item.image}
                alt="product"
                width={1920}
                height={1080}
                className="object-contain w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
