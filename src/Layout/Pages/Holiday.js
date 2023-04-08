import React from "react";
import christmas from "../../Componets/light pictures/christmas.jpg"
import { PaintBrushIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import Splider from "./Splider";

export default function Holiday() {
    return (
      <div>
      <div className="relative isolate overflow-hidden bg-gray-700 py-24 sm:py-32">
            <img
              src={christmas}
              alt=""
              className="absolute mix-blend-multiply inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Holiday <span className="text-sky-600">Lighting</span></h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
        Show your holiday spirit with any combination of colors, patterns, or blinking lights.

        </p>
      </div>
    </div>
<div className="bg-white py-24 px-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={christmas}
                alt="christmas photo"
              />
              
              
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Make your house part of every holiday
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                Are you tired of nagging your husband to climb on the roof to get the Holiday lights on every year? Or forking out money for someone else to do it? Make this the last year you ever have to think about that again. Celebrate every holiday this year, from St. Patrick’s Day to the Fourth of July to Halloween to Christmas!
                </p>
              </div>
            </div>
            
            <div className="mt-10 flex">
              <a href="/Quote" className="text-base font-semibold leading-7 text-sky-800">
                Request a free consultation <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="my-36">
        <Splider />
      </div>
      <div className="mt-20 ml-10 mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Any Color Any Holiday
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                Now with Forever Lights, you don’t have to have the same light design every year. Add variety and choose from any combination of colors, patterns, shades, or blinking lights. There are preset color combinations, or create your own with +1,000,000 combinations.
                </p>
              </div>
            </div>
            
            <div className="mt-10 flex">
              <a href="/Quote" className="text-base font-semibold leading-7 text-sky-800">
                Request a free consultation <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={christmas}
                alt="christmas photo"
              />
              
              
            </div>
          </div>
          
        </div>
      </div>
      </div>
  )
}