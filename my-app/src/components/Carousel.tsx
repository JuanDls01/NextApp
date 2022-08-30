import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { TechLogo } from './ui/TechLogo';
import { ImgUrls } from '../utils/ImgUrls';

export const Carousel = () => {
    return(
        <div className='my-2 h-40'>
            <Swiper
                spaceBetween={50}
                slidesPerView={4}
                rewind={true}
                // pagination={true}
                // modules={[ Pagination]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='flex justify-center items-center h-full'
            >
            {
                ImgUrls.map(img => {
                    return(
                        <SwiperSlide
                        className='flex justify-center items-center h-100'>
                            <TechLogo src={img} />
                            {/* <Image src={img} objectFit='fill' width={100} height={100}/> */}
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>
        </div>
    )
}