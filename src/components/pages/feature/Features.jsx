import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Features = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold text-center mt-16 mb-4'>Try our featured items</h1>
            <p className='text-center text-xl font-semibold'>Slide to see more!</p>
            <div className='lg:w-[90%] w-[97%] rounded mx-auto'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    className='h-96'
                >
                    <SwiperSlide>
                        <img src="https://i.ibb.co/kySnKzd/feature-1.jpg" className="w-full h-full rounded " />
                        <p className='absolute left-40 top-4 font-bold text-white text-2xl '>Delicious chicken curry with smashed potato...</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/SV9N7pc/feature-2.jpg" className="w-full h-full rounded" />
                        <p className='absolute left-40 top-4 font-bold text-white text-2xl '>Homemade bun with vagetables inside.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/vJjt0BH/feature-3.jpg" className="w-full h-full rounded" />
                        <p className='absolute left-40 top-4 font-bold text-white text-2xl '>Crispy eggs!</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/0tktFWW/feature-4.jpg" className="w-full h-full rounded" />
                        <p className='absolute left-40 top-4 font-bold text-white text-2xl '>Muglai with half boiled egg...</p>
                    </SwiperSlide>
                    ...
                </Swiper>
            </div>
        </div>
    );
};

export default Features;