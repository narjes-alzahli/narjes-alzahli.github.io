import React, { Component } from "react";
import "./App.css";
import head from "./assets/head.jpg";
import comp from "./assets/comp.png";
import brain from "./assets/brain.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import gmail from "./assets/gmail.png";
import about from "./assets/cat-about.png";
import { Container, Row, Image, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Content from "./Content.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 1,
    };
  }

  componentDidUpdate() {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <Container fluid className="App" style={{ padding: "1%" }}>
        <Col>
          <Row className="justify-content-md-center">
            <Image
              className="m-3 click"
              src={head}
              roundedCircle
              height="200px"
              width="200px"
              onClick={() => {
                this.setState((state) => ({ content: 0 }));
              }}
            />
          </Row>
          <Row
            className="justify-content-md-center letter hidden"
            style={{ textAlign: "center" }}
          >
            <p>
              <br />
              Hello! I'm Anya Ji :)
              <br /> I major in computer science (M.Eng.) & psychology (B.A.) @ Cornell
              University.
            </p>
          </Row>

          <Row className="justify-content-md-center">
            <a href="https://github.com/anya-ji">
              <Image
                className="m-3 click"
                src={github}
                roundedCircle
                height="50px"
              />
            </a>
            <a href="https://www.linkedin.com/in/anya-ji/">
              <Image
                className="m-3 click"
                src={linkedin}
                roundedCircle
                height="50px"
              />
            </a>
            <a href="mailto:aj592@cornell.edu">
              <Image
                className="m-3 click"
                src={gmail}
                roundedCircle
                height="50px"
              />
            </a>
          </Row>
          <Row className="justify-content-md-center">
            <Button
              className="m-4 letter click"
              style={{ textAlign: "center" }}
              variant="outline-light"
              onClick={() => {
                this.setState((state) => ({ content: 1 }));
              }}
            >
              <Image
                className="mb-4 mt-2 ml-4 mr-4"
                src={about}
                height="110px"
              />
              <p>About</p>
            </Button>
            <Button
              className="m-4 letter click"
              style={{ textAlign: "center" }}
              variant="outline-light"
              onClick={() => {
                this.setState((state) => ({ content: 2 }));
              }}
            >
              <Image className="m-4" src={comp} height="95px" />
              <p>Computer Science</p>
            </Button>
            <Button
              className="m-4 letter click"
              style={{ textAlign: "center" }}
              variant="outline-light"
              onClick={() => {
                this.setState((state) => ({ content: 3 }));
              }}
            >
              <Image className="m-3" src={brain} height="100px" />
              <p>Psychology</p>
            </Button>
          </Row>

          <Row className="justify-content-md-center">
            <Content content={this.state.content} />
          </Row>
        </Col>
      </Container>
    );
  }
}

export default App;
