import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";

const slides = [
  {
    img: "/src/assets/future-forest-stewardship.png",
    title: "Join the Future Forest Challenge",
    subtitle: "Contribute to sustainable reforestation",
  },
  {
    img: "/src/assets/hand-with-plant.png",
    title: "Plant a Tree, Save a Life",
    subtitle: "Track your impact and inspire others",
  },
  {
    img: "/src/assets/leaves-full-hand.png",
    title: "Be an Eco Hero Today",
    subtitle: "Small steps, big change for our planet",
  },
];

const Banner = () => {
  return (
    <section className="w-full h-[450px] relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full rounded-2xl overflow-hidden"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="relative">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl">{slide.subtitle}</p>
              <button className="flex items-center justify-center gap-2 mt-4 bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg text-white font-semibold">
                View Challenge <FaArrowRightLong />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;