import React from 'react';
import { Container, Form, FormGroup, FormCheck, Button } from 'react-bootstrap';

const Contacts = () => {
    return (
        <>
            <Container style={{ width: "500px" }}>
                <h1 className="text-center">Contact us</h1>
                <Form>
                    <FormGroup controlId="formBasicEmail">
                        <Form.Label>Email adress</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text>We'll never share your email with anyone else</Form.Text>
                    </FormGroup>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Example text</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <FormCheck type="checkbox" label="Check me out"></FormCheck>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        </>
    );
}

export default Contacts;
