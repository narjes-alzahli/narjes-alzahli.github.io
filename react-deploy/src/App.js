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
import coming from "./assets/coming.jpg";
import aclab from "./assets/aclab.png";
import { Container, Row, Image, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link } from "react-router-dom";

const Home = () => (
  <Container fluid className="App">
    <Row>
      <Col xs={4}>
        <Row className="pb-5">
          <Image src={head} roundedCircle height="200px" />
        </Row>

        <Col>
          <a href="https://github.com/anya-ji">
            <Image src={github} roundedCircle height="50px" />
          </a>
        </Col>
        <Col>
          <p className="letter">{`Github`}</p>
        </Col>

        <Col>
          <a href="https://www.linkedin.com/in/anya-ji/">
            <Image src={linkedin} roundedCircle height="50px" />
          </a>
        </Col>
        <Col>
          <p className="letter">{`LinkedIn`}</p>
        </Col>

        <Col>
          <a href="mailto:anyaj0109@gmail.com">
            <Image src={gmail} roundedCircle height="50px" />
          </a>
        </Col>
        <Col>
          <p className="letter">{`Email`}</p>
        </Col>
      </Col>

      <Col xs={6}>
        <Row>
          <p className="letter">
            Hey, I'm Anya!
            <br /> I'm a sophomore at Cornell University, majoring in <br />
            computer science and psychology.
            <br />
            <br /> My main interests include software engineering,
            human-computer interaction, and cognitive science.
            <br />
            <br /> Currently I'm developing a few iOS and web apps.
            <br /> I also work as research assistant at psychology labs.
            <br /> On campus, I'm a student ambassador at College of Arts &
            Sciences.
            <br />
            <br /> In my spare time, I enjoy dancing ballet and playing the
            piano.
            <br /> Besides, I love exploring languages - I can also speak
            Mandarin and German and took a year of American Sign Language.
          </p>
        </Row>

        <Row className="pt-4">
          <Col xs={4}>
            <Image src={comp} roundedCircle height="100px" />
          </Col>

          <Col>
            <Link to="/compsci">
              {
                <Button className="mt-4 letter" variant="outline-light">
                  {"Computer Science ➜"}
                </Button>
              }
            </Link>
          </Col>
        </Row>

        <Row className="pt-4">
          <Col xs={4}>
            <Image src={brain} roundedCircle height="90px" />
          </Col>

          <Col>
            <Link to="/psych">
              <Button className="mt-4 letter" variant="outline-light">
                {"Psychology ➜"}
              </Button>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

const CompSci = () => (
  <Container fluid className="App">
    <Col xs={6}>
      <Row className="pb-4">
        <Link to="/">
          {
            <Button className="mt-4 letter" variant="outline-light">
              {"< Back"}
            </Button>
          }
        </Link>
      </Row>

      <Row className="pt-4">
        <a href="https://apps.apple.com/app/id1515983515">
          <Image src={triviac} roundedCircle height="90px" />
        </a>
        <Col>
          <p className="title">TRIVIAC</p>
          <p className="letter">
            An iOS app for generating, playing, and archiving single- or
            multi-player trivia games. <br />
            ⬅︎ Click on the icon to download from App Store!
          </p>
        </Col>
      </Row>

      <Row className="pt-4">
        <a href="">
          <Image src={coming} roundedCircle height="90px" width="90px" />
        </a>
        <Col>
          <p className="title">FITNESS APP (in progress)</p>
          <p className="letter">
            Workout with friends! - an iOS app integrating workouts and social
            media. Work primarily as front-end developer on the social media
            section and organize data on Firestore.
          </p>
        </Col>
      </Row>

      <Row className="pt-4">
        <a href="">
          <Image src={coming} roundedCircle height="90px" />
        </a>
        <Col>
          <p className="title">MERCURY (in progress)</p>
          <p className="letter">
            Frustrated by unorganized online office hours? Try this all-in-one
            platform built with React for better online office hours
            experiences! Supporting separate roles for students and TAs,
            queuing, and video/audio conferencing.
          </p>
        </Col>
      </Row>
    </Col>
  </Container>
);

const Psych = () => (
  <Container fluid className="App">
    <Col xs={6}>
      <Row className="pb-4">
        <Link to="/">
          {
            <Button className="mt-4 letter" variant="outline-light">
              {"< Back"}
            </Button>
          }
        </Link>
      </Row>

      <Row className="pt-4">
        <a href="https://amp-lab.psych.cornell.edu/">
          <Image src={amp} roundedCircle height="85px" width="85px" />
        </a>
        <Col>
          <p className="title">
            Research Assistant at Attention, Memory & Perception Lab
          </p>
          <p className="letter">
            Developed computer program for the experiment with PsychoPy
            (Python).
            <br />
            Work with graduate student Karen and Professor Swallow on event
            segmentation.
            <br />
            Attend weekly lab meetings and discuss weekly papers.
          </p>
        </Col>
      </Row>

      <Row className="pt-4">
        <a href="http://aclab.human.cornell.edu/">
          <Image src={aclab} roundedCircle height="85px" width="85px" />
        </a>
        <Col>
          <p className="title">
            Research Assistant at Affect & Cognition Lab (Oct.2019 - Feb.2020)
          </p>
          <p className="letter">
            Completed Human Subjects Research (IRB) Training.
            <br />
            Worked with graduate student Saeedeh studying the correlation
            between time perception and orienting response.
            <br />
            Prepared ECG electrodes, proctored experiments with student subjects
            and entered data on computer.
          </p>
        </Col>
      </Row>
    </Col>
  </Container>
);

class App extends Component {
  render() {
    return (
      <>
        <Route exact={true} path="/" render={Home} />
        <Route exact={true} path="/compsci" render={CompSci} />
        <Route exact={true} path="/psych" render={Psych} />
      </>
    );
  }
}

export default App;
