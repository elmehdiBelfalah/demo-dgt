import React from "react";
import { Button } from "../button/Button";
import "./Search.css";
export default function () {
  return (
    <div className="search-container">
      <div className="card-body container-xxl pt-10 pb-8">
        <div className=" d-flex align-items-center">
          <h1 className="fw-bold me-3 text-white">Search Jobs</h1>
          <span className="fw-bold text-white opacity-50">
            Job Management System
          </span>
        </div>
        <div className="d-flex flex-column">
          <div className="d-lg-flex align-lg-items-center">
            <div className="rounded d-flex flex-column flex-lg-row align-items-lg-center bg-white p-5 w-xxl-850px h-lg-60px me-lg-10 my-5">
              <div className="row flex-grow-1 mb-5 mb-lg-0">
                <div className="col-lg-4 d-flex align-items-center mb-3 mb-lg-0">
                  <span className="svg-icon svg-icon-1 svg-icon-gray-400 me-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mh-50px"
                    >
                      <rect
                        opacity="0.5"
                        x="17.0365"
                        y="15.1223"
                        width="8.15546"
                        height="2"
                        rx="1"
                        transform="rotate(45 17.0365 15.1223)"
                        fill="currentColor"
                      ></rect>
                      <path
                        d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="form-control form-control-flush flex-grow-1"
                    name="search"
                    placeholder="Your Search"
                    value=""
                  />
                </div>
                <div className="col-lg-4 d-flex align-items-center mb-5 mb-lg-0">
                  <div className="bullet bg-secondary d-none d-lg-block h-30px w-2px me-5"></div>
                  <span className="svg-icon svg-icon-1 svg-icon-gray-400 me-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mh-50px"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="9"
                        height="9"
                        rx="2"
                        fill="currentColor"
                      ></rect>
                      <rect
                        opacity="0.3"
                        x="13"
                        y="2"
                        width="9"
                        height="9"
                        rx="2"
                        fill="currentColor"
                      ></rect>
                      <rect
                        opacity="0.3"
                        x="13"
                        y="13"
                        width="9"
                        height="9"
                        rx="2"
                        fill="currentColor"
                      ></rect>
                      <rect
                        opacity="0.3"
                        x="2"
                        y="13"
                        width="9"
                        height="9"
                        rx="2"
                        fill="currentColor"
                      ></rect>
                    </svg>
                  </span>
                  <select
                    className="form-select border-0 flex-grow-1"
                    data-control="select2"
                    data-placeholder="Category"
                    data-hide-search="true"
                  >
                    <option value=""></option>
                    <option value="1">Category</option>
                    <option value="2">In Progress</option>
                    <option value="3">Done</option>
                  </select>
                </div>
                <div className="col-lg-4 d-flex align-items-center">
                  <div className="bullet bg-secondary d-none d-lg-block h-30px w-2px me-5"></div>
                  <span className="svg-icon svg-icon-1 svg-icon-gray-400 me-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mh-50px"
                    >
                      <path
                        opacity="0.3"
                        d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <a
                    href="#"
                    className="btn btn-color-muted px-0 text-start rounded-0 py-1"
                    id="kt_modal_select_location_target"
                  >
                    Location
                  </a>
                </div>
              </div>
              <div className="min-w-150px text-end">
                <button
                  type="submit"
                  className="btn btn-dark"
                  id="kt_advanced_search_button_1"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <a className="fw-bold link-white fs-5" href="#">
                Advanced Search
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
