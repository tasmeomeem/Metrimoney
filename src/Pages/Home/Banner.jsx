import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "../../assets/Image/Banner/banner1.jpg";
import banner2 from "../../assets/Image/Banner/banner2.png";
import banner3 from "../../assets/Image/Banner/banner3.png";
import banner4 from "../../assets/Image/Banner/banner4.png";
import banner5 from "../../assets/Image/Banner/banner5.png";

const Banner = () => {
    return (
        // <Carousel className='container mx-auto'>
        //     <div>
        //         <img src={banner1} className='lg:h-[900px]  md:h-[700px] ' alt="Banner 1" />
        //     </div>
        //     <div>
        //         <img src={banner2} className='lg:h-[900px]  md:h-[700px] ' alt="Banner 2" />
        //     </div>
        //     <div>
        //         <img src={banner3} className='lg:h-[900px]  md:h-[700px] ' alt="Banner 3" />
        //     </div>
        //     <div>
        //         <img src={banner4} className='lg:h-[900px]  md:h-[700px] ' alt="Banner 4" />
        //     </div>
        //     <div>
        //         <img src={banner5} className='lg:h-[900px]  md:h-[700px] ' alt="Banner 5" />
        //     </div>
        // </Carousel>
       
        <Carousel showThumbs={false}>
            <div>
                <img src={banner1} className="lg:h-[500px] " alt="Banner 1" />
            </div>
            <div>
                <img src={banner2} className=" lg:h-[500px]" alt="Banner 2" />
            </div>
            <div>
                <img src={banner3} className="lg:h-[500px] " alt="Banner 3" />
            </div>
            <div>
                <img src={banner4} className=" lg:h-[500px]" alt="Banner 4" />
            </div>
            <div>
                <img src={banner5} className="lg:h-[500px] " alt="Banner 5" />
            </div>
        </Carousel>

    );
};

export default Banner;
