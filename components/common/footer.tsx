import React from "react";

export default function Footer() {
  return (
    <div className="bg-white">
      <footer
        className="w-full rounded-t-[25px]"
        style={{ backgroundColor: "#C11F49" }}
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          {/* <!--Grid--> */}
          <div className="py-7">
            <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <span className="text-sm text-white ">
                Copyright © Consicio 2025, All rights reserved.
              </span>
              <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                <a
                  href="mailto:fudail.zafar@gmail.com"
                  className="w-9 h-9 rounded-full bg-rose-700 flex border border-white justify-center items-center hover:bg-rose-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M2 6L12 13L22 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="2"
                      y="6"
                      width="20"
                      height="12"
                      rx="2"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/fudailzafar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-rose-700 flex justify-center border border-white items-center hover:bg-rose-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.52 21.27 9.52 21V18.93C6.73 19.54 6.14 17.91 6.14 17.91C5.72 16.81 5.09 16.51 5.09 16.51C4.22 15.91 5.16 15.93 5.16 15.93C6.13 16.02 6.63 17.02 6.63 17.02C7.47 18.57 8.97 18.14 9.54 17.86C9.63 17.16 9.91 16.7 10.23 16.44C7.48 16.15 4.62 15.16 4.62 10.93C4.62 9.72 5.08 8.73 5.81 7.97C5.7 7.68 5.3 6.48 5.92 4.92C5.92 4.92 6.84 4.63 9.5 6.17C10.39 5.92 11.34 5.8 12.29 5.8C13.24 5.8 14.2 5.92 15.09 6.17C17.75 4.63 18.67 4.92 18.67 4.92C19.3 6.48 18.89 7.68 18.78 7.97C19.51 8.73 19.97 9.72 19.97 10.93C19.97 15.17 17.1 16.14 14.35 16.43C14.8 16.76 15.18 17.45 15.18 18.43V21C15.18 21.27 15.36 21.59 15.86 21.5C19.83 20.17 22.7 16.42 22.7 12C22.7 6.48 18.22 2 12 2Z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/fudailzafar"
                  className="w-9 h-9 rounded-full bg-rose-700 flex border border-white justify-center items-center hover:bg-rose-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-[1rem] h-[1rem] text-white"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
