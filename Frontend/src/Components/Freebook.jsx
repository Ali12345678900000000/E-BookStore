import React, { useEffect, useState } from 'react'
// import list from '../../public/List.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from 'axios'


const Freebook = () => {


    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4000/book")
                const data = res.data.filter((data) => data.category === "free");
                console.log(data);
                setBook(data);
            } catch (error) {
                console.log('error: ', error)
            }
        }
        getBook();
    }, [])  //pass empty array so it runs only once


    // const filterdata = list.filter((data) => data.category === "free");
    // console.log(filterdata);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: false,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1,
                    infinite: false,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    arrows: false
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-10 px-4'>
                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free offered courses</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quos obcaecati expedita necessitatibus esse facilis.</p>
                </div>
                <div className=''>
                    <Slider {...settings}>
                        {book.map((item, index) => (
                            <Card item={item} key={index} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freebook;