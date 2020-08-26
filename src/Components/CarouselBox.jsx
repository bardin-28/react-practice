import React from 'react';
import { Carousel } from 'react-bootstrap';
import forestImg1 from '../assets/img/forest1.jpg';
import forestImg2 from '../assets/img/forest2.jpg';
import forestImg3 from '../assets/img/forest3.jpg';

const CarouselBox = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        src={forestImg1}
                        alt="forest1"
                        className="w-100 d-block"
                        height="670"
                    />
                    <Carousel.Caption>
                        <h3>forest 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, voluptates.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={forestImg2}
                        alt="forest2"
                        className="w-100 d-block"
                        height="670"
                    />
                    <Carousel.Caption>
                        <h3>forest 2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, voluptates.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={forestImg3}
                        alt="forest3"
                        className="w-100 d-block"
                        height="670"
                    />
                    <Carousel.Caption>
                        <h3>forest 3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, voluptates.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default CarouselBox;
