import React, { Component } from "react";
import "./App.css";
import head from "./assets/head.jpg";
import comp from "./assets/comp.png";
import brain from "./assets/brain.png";
import triviac from "./assets/triviac.jpg";
import github from "./assets/github.png";
import { Container, Row, Image, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <body className="App">
        <Container fluid>
          <Row className="p-3">
            <Col xs={4}>
              <Image src={head} roundedCircle height="200px" />
            </Col>
            <Col>
              <h3 className="letter">
                hey
                <br />
                something
              </h3>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 2, offset: 3 }}>
              <Image src={comp} roundedCircle height="150px" />
            </Col>
            <Col>
              <h3 className="letter" style={{ fontSize: 20 }}>
                {`• Check out a trivia game on iOS >>`}
              </h3>
            </Col>
            <Col>
              <a href="https://apps.apple.com/app/id1515983515">
                <Image
                  src={triviac}
                  roundedCircle
                  height="100px"
                  onClick="https://apps.apple.com/app/id1515983515"
                />
              </a>
            </Col>
            <Col>
              <h3 className="letter" style={{ fontSize: 20 }}>
                {`• My github`}
              </h3>
            </Col>
            <Col>
              <a href="https://github.com/anya-ji">
                <Image
                  src={github}
                  roundedCircle
                  height="100px"
                  onClick="https://github.com/anya-ji"
                />
              </a>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 3, offset: 3 }}>
              <Image src={brain} roundedCircle height="150px" />
            </Col>
            <Col>
              <h3 className="letter">psych stuff</h3>
            </Col>
          </Row>
        </Container>
      </body>
    );
  }
}

export default App;
