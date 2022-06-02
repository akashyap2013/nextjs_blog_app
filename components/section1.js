import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';

export default function section1() {

    SwiperCore.use([Autoplay])

    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: "right"
    }

  return (
    <section className="py-16" style={bg}>
        <div className="container mx-auto md:px-20">
            <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

            <Swiper
                slidesPerView={1}
                // loop={true}
                // autoplay= {{
                //     delay: 2000
                // }}
                >
                <SwiperSlide>{ Slide() }</SwiperSlide>
                <SwiperSlide>{ Slide() }</SwiperSlide>
                <SwiperSlide>{ Slide() }</SwiperSlide>
                <SwiperSlide>{ Slide() }</SwiperSlide>
                <SwiperSlide>{ Slide() }</SwiperSlide>
            ...
            </Swiper>

            
        </div>
    </section>
  )
}

function Slide(){
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={"/"}><a><Image src={"/images/img1.jpg"} width={600} height={600} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
                    <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
                <Author></Author>
            </div>
        </div>
    )
}