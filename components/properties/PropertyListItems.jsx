import { properties11 } from "@/data/properties";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PropertyListItems({ showItems = properties11.length }) {
  return (
    <>
      {properties11.slice(0, showItems).map((property, i) => (
        <div key={i} className="box-house style-list hover-img">
          <div className="image-wrap">
            <Link href={`/property-detail-v1/${property.id}`}>
              <Image
                className="lazyload"
                alt=""
                src={property.imageSrc}
                width={600}
                height={401}
              />
            </Link>
            <ul className="box-tag flex gap-8">
              <li className="flat-tag text-4 bg-main fw-6 text_white">
                Featured
              </li>
              <li className="flat-tag text-4 bg-3 fw-6 text_white">For Sale</li>
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
            <p className="location text-1 flex items-center gap-6">
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
              <h5 className="price">${property.price.toLocaleString()}</h5>
              <div className="wrap-btn flex">
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
      ))}
    </>
  );
}
