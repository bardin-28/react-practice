import React from 'react';
import { Container, CardDeck, Card, CardImg, Button } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';

const Home = () => {
    return (
        <>
            <CarouselBox />
            <Container className="mb-5">
                <h2 className="text-center m-4" >Out team</h2>
                <CardDeck>
                    <Card>
                        <CardImg
                            variant="top"
                            height={200}
                            src="https://dynamicbusiness.com.au/wp-content/uploads/2019/08/Copy-of-DB-article-size-4-5.png"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Card.Text>
                        </Card.Body>
                        <Button variant="primary">About team</Button>
                    </Card>
                    <Card>
                        <CardImg
                            variant="top"
                            height={200}
                            src="https://theundercoverrecruiter.com/wp-content/uploads/2018/11/mimi-thian-737030-unsplash-e1542984929600.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Designers</Card.Title>
                            <Card.Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Card.Text>
                        </Card.Body>
                        <Button variant="primary">About team</Button>
                    </Card>
                    <Card>
                        <CardImg
                            variant="top"
                            height={200}
                            src="https://s22581.pcdn.co/wp-content/uploads/2019/09/IT-team-security-assets-.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Managers</Card.Title>
                            <Card.Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Card.Text>
                        </Card.Body>
                        <Button variant="primary">About team</Button>
                    </Card>
                </CardDeck>
            </Container>
        </>
    );
}

export default Home;
