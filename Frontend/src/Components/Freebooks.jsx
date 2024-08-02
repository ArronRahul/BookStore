import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

export default function Freebooks() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1324,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1314,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 934,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const fildata = list.filter((data) => data.category === "Free");
    console.log(fildata);

    return (
        <>
        <div>
            <div className='max-w-screen-2xl container max-auto md:px-20 px-4 p-3'>
                <h1 className='font-bold'>Free offered Courses</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla non suscipit, iure neque earum?</p> 
            </div>
            <div className='max-w-screen-2xl container max-auto md:px-20 px-4 top-7 flex justify-center'>
                <div className='w-full'>
                    <Slider {...settings}>
                        {fildata.map((item) => (
                            <div key={item.id} className='px-2'>
                                <Cards item={item} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
        </>
    );
}
