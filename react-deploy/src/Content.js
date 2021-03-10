import React, { Component } from "react";
import triviac from "./assets/triviac.jpg";
import mercury from "./assets/mercury.png";
import fitnux from "./assets/fitnux.png";
import ocaml from "./assets/ocaml.png";
import women from "./assets/women.png";
import amp from "./assets/amp.png";
import coming from "./assets/coming.jpg";
import aclab from "./assets/aclab.png";
import psichi from "./assets/psichi.png";
import { Container, Row, Image, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";
import booksmart from "./assets/booksmart.png";
import booksmart_demo from "./assets/booksmart_demo.png";

class Content extends Component {
  bio() {
    return (
      <Container fluid className="App">
        <Col xs={6}>
          <p className="title hidden" style={{ textAlign: "left" }}>
            <br />
            <br /> {">>> WHY BOTH?"}
            <br />
          </p>
          <p className="letter hidden" style={{ textAlign: "left" }}>
            I’ve always been asked: why computer science and psychology?
            <br />
            <br />
            I'm interested in cognitive science, which is an interdisciplinary
            field that integrates knowledge in computer science, psychology,
            linguistics, philosophy, etc. I'm curious about human language and
            the mechanisms for cognitive processes, as well as how to simulate
            human responses using machine learning techniques. I believe having
            a strong background in both computer science and psychology can give
            me a deeper insight into cognitive science.
            <br />
            <br />
            Additionally, I had a lot of fun making my ideas into actual
            applications - from online office hours platform to menstrual health
            game and more. As an aspiring full-stack developer, currently I've
            been focusing on iOS and web apps. I mostly work with
            UIKit/SwiftUI/ReactJS for frontend and Firebase/Firestore/SQL for
            backend. I'm looking forward to learning more about software
            development and creating more impactful projects!
            {/* <br />
            <br />
            -- In a nutshell, I'm still figuring out exactly what to do with
            them in the future, but here's the TLDR: I love both fields so much
            that I just had to major in both! */}
          </p>

          <br />

          <p className="title hidden" style={{ textAlign: "left" }}>
            <br />
            {">>> ON CAMPUS"}
            <br />
          </p>
          <p className="letter hidden" style={{ textAlign: "left" }}>
            On campus, I work as teaching assistant for Object-Oriented
            Programming in Java and research assistant at Attention, Memory, and
            Perception Lab.
            <br />
            <br />
            I'm also a software developer at Engineering World Health, student
            ambassador at College of Arts & Sciences, and member of Phi Chi, the
            International Honors Society in Psychology.
          </p>

          <br />

          <p className="title hidden" style={{ textAlign: "left" }}>
            <br />
            {">>> HOBBIES"}
            <br />
          </p>
          <p className="letter hidden" style={{ textAlign: "left" }}>
            In my spare time, I enjoy dancing ballet and playing the piano,
            which I've been doing since childhood.
            <br />
            <br />
            Besides, I love exploring languages - I can speak Mandarin fluently,
            learned German for 7 years, and took a year of American Sign
            Language in college.
          </p>
        </Col>
      </Container>
    );
  }

  comp() {
    return (
      <Container fluid className="App">
        <Col xs={6}>
          <Row className="pt-4">
            <Image src={triviac} roundedCircle height="150px" />

            <Col>
              <p className="title">TRIVIAC - TRIVIA GAMES</p>
              <p className="letter">
                An iOS app for generating, playing, and archiving single- or
                multi-player trivia games. <br />
                Built with UIKit, Firebase, and OpenTriviaDatabase.
                <br />
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

          <br />

          <Row className="pt-4">
            <Image src={mercury} roundedCircle height="150px" />

            <Col>
              <p className="title">MERCURY - ONLINE OFFICE HOURS </p>
              <p className="letter">
                Frustrated by unorganized online office hours? Try this
                all-in-one platform built with React for better online office
                hours experiences! Supports separate roles for students and TAs,
                queuing, and video/audio conferencing.
                <br />
                Designed mock-ups on Figma and implemented UI components with
                SemanticUI, worked with Google OAuth for user login and web
                sockets to signal joining/leaving calls and broadcast messages,
                and made API calls with Axios to update the server with current
                users.
              </p>
            </Col>
          </Row>
          <br />
          <Row className="player-wrapper justify-content-center">
            <ReactPlayer
              className="react-player"
              url="video/mercury_demo.mp4"
              controls={true}
            />
          </Row>

          <br />

          <Row className="pt-4">
            <Image src={women} roundedCircle height="150px" />

            <Col>
              <p className="title">HEALTH FRIEND</p>
              <p className="letter">
                A tablet game to help women in low-resource areas in India to
                learn about their own bodies and menstrual health, partnered
                with Barefoot College in India.
                <br />
                Work on the software subteam of Engineering World Health at
                Cornell University.
                <br />
                Use Kivy in Python to build the front end and Firebase for the
                backend.
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://github.com/Cornell-Engineering-World-Health/womens-health-game"
                >
                  {"GitHub"}
                </Button>
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href=" https://play.google.com/store/apps/details?id=org.cornellewh.healthfriend"
                >
                  {"Google Play Store"}
                </Button>
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://ewh.engineering.cornell.edu/about"
                >
                  {"Cornell Engineering World Health"}
                </Button>
              </p>
            </Col>
          </Row>

          <br />

          <Row className="pt-4">
            <Image src={ocaml} roundedCircle height="150px" />
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

          <br />
          {/* 
          <Row className="pt-4">
            <Image src={fitnux} roundedCircle height="150px" width="150px" />

            <Col>
              <p className="title">FITNUX - FITNESS APP</p>
              <p className="letter">
                Workout with friends! - an iOS app integrating workouts and
                social media. <br />
                Work primarily as front-end developer on the social media
                section and organize data on Firestore.
              </p>
            </Col>
          </Row> */}

          <Row className="pt-4">
            <Image src={booksmart} roundedCircle height="150px" width="150px" />

            <Col>
              <p className="title">BOOKSMART - BOOK EXCHANGE</p>
              <p className="letter">
                An iOS app for selling and purchasing second-hand textbooks on
                campus. <br />
                Lead a team of 6 with a designer and developers and work on both
                iOS and backend.
                <br />
                Use UIKit to create informative yet easy-to-navigate UI; support
                real-time messaging with Firestore; create efficient relational
                database models of user and book information with SQLite3; store
                images on Amazon S3, and deploy the database using Docker and
                Heroku.
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
          <br />
          <Row className="player-wrapper justify-content-center">
            <Image src={booksmart_demo} height="500px" />
          </Row>
        </Col>
      </Container>
    );
  }

  psych() {
    return (
      <Container fluid className="App">
        <Col xs={6}>
          <Row className="pt-4">
            <Image src={amp} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Research Assistant at Attention, Memory & Perception Lab
                <br />
                (Feb.2020 - Present)
              </p>
              <p className="letter">
                Work under Professor Khena Swallow on event segmentation.
                <br /> <br />
                Currently leading a research on event segmentation and racial
                prejudice.
                <br /> <br />
                Developed a computer program for the experiment with PsychoPy
                that lets the subject segment and label video clips when a
                change in action or goals is perceived and collects segmentation
                timestamps, to study how people perceive actions and goals.
                <br /> <br />
                Analyzed recall error types and semantic similarity among
                sentences, nouns, and verbs on a subset of free recall data from
                an event segmentation task.
                <br /> <br />
                Attend weekly lab meetings with grad students and professor and
                discuss papers on attention, memory, and perception.
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
            <Image src={psichi} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Member of Phi Chi, the International Honors Society in
                Psychology <br />
                (Oct.2020 - Present)
              </p>
              <p className="letter">
                Attend grad school workshops and social networking events in the
                field of psychology.
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
            <Image src={aclab} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Research Assistant at Affect & Cognition Lab <br />
                (Oct.2019 - Feb.2020)
              </p>
              <p className="letter">
                Completed Human Subjects Research (IRB) Training.
                <br /> <br />
                Worked with graduate student Saeedeh Sadeghi studying the
                correlation between time perception and orienting response.
                <br /> <br />
                Prepared ECG electrodes, proctored experiments with student
                subjects and entered data on computer.
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
  }

  render() {
    if (this.props.content === 1) {
      return this.bio();
    } else if (this.props.content === 2) {
      return this.comp();
    } else if (this.props.content === 3) {
      return this.psych();
    } else {
      return <></>;
    }
  }
}

export default Content;
