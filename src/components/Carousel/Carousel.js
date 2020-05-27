import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import p01 from '../../images/slide01.jpg';
import p02 from '../../images/slide02.jpg';
import p03 from '../../images/slide03.jpg';
import p04 from '../../images/slide04.jpg';
import p05 from '../../images/slide05.jpg';
import "./Carousel.css";

const Car = () => {
    const imgList = [p01, p02 ,p03, p04, p05];
    return (
        <div className="Slider">
            <Carousel interval={3000} >
                {imgList.map((img) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img}
                            alt="slide..."
                        />
                        <Carousel.Caption>
                            <h3>Slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </ Carousel>
        </div>
    );
};

export default Car;