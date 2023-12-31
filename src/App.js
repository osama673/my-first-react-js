import './App.css';

import React from "react";

import { Navbar, Card, Container } from "react-bootstrap";

//import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
//import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">NavBar</Navbar.Brand>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                      Dank memes
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Container>
        </Navbar>
        <h1 className="text-center mt-4">Welcome to React-Bootstrap</h1>
        <div className="d-flex justify-content-around mt-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://th.bing.com/th/id/R.e4e7f7876eacaaa492b0e7ef99f57eb0?rik=ZkdteyLT1FyPXQ&riu=http%3a%2f%2fwww.autodata1.com%2fmedia%2ftoyota%2fpics%2ftoyota-land-cruiser-76-hzj76-%5b10919%5d.jpg&ehk=b8ZePH87uierkCrySPw6cpYYsfsUakaUKtVqBU66Hlw%3d&risl=&pid=ImgRaw&r=0"
            />
            <Card.Body>
              <Card.Title>
                Toyota Land Cruiser 76 (HZJ76) 4.2 TD (204 Hp)
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/86/37/81/8637819c60efe083be1bc7d876dcd4b8.jpg"
            />
            <Card.Body>
              <Card.Title>SUZUKI JIMNY</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://auto-drive.pt/wp-content/uploads/2020/05/2020-mercedes-amg-g63-tuning-hofele-1.jpg"
            />
            <Card.Body>
              <Card.Title>Mercedes-AMG G63</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;


