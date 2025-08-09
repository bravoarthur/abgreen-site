
"use client";

import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import { services } from "@/data/services";
import { features } from "@/data/features";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Parallax, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";

export default function Home() {
  return (
    <div>
      {/* Intro */}
      <section className="flex flex-col items-center justify-center h-auto min-h-[500px] bg-garden-green text-white relative py-8">
        <h1 className="text-4xl font-bold text-center sm:text-3xl mt-4">
          Your Local Experts in Lawn & Garden Care
        </h1>
        <p className="mt-4 text-center text-lg sm:text-base">
          Professional Gardening Services in the Northern Beaches and Surrounding Areas.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
        <Link
          href="/contact"
          className="mt-8 mb-8 px-6 py-3 bg-gray-100 text-garden-green rounded-lg hover:bg-light-garden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 sm:px-5 sm:py-3 sm:text-md sm:font-bold"
        >
          Request a Quote
        </Link>
      </section>

      {/* Carrossel Parallax */}
      <div className="py-12 px-4">
        <h2 className="text-2xl font-semibold text-center sm:text-xl">Our Services</h2>
        <div className="mt-8 max-w-[1000px] mx-auto">
          <Swiper
            modules={[Pagination, Parallax, Autoplay]}
            speed={700}
            parallax={true}
            loop={true}
            centeredSlides={true}                 // important para centralizar
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              // use values fracionados para "peek" dos slides adjacentes
              770: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 2.50, spaceBetween: 14 },
            }}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {/* Parallax background (colocado como primeiro filho do Swiper) */}
            <div
              slot="container-start"
              className="pointer-events-none absolute inset-0 bg-center bg-cover opacity-30"
              style={{ backgroundImage: 'url("/images/garden-bg.jpg")' }}
              data-swiper-parallax="-110%"
            ></div>

            {services.map((service) => (
              // center each slide's content so it doesn't stretch full width
              <SwiperSlide key={service.id} className="flex justify-center">
                {/* Outer wrapper limits width and gets stronger parallax */}
                <div className="w-[390px]  px-2" data-swiper-parallax="-10">
                  {/* Inner wrapper com parallax mais leve (cria profundidade em camadas) */}
                  <div data-swiper-parallax="-4">
                    {/* ServiceCard precisa ser responsivo; o wrapper acima garante largura controlada */}
                    <ServiceCard
                      id={service.id}
                      title={service.title}
                      description={service.description}
                      image={service.image}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}





/*
"use client";

import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import FeatureCard from '@/components/FeatureCard';
import { services } from '@/data/services';
import { features } from '@/data/features';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function Home() {
  return (
    <div>
      
      <section className="flex flex-col items-center justify-center h-auto min-h-[500px] bg-garden-green text-white relative py-8">
        <h1 className="text-4xl font-bold text-center sm:text-3xl mt-4">Your Local Experts in Lawn & Garden Care</h1>
        <p className="mt-4 text-center text-lg sm:text-base">Professional Gardening Services in the Northern Beaches and Surrounding Areas.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
        <Link
          href="/contact"
          className="mt-8 mb-8 px-6 py-3 bg-gray-100 text-garden-green rounded-lg hover:bg-light-garden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 sm:px-5 sm:py-3 sm:text-md sm:font-bold"
        >
          Request a Quote
        </Link>
      </section>

      <div className="py-12 px-4">
        <h2 className="text-2xl font-semibold text-center sm:text-xl">Our Services</h2>
        <div className="mt-8 max-w-5xl mx-auto">
          <Swiper
            effect="coverflow"
            modules={[Navigation, Pagination, EffectCoverflow]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            navigation
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 2,
              stretch: 370,
              depth: 80,
              modifier: 1,
              slideShadows: true,
            }}
            className="mySwiper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <ServiceCard
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
*/
