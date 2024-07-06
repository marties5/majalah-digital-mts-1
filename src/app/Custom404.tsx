"use client";
import { GridLayout } from "@/components/Atoms/GridLayout";
import Button from "@/components/Molecules/Button";
import { redirect } from "next/navigation";

const ImageTree = () => (
  <svg
    version="1.0"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="100px"
    height="100px"
    viewBox="-6.4 -6.4 76.80 76.80"
    enableBackground="new 0 0 0 0"
    fill="#000000"
    stroke="#000000"
    strokeWidth="0.000001"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#CCCCCC"
      strokeWidth="0.256"
    />

    <g id="SVGRepo_iconCarrier">
      <g>
        <path
          fill="#45474B"
          d="M47.231,20.893C47.727,19.35,48,17.707,48,16c0-8.836-7.163-16-16-16S16,7.164,16,16 c0,1.707,0.273,3.35,0.769,4.893C10.505,23.062,6,28.998,6,36c0,8.836,7.163,16,16,16c2.125,0,4.146-0.43,6-1.184V63 c0,0.553,0.447,1,1,1h6c0.553,0,1-0.447,1-1V50.816C37.854,51.57,39.875,52,42,52c8.837,0,16-7.164,16-16 C58,28.998,53.495,23.062,47.231,20.893z M34,62h-4V49.842c0.7-0.406,1.371-0.859,2-1.363c0.629,0.504,1.3,0.957,2,1.363V62z M42,50c-2.913,0-5.613-0.895-7.853-2.418L40.73,41H45c0.553,0,1-0.447,1-1s-0.447-1-1-1h-4v-4c0-0.553-0.447-1-1-1s-1,0.447-1,1 v4.898L33,45.9V45V33.414l3.718-3.717c0.391-0.391,0.392-1.025,0.001-1.416s-1.038-0.375-1.429,0.016L32,31.586l-3.332-3.332 c-0.391-0.391-0.934-0.301-1.324,0.09c-0.392,0.393-0.435,0.982-0.044,1.373l3.7,3.699V45v0.898l-6-5.996V35c0-0.553-0.447-1-1-1 s-1,0.447-1,1v4h-4c-0.553,0-1,0.447-1,1s0.447,1,1,1h4.27l6.583,6.582C27.613,49.105,24.913,50,22,50c-7.732,0-14-6.268-14-14 c0-6.871,4.952-12.572,11.48-13.762C18.541,20.359,18,18.244,18,16c0-7.732,6.268-14,14-14s14,6.268,14,14 c0,2.244-0.541,4.359-1.48,6.238C51.048,23.428,56,29.129,56,36C56,43.732,49.732,50,42,50z"
        />
        <path
          fill="#495E57"
          d="M34,62h-4V49.842c0.7-0.406,1.371-0.859,2-1.363c0.629,0.504,1.3,0.957,2,1.363V62z"
        />
        <path
          fill="#F4CE14"
          d="M42,50c-2.913,0-5.613-0.895-7.853-2.418L40.73,41H45c0.553,0,1-0.447,1-1s-0.447-1-1-1h-4v-4 c0-0.553-0.447-1-1-1s-1,0.447-1,1v4.898L33,45.9V45V33.414l3.718-3.717c0.391-0.391,0.392-1.025,0.001-1.416 s-1.038-0.375-1.429,0.016L32,31.586l-3.332-3.332c-0.391-0.391-0.934-0.301-1.324,0.09c-0.392,0.393-0.435,0.982-0.044,1.373 l3.7,3.699V45v0.898l-6-5.996V35c0-0.553-0.447-1-1-1s-1,0.447-1,1v4h-4c-0.553,0-1,0.447-1,1s0.447,1,1,1h4.27l6.583,6.582 C27.613,49.105,24.913,50,22,50c-7.732,0-14-6.268-14-14c0-6.871,4.952-12.572,11.48-13.762C18.541,20.359,18,18.244,18,16 c0-7.732,6.268-14,14-14s14,6.268,14,14 c0,2.244-0.541,4.359-1.48,6.238C51.048,23.428,56,29.129,56,36C56,43.732,49.732,50,42,50z "
        />
      </g>
    </g>
  </svg>
);

export const Custom404 = () => {
  return (
    <GridLayout
      grid="1"
      className="justify-items-center bg-main h-screen overflow-hidden min-h-screen"
    >
      <div className="lg:text-[12rem]  sm:text-[8rem] text-[6rem] font-bold flex items-center text-secondary">
        4
        <span className="mt-10 hover-flip p-4 mx-6 lg:scale-100 scale-50 ring-4 ring-primary rounded-full">
          <ImageTree />
        </span>
        4
      </div>
      <Button
        onClick={() => {
          redirect("/");
        }}
      >
        go to past
      </Button>
      <div className="flex w-full h-12 justify-between mt-32 px-32 ">
        <span className="scale-[5]">
          <ImageTree />
        </span>
        <span className="scale-[5]">
          <ImageTree />
        </span>
      </div>
    </GridLayout>
  );
};
