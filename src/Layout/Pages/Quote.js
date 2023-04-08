import React, { useState, useRef } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from '@emailjs/browser';
import Modal from './Modal';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Quote() {
  //datepicker
  const d = new Date();
  const [agreed, setAgreed] = useState(false)
  const [startDate, setStartDate] = useState(
    d.setHours(d.setMinutes(new Date(), 0), 9)
  );
  
  let handleColor = (time) => {
    return time.getHours() > 11 ? "text-success" : "text-error";
  };
  
  const isWeekday = (date) => {
       
    return date.getDay() !== 0;

  }
  const timeFrame = (hour) => {
    const currentDate = new Date();
    const selectedDate = new Date(hour);
    return (hour.getHours() === 9 | hour.getHours() === 10 | hour.getHours() === 11| hour.getHours() === 12 | hour.getHours() === 13 | hour.getHours() === 14 | hour.getHours() === 15 | hour.getHours() === 16 | hour.getHours() === 17 && currentDate.getTime() < selectedDate.getTime())
  }
  //modal
  const [modalOn, setModalOn] = useState(false);
  

  const clicked = () => {
    setModalOn(true)
  }
  //emailjs
  const form = useRef();  
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_2rjtivs', 'template_dihete8', form.current, 'VqQeqtB8uHEkx8vbj')
      .then((result) => {
          clicked();
      }, (error) => {
          console.log(error.text);
      });
  };
  
  
  return (
    
    <div className="isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
      
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Request a Quote</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          We will come give you a free quote and demo so you know what you are buying. Fill out the form to set your appointment.
        </p>
      </div>
      <form action="#" ref={form} onSubmit={sendEmail} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first_name"
                id="first-name"
                required
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last_name"
                id="last-name"
                required
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email_address"
                id="email"
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              
              <input
                type="tel"
                name="phone_number"
                id="phone-number"
                autoComplete="tel"
                required
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="address" className="block text-sm font-semibold leading-6 text-gray-900">
              Address
            </label>
            <div className="relative mt-2.5">
              
              <input
                type="address"
                name="address"
                id="address"
                autoComplete="address"
                required
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                />
            </div>
          </div>
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              City
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="city"
                id="city"
                required
                autoComplete="home city"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              State
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="state"
                id="state"
                required
                autoComplete="home state"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <fieldset className="sm:col-span-2">
                  <legend className="block text-sm font-semibold leading-6 text-gray-900">Receive Quote by:</legend>
                  <div className="justify-center my-6 text-sm leading-6 grid grid-cols-4 text-gray-600">
                    
                    <div className="flex gap-x-2.5">
                      <input
                        id="request_email"
                        name="request_form"
                        defaultValue="email"
                        type="radio"
                        className="mt-1 h-4 w-4 border-gray-300 border-0 text-sky-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-sky-600"
                      />
                      <label htmlFor="request-email">Email</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        id="request_phone"
                        name="request_form"
                        defaultValue="phone"
                        type="radio"
                        className="mt-1 h-4 w-4 border-gray-300 border-0 text-sky-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-sky-600"
                      />
                      <label htmlFor="request-phone">Phone</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        id="request_appointment"
                        name="request_form"
                        defaultValue="appointment"
                        type="radio"
                        className="mt-1 h-4 w-4 border-gray-300 border-0 text-sky-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-sky-600"
                      />
                      <label htmlFor="request-appointment">In-person appointment</label>
                    </div>
                  </div>
                </fieldset>
          
          <div className="sm:col-span-2">
            <label htmlFor="date" className="block text-sm font-semibold leading-6 text-gray-900">
              Date & Time
            </label>
            <div className="mt-2.5">
                <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                filterTime={timeFrame}
                filterDate={isWeekday}
                minDate={new Date()}
                timeIntervals={60}
                timeClassName={handleColor}
                name='day_time'
                dateFormat="MMMM d, yyyy h:mm aa"
                id="date"
                autoComplete="off"
                placeholderText="Only for Appointment"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                />
            </div>
          </div>
            
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            value="Send"
            className="block w-full rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            href="/"
            
          >
            Submit
          </button>
          
      {modalOn && < Modal setModalOn={setModalOn}/>}

        </div>
      </form>
    </div>
  )
}
