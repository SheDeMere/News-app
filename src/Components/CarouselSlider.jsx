import React from 'react'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

function CarouselSlider (props) {

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img height={600} width={1200} src='https://www.vuelio.com/uk/wp-content/uploads/2019/02/Breaking-News.jpg' alt=""/>
      </SwiperSlide>
      <SwiperSlide>
        <img height={600} width={1200} src='https://lh3.googleusercontent.com/proxy/xIl4qdgr85mRSuwJhmc_BqFTQ1VSKVRlnoCc5XEEZvYBhUSFZulXZbRaaze7SU92GZzjH2oeCsB4zU-VyVs23JKCcAmy8POVvwG7h3YbFl-Q5Sk8BeXK' alt=""/>
      </SwiperSlide>

    </Swiper>
  )
}

export default CarouselSlider