import React, { Component } from "react";
import "./App.css";
import head from "./assets/head.jpg";
import comp from "./assets/comp.png";
import brain from "./assets/brain.png";
import triviac from "./assets/triviac.jpg";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import gmail from "./assets/gmail.png";
import amp from "./assets/amp.png";
import { Container, Row, Image, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
        <Container fluid className="App">
          <Row>
            <Col xs={4}>
              <Row className="pb-5">
                <Image src={head} roundedCircle height="200px" />
              </Row>

              <Col>
                <a href="https://github.com/anya-ji">
                  <Image
                    src={github}
                    roundedCircle
                    height="50px"
                  />
                </a>
              </Col>
              <Col>
                <p className="letter">{`Github`}</p>
              </Col>

              <Col>
                <a href="https://www.linkedin.com/in/anya-ji/">
                  <Image
                    src={linkedin}
                    roundedCircle
                    height="50px"
                  />
                </a>
              </Col>
              <Col>
                <p className="letter">{`LinkedIn`}</p>
              </Col>

              <Col>
                <a href="mailto:anyaj0109@gmail.com">
                  <Image
                    src={gmail}
                    roundedCircle
                    height="50px"
                  />
                </a>
              </Col>
              <Col>
                <p className="letter">{`Email`}</p>
              </Col>
            </Col>

            <Col xs={6}>
              <Row>
                <h3 className="letter">
                  Hey, I'm Anya!
                  <br />
                  <br />
                  I'm currently a sophomore at Cornell University, majoring in
                  computer science and psychology.
                  <br />
                  <br /> And this is still under construction lol
                  <br />
                  <br /> .
                  <br />
                  <br /> .
                  <br />
                  <br /> .
                </h3>
              </Row>

              <Row className="pt-4">
                <Col xs={4}>
                  <Image src={comp} roundedCircle height="100px" />
                </Col>

                <Col>
                  <a href="https://apps.apple.com/app/id1515983515">
                    <Image
                      src={triviac}
                      roundedCircle
                      height="90px"
                    />
                  </a>
                  <Col>
                    <p className="letter">{`Check out a trivia game on iOS`}</p>
                  </Col>
                </Col>
              </Row>

              <Row>
                <Col xs={4}>
                  <Image src={brain} roundedCircle height="90px" />
                </Col>

                <Col>
                  <a href="https://amp-lab.psych.cornell.edu/">
                    <Image
                      src={amp}
                      roundedCircle
                      height="85px"
                    />
                  </a>
                  <Col>
                    <p className="letter">{`Research assistant at Attention, Memory, and Perception Lab`}</p>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default App;
