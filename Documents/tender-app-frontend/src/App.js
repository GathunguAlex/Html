import React from 'react'
import './App.css';
//import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"

import {Container,Row, Col, Button , Card, Form} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Container>
        <Button variant="info" size="lg">
          sign in{" "}
        </Button>
        {""}
<Col>
<Row>
        <Form.Group controlId ="formEmail">
  <Form.Label>kra pin </Form.Label>
  <Form.Control type="email" placeholder= "example A00000001AB" />
  <Form.Text className='text-muted'>
    Please Register
  </Form.Text>
</Form.Group>
</Row>

<Row>

        <Form.Group controlId ="formPassword">
  <Form.Label>Password </Form.Label>
  <Form.Control type="Password" placeholder= "Password" />
</Form.Group>
        <Button variant="info" size="lg">
          Login
        </Button>
        {""}
        </Row>

        </Col>


  


        <Card className="mb-3" style={{color: "#000"}}> 
          <Card.Body>
            <Card.Title>Tender Description</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="info" size="lg"> Bid </Button>{""}
          </Card.Body>
        </Card>

        <Card className="mb-3" style={{color: "#000"}}> 
          <Card.Body>
            <Card.Title>Tender Description</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="info" size="lg"> Bid </Button>{""}
          </Card.Body>
        </Card>

        <Card className="mb-3" style={{color: "#000"}}> 
          <Card.Body>
            <Card.Title>Tender Description</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="info" size="lg"> Bid </Button>{""}
          </Card.Body>
        </Card>

        </Container>
      </header>
    </div>
  );
}

export default App;
