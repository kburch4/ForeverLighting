import React from "react";
import accenttwo from "../../Componets/light pictures/accenttwo.jpg";
import Splider from "./Splider";

export default function Security() {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-700 py-24 sm:py-32">
            <img
              src={accenttwo}
              alt=""
              className="absolute mix-blend-multiply inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Security <span className="text-sky-600">Lighting</span></h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
        Our LED lights will brighten your home so you can keep your property safe from suspicious activity.
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
                src={accenttwo}
                alt="security"
              />
              
              
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Bright Lights
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                Illuminate your home to keep your property safe in the dark of the night. Hear suspicious noises outside? Turn on bright flashing lights to frighten anyone away. While you’re on vacation, give yourself added confidence that your home will light up with our LED lights that last longer and shine brighter.
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
                Timers
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                Timers can be set so your lights turn on or off at a set time. Save your favorite combinations to be used for specific events or holidays. Don’t worry about recreating that customized look every night. Your design will stay saved in the app, and the timer will bring it back on again. Seamlessly transition from holiday lighting to accent lighting by setting the set days that you’d like to decorate for a holiday, and once that date has passed, the timer will bring your lights back to accent lighting. 
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
                src={accenttwo}
                alt="security"
              />
              
              
            </div>
          </div>
          
        </div>
      </div>
      </div>
  )
}