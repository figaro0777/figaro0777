import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import p01 from '../../images/slide01.jpg';
import p02 from '../../images/slide02.jpg';
import p03 from '../../images/slide03.jpg';
import p04 from '../../images/slide04.jpg';
import p05 from '../../images/slide05.jpg';

const Car = () => {
    return (
        <Carousel interval={3000} >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={p01}
                    alt="slide 01"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={p02}
                    alt="slide 02"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={p03}
                    alt="slide 03"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={p04}
                    alt="slide 04"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={p05}
                    alt="slide 05"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Car;