"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { properties10 } from "@/data/properties";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
export default function RelatedProperties() {
  return (
    <section className="section-similar-properties tf-spacing-3">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section mb-32">
              <h2 className="title">Similar Properties</h2>
            </div>
            <div
              className="swiper style-pagination tf-sw-mobile-1 sw-swiper-992"
              data-screen={992}
              data-preview={1}
              data-space={15}
            >
              <div
                className="swiper-wrapper tf-layout-mobile-xl lg-col-3 wrap-agent wow fadeInUp"
                data-wow-delay=".2s"
              >
                {properties10.map((property) => (
                  <div className="swiper-slide" key={property.id}>
                    <div className="box-house hover-img">
                      <div className="image-wrap">
                        <Link href={`/property-detail-v1/${property.id}`}>
                          <Image
                            className="lazyload"
                            data-src={property.imageSrc}
                            alt={property.title}
                            src={property.imageSrc}
                            width={property.imageWidth}
                            height={property.imageHeight}
                          />
                        </Link>
                        <ul className="box-tag flex gap-8">
                          {property.featured && (
                            <li className="flat-tag text-4 bg-main fw-6 text_white">
                              Featured
                            </li>
                          )}
                          {property.forSale && (
                            <li className="flat-tag text-4 bg-3 fw-6 text_white">
                              For Sale
                            </li>
                          )}
                        </ul>
                        <div className="list-btn flex gap-8">
                          <a href="#" className="btn-icon save hover-tooltip">
                            <i className="icon-save" />
                            <span className="tooltip">Add Favorite</span>
                          </a>
                          <a href="#" className="btn-icon find hover-tooltip">
                            <i className="icon-find-plus" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                      </div>
                      <div className="content">
                        <h5 className="title">
                          <Link href={`/property-detail-v1/${property.id}`}>
                            {property.title}
                          </Link>
                        </h5>
                        <p className="location text-1 flex items-center gap-8">
                          <i className="icon-location" /> {property.location}
                        </p>
                        <ul className="meta-list flex">
                          <li className="text-1 flex">
                            <span>{property.beds}</span>Beds
                          </li>
                          <li className="text-1 flex">
                            <span>{property.baths}</span>Baths
                          </li>
                          <li className="text-1 flex">
                            <span>{property.sqft}</span>Sqft
                          </li>
                        </ul>
                        <div className="bot flex justify-between items-center">
                          <h5 className="price">${property.price}</h5>
                          <div className="wrap-btn flex">
                            <a
                              href="#"
                              className="compare flex gap-8 items-center text-1"
                            >
                              <i className="icon-compare" />
                              Compare
                            </a>
                            <Link
                              href={`/property-detail-v1/${property.id}`}
                              className="tf-btn style-border pd-4"
                            >
                              Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="sw-pagination sw-pagination-mb-1 text-center d-lg-none d-block mt-20" />
            </div>
            <Swiper
              className="swiper style-pagination tf-sw-mobile-1 sw-swiper-992"
              spaceBetween={15}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd458",
              }}
            >
              {properties10.map((property) => (
                <SwiperSlide className="swiper-slide" key={property.id}>
                  <div className="box-house hover-img">
                    <div className="image-wrap">
                      <Link href={`/property-detail-v1/${property.id}`}>
                        <Image
                          className="lazyload"
                          data-src={property.imageSrc}
                          alt={property.title}
                          src={property.imageSrc}
                          width={property.imageWidth}
                          height={property.imageHeight}
                        />
                      </Link>
                      <ul className="box-tag flex gap-8">
                        {property.featured && (
                          <li className="flat-tag text-4 bg-main fw-6 text_white">
                            Featured
                          </li>
                        )}
                        {property.forSale && (
                          <li className="flat-tag text-4 bg-3 fw-6 text_white">
                            For Sale
                          </li>
                        )}
                      </ul>
                      <div className="list-btn flex gap-8">
                        <a href="#" className="btn-icon save hover-tooltip">
                          <i className="icon-save" />
                          <span className="tooltip">Add Favorite</span>
                        </a>
                        <a href="#" className="btn-icon find hover-tooltip">
                          <i className="icon-find-plus" />
                          <span className="tooltip">Quick View</span>
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <h5 className="title">
                        <Link href={`/property-detail-v1/${property.id}`}>
                          {property.title}
                        </Link>
                      </h5>
                      <p className="location text-1 flex items-center gap-8">
                        <i className="icon-location" /> {property.location}
                      </p>
                      <ul className="meta-list flex">
                        <li className="text-1 flex">
                          <span>{property.beds}</span>Beds
                        </li>
                        <li className="text-1 flex">
                          <span>{property.baths}</span>Baths
                        </li>
                        <li className="text-1 flex">
                          <span>{property.sqft}</span>Sqft
                        </li>
                      </ul>
                      <div className="bot flex justify-between items-center">
                        <h5 className="price">${property.price}</h5>
                        <div className="wrap-btn flex">
                          <a
                            href="#"
                            className="compare flex gap-8 items-center text-1"
                          >
                            <i className="icon-compare" />
                            Compare
                          </a>
                          <Link
                            href={`/property-detail-v1/${property.id}`}
                            className="tf-btn style-border pd-4"
                          >
                            Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-mb-1 text-center d-lg-none d-block mt-20 spd458" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
