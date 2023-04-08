import React from "react"
import accent from "../Componets/light pictures/accent.jpg"
import darkblue from "../Componets/light pictures/darkblue.jpg"
import multi from "../Componets/light pictures/multi.jpg"
import './Home.css';
import { SunIcon, GiftIcon, DevicePhoneMobileIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Quote from "./Pages/Quote"
import Splider from "./Pages/Splider"
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const faqs = [
  {
    question: "Can they be used for other holidays besides Christmas?",
    answer:
      "Yes! Forever Lights are designed to be used all year round. Our energy-efficient LED lights are designed for holidays and events, accent lighting, and security. Investing in permanent lights will quickly pay off the more you use them.",
  },
  {
    question: "Where do my lights go?",
    answer:
    "The lights are installed underneath your roofline behind the trim piece of your house. All wiring is enclosed in a metal casing making the light’s framework unnoticeable from the street. On top of that, we can color-match the casing, making the framework virtually invisible."
  },
  {
    question: "Do I have to plug them in every night?",
    answer:"Nope! A controller is installed with the lights that connect to the app for use on your phone."
  },
  {
    question: "Can I turn the lights on when I’m not home?",
    answer:
    "Yes! Using Wi-Fi, turn the lights on or off wherever you are."
  },
  {
    question: "How much do permanent lights cost?",
    answer:
    "Cost is calculated per square foot of your home. Contact us for a low-price quote that you can’t find anywhere else. We have the best rates in the Treasure Valley without compromising quality. We consistently offer referral programs and discounts for you to keep more money in your pocket!"
  },
]

const features = [
  {
    name: 'Celebrate Every Holiday',
    description:
      'Our LED lights are designed for every season. Show your holiday spirit, cheer on your favorite sports team, or celebrate a birthday with any combination of colors, patterns, and blinking lights.',
    icon: GiftIcon,
  },
  {
    name: 'Accent your House',
    description:
      'Whether you’re looking to accent your home or add additional security, our energy-efficient LED white lights can do both! Adjust the brightness and hue of white to increase your home’s security and add a touch of elegance.',
    icon: LockClosedIcon,
  },
  {
    name: 'Day or Night',
    description:
      "Forever Lights are installed underneath your house’s trim with enclosed wires. And with our color-matching system, your light's enclosure is completely invisible during the day, adding security and illuminating your home at night.",
    icon: SunIcon,
  },
  {
    name: 'Control From Your Phone',
    description:
      'Using the app, turn the lights on and off, add timers, and choose from +1,000,000 color combinations. You can change even a single lightbulb with a push of a button. Your creativity is limitless!',
    icon: DevicePhoneMobileIcon,
  },
]
const stats = [
    { id: 1, name: 'Color combinations', value: '+1,000,000' },
    { id: 2, name: 'preset combinations', value: '100' },
    { id: 3, name: 'Different color sequences', value: '500' },
  ]
   
  
  export default function Home() {
    
    return (
        <><div className="relative overflow-hidden bg-white">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg -mt-20">
                    <h1 className="pt-10 pb-15 text-5xl text-black font-extrabold font-teko">Forever <span className="text-sky-600">Lighting</span></h1>
                    
                        <p className="mt-10 text-xl text-gray-500">
                            Never put lights back on with Forever Lighting and celebrate every event all year.
                        </p>
                        <div>
                            <button 
                            href="/Quote"
                            className="inline-block rounded-md border border-transparent bg-sky-600 py-3 px-8 text-center font-medium text-white hover:bg-sky-700 mt-10"
                            >
                            Request Free Quote
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="mt-10 pd-6">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 -left-20 lg:mx-auto lg:w-full lg:max-w-7x1"
                            >
                              
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8 h-auto w-auto">
                                        
                                                <img
                                                    src={accent}
                                                    alt=""
                                                    className="h-full w-full object-cover object-center shadow-xl rounded-3xl" />
                                            
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
          <div className="relative isolate overflow-hidden bg-gray-800 py-24 sm:py-32">
            <img
              src={multi}
              alt=""
              className="absolute mix-blend-multiply inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Every feature for any of your needs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Design your house for every Holdiay, Game, or just for the everyday. Use our easy to use app to
            make your lights any way you want them.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4 rounded-lg">
            
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={accent} alt="Image one" className="rounded-3xl" />}
              itemTwo={<ReactCompareSliderImage src={darkblue} alt="Image two" className="rounded-3xl"/>}
              
            />
      
            </div>
          
        <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Bright at Night and Invisible by Day
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                The lights are installed underneath the house’s roofline, making them unnoticeable from the street during the day. To make them even more invisible, we offer color matching so the light’s casing will match the trim piece of your house, giving them the ultimate disguise.
                </p>
              </div>
              <div className="mt-10 flex">
              <a href="/Quote" className="text-base font-semibold leading-7 text-sky-800">
                Request a free consultation <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            </div>
            </div>
           </div>
          </div>
         </div>   
    <div className="relative isolate overflow-hidden bg-gray-700 py-24 sm:py-32">
      <img
        src={darkblue}
        alt=""
        className="absolute mix-blend-multiply inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-1xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Control everything from your phone</h2>
          <h4 className="mt-6 text-lg leading-8 text-white">
            Use our app to change to any colors, set timers, and even create a new sequence.
          </h4>
        </div>
      <div className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-white">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    </div>
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h1 className="text-4xl font-bold leading-10 tracking-tight text-grey-900">Frequently asked questions</h1>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6 text-amber-600" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6 text-amber-600" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <div>
      <Splider />
    </div>
    <div>
      <Quote />
    </div>    
    </>
    )
  }
  