import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Give us a call or text at:",
    description: "(208)-284-9932",
    icon: PhoneIcon,
  },
  {
    name: "Email/Message us at:",
    description: "foreverlighting.co@gmail.com",
    icon: EnvelopeIcon,
  },
];
export default function Contact() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-center">
          Contact Us
        </h1>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              We look forward to hearing from you!
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have any questions about our lights? Contact us and 
              we will help you with all questions and concerns.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-sky-800">
                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    );
  }