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
import mercury from "./assets/mercury.png";
import fitnux from "./assets/fitnux.png";
import ocaml from "./assets/ocaml.png";
import psichi from "./assets/psichi.png";
import { Container, Row, Image, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link } from "react-router-dom";
import ReactPlayer from "react-player";

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
          <p className="letter">{`GitHub`}</p>
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
            Hey, I'm Anya Ji!
            <br /> I'm a sophomore at Cornell University, majoring in <br />
            computer science and psychology.
            <br />
            <br /> My main interests include software engineering, natural
            language processing, and cognitive science.
            <br />
            <br /> I've been developing a few iOS and web apps.
            <br /> I also work as course consultant for object-oriented
            programming and research assistant at psychology labs.
            <br /> On campus, I'm a software developer at Engineering World
            Health,
            <br /> a student ambassador at College of Arts & Sciences, and a
            member
            <br /> of Phi Chi, the International Honors Society in Psychology.
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
        <Image src={triviac} roundedCircle height="90px" />

        <Col>
          <p className="title">TRIVIAC - TRIVIA GAMES</p>
          <p className="letter">
            An iOS app for generating, playing, and archiving single- or
            multi-player trivia games. <br />
            <Button
              className="mt-4 mr-4 letter"
              variant="outline-light"
              href="https://github.com/anya-ji/triviac"
            >
              {"GitHub"}
            </Button>
            <Button
              className="mt-4 letter"
              variant="outline-light"
              href="https://apps.apple.com/app/id1515983515"
            >
              {"App Store"}
            </Button>
          </p>
        </Col>
      </Row>
      <Row className="player-wrapper justify-content-center">
        <ReactPlayer
          className="react-player"
          url="video/triviac_demo.mov"
          controls={false}
          loop
          playing
        />
      </Row>

      <Row className="pt-4">
        <Image src={fitnux} roundedCircle height="90px" width="90px" />

        <Col>
          <p className="title">FITNUX - FITNESS APP (in progress)</p>
          <p className="letter">
            Workout with friends! - an iOS app integrating workouts and social
            media. <br />
            Work primarily as front-end developer on the social media section
            and organize data on Firestore.
          </p>
        </Col>
      </Row>

      <Row className="pt-4">
        <Image src={mercury} roundedCircle height="90px" />

        <Col>
          <p className="title">MERCURY - ONLINE OFFICE HOURS </p>
          <p className="letter">
            Frustrated by unorganized online office hours? Try this all-in-one
            platform built with React for better online office hours
            experiences! Supports separate roles for students and TAs, queuing,
            and video/audio conferencing.
          </p>
        </Col>
      </Row>
      <Row className="player-wrapper justify-content-center">
        <ReactPlayer
          className="react-player"
          url="video/mercury_demo.mp4"
          controls={true}
        />
      </Row>

      <Row className="pt-4">
        <Image src={ocaml} roundedCircle height="90px" />
        <Col>
          <p className="title">ANAGRAMS</p>
          <p className="letter">
            A multiplayer terminal game in OCaml for customizable anagrams
            games, with different difficulty levels and various game rules.
            <br />
            Integrated Anagramica API to validate created words.
            <br />
            Final project for functional programming (CS 3110). Collaborated
            with Bahar Tehranipoor and Ashley Yu.
            <br />
            <Button
              className="mt-4 mr-4 letter"
              variant="outline-light"
              href="https://github.coecis.cornell.edu/bt277/cs3110-proj"
            >
              {"GitHub"}
            </Button>
          </p>
        </Col>
      </Row>
      <Row className="player-wrapper justify-content-center">
        <ReactPlayer
          className="react-player"
          url="video/anagrams_demo.mp4"
          controls={false}
          loop
          playing
        />
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
        <Image src={psichi} roundedCircle height="85px" width="85px" />
        <Col>
          <p className="title">
            Member of Phi Chi, the International Honors Society in Psychology
            (Oct.2020 - Present)
          </p>
          <p className="letter">
            Attend grad school workshops and social networking events in the field of psychology.
            <br />
            <Button
              className="mt-4 mr-4 letter"
              variant="outline-light"
              href="https://www.instagram.com/psi_chi_cornell/?hl=en"
            >
              {"Psi Chi Cornell"}
            </Button>
          </p>
        </Col>
      </Row>

      <Row className="pt-4">
        <Image src={amp} roundedCircle height="85px" width="85px" />
        <Col>
          <p className="title">
            Research Assistant at Attention, Memory & Perception Lab (Feb.2020 -
            Present)
          </p>
          <p className="letter">
            Developed computer program for the experiment with PsychoPy
            (Python).
            <br />
            Work with graduate student Karen Sasmita and Professor Khena Swallow
            on event segmentation.
            <br />
            Attend weekly lab meetings and discuss weekly papers.
            <br />
            <Button
              className="mt-4 mr-4 letter"
              variant="outline-light"
              href="https://github.com/anya-ji/event-coding"
            >
              {"GitHub/Event-coding"}
            </Button>
            <Button
              className="mt-4 mr-4 letter"
              variant="outline-light"
              href="https://amp-lab.psych.cornell.edu/"
            >
              {"AMP Lab"}
            </Button>
          </p>
        </Col>
      </Row>

      <Row className="pt-4">
        <Image src={aclab} roundedCircle height="85px" width="85px" />
        <Col>
          <p className="title">
            Research Assistant at Affect & Cognition Lab (Oct.2019 - Feb.2020)
          </p>
          <p className="letter">
            Completed Human Subjects Research (IRB) Training.
            <br />
            Worked with graduate student Saeedeh Sadeghi studying the
            correlation between time perception and orienting response.
            <br />
            Prepared ECG electrodes, proctored experiments with student subjects
            and entered data on computer.
            <br />
            <Button
              className="mt-4 mr-4 letter"
              variant="outline-light"
              href="http://aclab.human.cornell.edu/"
            >
              {"AC Lab"}
            </Button>
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
