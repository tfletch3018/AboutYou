import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";
import pic3 from "./images/pic3.jpg";
import pic4 from "./images/pic4.jpg";
import pic5 from "./images/pic5.jpg";
import pic6 from "./images/pic6.jpg";
import pic7 from "./images/pic7.jpg";
import pic8 from "./images/pic8.jpg";
import pic9 from "./images/pic9.jpg";
import pic10 from "./images/pic10.jpg";
import "./style.css"

function Carousel1() {
    return (

        <div className="carousel-wrapper">
            <Carousel className="style" infiniteLoop useKeyboardArrows autoPlay>

                <div className="slides" id="">
                    <img src={pic1} id="" alt="" />
                    <div className="carousel-caption">
                        <h3>Photo by <a href="https://unsplash.com/@marekpiwnicki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marek Piwnicki</a> on <a href="https://unsplash.com/photos/a-mountain-range-covered-in-snow-under-a-pink-sky-NaGIz8xQQgM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </h3>
                    </div>
                </div>
                <div className="slides" id="">
                    <img src={pic2} id="" alt="" />
                    <div className="carousel-caption">
                        <h3>Photo by <a href="https://unsplash.com/@sleepless_explorer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kush Dwivedi</a> on <a href="https://unsplash.com/photos/Sw6FQiT23Rc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></h3>
                    </div>
                </div>
                <div className="slides" id="">
                    <img src={pic3} id="" alt="" />
                    <div className="carousel-caption">
                        <h3>Photo by <a href="https://unsplash.com/@brewbottle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bob Brewer</a> on <a href="https://unsplash.com/photos/a-large-iceberg-in-the-middle-of-the-ocean-S1GkPL8X-K0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></h3>
                    </div>
                </div>
                <div className="slides">
                    <img src={pic4} id="" alt="" />
                    <div className="carousel-caption">
                        <h3>Photo by <a href="https://unsplash.com/@beewhy001?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bayo Adegunloye</a> on <a href="https://unsplash.com/photos/a-field-of-yellow-flowers-with-green-leaves--ugX-8nqdNA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </h3>
                    </div>
                </div>
                <div className="slides">
                    <img src={pic5} id="" alt="" />
                    <div className="carousel-caption">
                        <h3>Photo by <a href="https://unsplash.com/@ld91?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Laurent Degradi</a> on <a href="https://unsplash.com/photos/7xw7WUjJmYQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </h3>
                    </div>
                </div>
                <div className="slides" id="">
                    <img src={pic6} id="" alt="" />
                    <div className="carousel-caption">
                        <h3>Photo by <a href="https://unsplash.com/@marekpiwnicki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marek Piwnicki</a> on <a href="https://unsplash.com/photos/a-mountain-range-covered-in-snow-under-a-pink-sky-NaGIz8xQQgM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </h3>
                    </div>
                </div>
                <div className="slides" id="">
                    <img src={pic7} id="" alt="" />
                    <div className="carousel-caption">
                        <h3>Photo by <a href="https://unsplash.com/@andreilazar9?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andrei Lazar</a> on <a href="https://unsplash.com/photos/a-mountain-covered-in-fog-and-trees-DNJzF0u3l9U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></h3>
                    </div>
                </div>
                <div className="slides" id="">
                    <img src={pic8} id="" alt="" />
                    <div className="carousel-caption">
                        <h3>Photo by <a href="https://unsplash.com/@kristinokarlsen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kristin O Karlsen</a> on <a href="https://unsplash.com/photos/a-bunch-of-flowers-that-are-in-the-grass-8MbC94WBOO4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></h3>
                    </div>
                </div>
                <div className="slides" id="">
                    <img src={pic9} id="" alt="" />
                    <div className="carousel-caption">
                        <h3>Photo by <a href="https://unsplash.com/@hectorjp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hector John Periquin</a> on <a href="https://unsplash.com/photos/the-sun-is-shining-over-a-snowy-mountain-range-zFv5_cKJqs0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></h3>
                    </div>
                </div>
                <div className="slides" id="">
                    <img src={pic10} id="" alt="" />
                    <div className="carousel-caption">
                        <h3>Photo by <a href="https://unsplash.com/@sguruli?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Salomé Guruli</a> on <a href="https://unsplash.com/photos/-rWVoaO8_1M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></h3>
                    </div>
                </div>

            </Carousel>
        </div>
    );
}

export default Carousel1;