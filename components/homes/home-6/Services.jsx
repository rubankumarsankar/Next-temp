"use client";

import { services } from "@/data/services";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Pagination } from "swiper/modules";
export default function Services() {
  return (
    <div className="section-service section-style style-border-top tf-spacing-7">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-68 gap-33">
              <div className="title text-display-4 text_white split-text effect-right">
                <SplitTextAnimation text="Have a look at our services" />
              </div>
              <p
                className="text-1 text-color1 wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                Our vision is to be the premier real estate company in New York,
                recognized for our unwavering <br />
                commitment to excellence, innovation, and community impact. We
                aspire to create lasting value for our <br />
                clients, employees, and the communities we serve.
              </p>
            </div>
            <Swiper
              dir="ltr"
              className="swiper sw-layout mb_38 style-pagination mb-56"
              spaceBetween={15}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination]}
              pagination={{
                el: ".spd16",
              }}
            >
              {services.map((service, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div
                    className="service-item style-1 hover-image-2 effec-icon wow animate__fadeInLeft animate__animated"
                    data-wow-delay={service.delay}
                  >
                    <div className="icon">
                      <i className={service.icon} />
                    </div>
                    <div className="img-style">
                      <Image
                        className="lazyload"
                        data-src={service.imageSrc}
                        alt=""
                        width={400}
                        height={290}
                        src={service.imageSrc}
                      />
                    </div>
                    <div className="content text-center">
                      <div className="text-11 fw-6 text_white title mb-16">
                        <a href="#" className="text_white link">
                          {service.title}
                        </a>
                      </div>
                      <p className="text-1 text-color1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-layout text-center mt-20 spd16" />
            </Swiper>
            <a
              href="#"
              className="tf-btn bg-color-primary height-1 pd-25 rounded-cycle mx-auto btn-border"
            >
              View all services <i className="icon-arrow-right-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
