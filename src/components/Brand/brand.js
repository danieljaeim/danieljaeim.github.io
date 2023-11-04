import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../Brand/brand.css";
import { Swiper, SwiperSlide } from 'swiper/react';

/*--------------------
* Brand
----------------------*/
function Brand(props){
    return(
        <>
            <div className="p-5 text-center d-flex align-items-center justify-content-center w-100">
                <img className="brand-icon-color" src={props.brand_icon} title="Brand" alt="Brand"/>
            </div>
        </>
    )
}

/*--------------------
* Brand Slider
----------------------*/
export default function BrandSlider() {
    const Brand_list = [
        { id:1, brand_icon: 'img/aws-brand.svg'},
        { id:2, brand_icon: 'img/desmos-brand.svg'},
        { id:3, brand_icon: 'img/berkeley-logo.svg'}
        // { id:4, brand_icon: 'img/brand-4.svg'},
        // { id:5, brand_icon: 'img/brand-5.svg'},
        // { id:6, brand_icon: 'img/brand-6.svg'},
        // { id:7, brand_icon: 'img/brand-7.svg'},
    ]

    return (
        <>
            <div className="bg-slate-800 py-">
                <div className="container">
                    <Swiper 
                        spaceBetween={20} 
                        slidesPerView={5}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            992:{
                                slidesPerView:3,
                            },
                            1024:{
                                slidesPerView:4,
                            },
                            1200:{
                                slidesPerView:5,
                            },
                        }}
                    >
                        {
                            Brand_list.map((val, i)=>{
                              return <SwiperSlide key={i}><Brand brand_icon={val.brand_icon}/></SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}
