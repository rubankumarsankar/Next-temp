import React from "react";
import MapComponent from "../common/MapComponent";
import DropdownSelect from "../common/DropdownSelect";
import SearchForm from "../common/SearchForm";

import PropertyGridItems2 from "./PropertyGridItems2";

export default function Properties5() {
  return (
    <section className="section-property-map">
      <div className="wrap-map">
        <div
          id="map"
          className="row-height"
          data-map-zoom={16}
          data-map-scroll="true"
        >
          <MapComponent zoom={14} />
        </div>
      </div>
      <div className="content-right">
        <div className="wg-filter relative style-3">
          <div className="form-title style-2">
            <form className="w-226">
              <fieldset>
                <input type="text" placeholder="Address, City, ZIP..." />
              </fieldset>
            </form>

            <DropdownSelect
              options={[
                "Status",
                "Bungalow",
                "Apartment",
                "House",
                "Smart Home",
                "Office",
              ]}
            />
            <DropdownSelect
              options={[
                "Type",
                "Bungalow",
                "Apartment",
                "House",
                "Smart Home",
                "Office",
              ]}
            />
            <DropdownSelect
              options={[
                "Baths",
                "Floating baths",
                "Massage baths",
                "Floor-standing bath",
                "Built-in baths",
              ]}
            />
            <DropdownSelect
              options={[
                "Beds",
                "Twin beds",
                "Bunk beds",
                "Kids beds",
                "Single bed",
              ]}
            />
            <div className="wrap-btn searchFormToggler">
              <div className="btn-filter show-form">
                <div className="icons">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 4H14"
                      stroke="#F1913D"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 4H3"
                      stroke="#F1913D"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12H12"
                      stroke="#F1913D"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12H3"
                      stroke="#F1913D"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 20H16"
                      stroke="#F1913D"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 20H3"
                      stroke="#F1913D"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 2V6"
                      stroke="#F1913D"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 10V14"
                      stroke="#F1913D"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 18V22"
                      stroke="#F1913D"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <a href="#" className="tf-btn bg-color-primary pd-3 pd-20">
                Search <i className="icon-MagnifyingGlass fw-6" />
              </a>
            </div>
          </div>
          <SearchForm parentClass="wd-search-form style-2" />
        </div>
        <div className="box-title">
          <h2>Property listing</h2>
          <div className="group-layout">
            <DropdownSelect
              addtionalParentClass="select-filter list-sort"
              options={["Sort by (Default)", "Newest", "Oldest"]}
            />
          </div>
        </div>
        <div className="tf-grid-layout-3 xxl-col-3 sm-col-2">
          <PropertyGridItems2 />
        </div>
        <div className="wrap-pagination">
          <p className="text-1">Showing 1-8 of 42 results.</p>
          <ul className="wg-pagination justify-center">
            <li className="arrow">
              <a href="#">
                <i className="icon-arrow-left" />
              </a>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            <li className="active">
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">...</a>
            </li>
            <li>
              <a href="#">20</a>
            </li>
            <li className="arrow">
              <a href="#">
                <i className="icon-arrow-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
