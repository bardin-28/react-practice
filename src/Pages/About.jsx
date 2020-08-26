import React from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'

const About = () => {
    return (
        <>
            <Container>
                <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="first"
                >
                    <Row>
                        <Col sm={3}>
                            <Nav
                                variant="pills"
                                className="flex-column mt-2"
                            >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://images.ctfassets.net/ooa29xqb8tix/XOqFmDmhA2w8owcY2SW8m/5af316d96977e86ac59ec0649331b0b6/2018-08-22_21-02-48.jpeg"></img>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat itaque ducimus sunt magni eius ipsam quos dolorem minima magnam distinctio.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://www.roberthalf.com/sites/default/files/2018-11/teamwork-in-the-workplace-rh.jpg"></img>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat itaque ducimus sunt magni eius ipsam quos dolorem minima magnam distinctio.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://learnworthy.net/wp-content/uploads/2019/12/Why-programming-is-the-skill-you-have-to-learn-1280x720.jpg"></img>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat itaque ducimus sunt magni eius ipsam quos dolorem minima magnam distinctio.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://miro.medium.com/max/3840/1*4cFhtuq6zRDqJ6p4s2pQ6g.jpeg"></img>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat itaque ducimus sunt magni eius ipsam quos dolorem minima magnam distinctio.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://media.startup-studio.ru/image/post14-management.jpg"></img>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat itaque ducimus sunt magni eius ipsam quos dolorem minima magnam distinctio.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </>
    );
}

export default About;
