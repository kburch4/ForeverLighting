import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import accent from "../../Componets/light pictures/accent.jpg"
import darkblue from "../../Componets/light pictures/darkblue.jpg"

export default function Splider() {
    return(
        <div>
        <Splide aria-label="My Favorite Images" className="" options={ {
          perMove : 1,
          perPage : 2,
          gap: 20,
          rewind: true,
          pagination: false,
          padding: 40
        } }>
          <SplideSlide>
            <img src={darkblue} alt="Image 1" className="h-auto w-auto shadow-xl rounded-3xl"
            />
          </SplideSlide>
          <SplideSlide>
            <img src={accent} alt="Image 2" className="h-auto w-auto shadow-xl rounded-3xl"/>
          </SplideSlide>
          <SplideSlide>
            <img src={accent} alt="Image 2" className="h-auto w-auto sshadow-xl rounded-3xl"/>
          </SplideSlide>
          <SplideSlide>
            <img src={accent} alt="Image 2" className="h-auto w-auto object-cover object-center shadow-xl rounded-3xl"/>
          </SplideSlide>
          <SplideSlide>
            <img src={accent} alt="Image 2" className="h-auto w-auto object-cover object-center shadow-xl rounded-3xl"/>
          </SplideSlide>
          <SplideSlide>
            <img src={accent} alt="Image 2" className="h-auto w-auto object-cover object-center shadow-xl rounded-3xl"/>
          </SplideSlide>
        </Splide>
        </div>
    )
}