import React, { Component } from "react";
import triviac from "./assets/triviac.jpg";
import ocaml from "./assets/ocaml.png";
import women from "./assets/women.png";
import amp from "./assets/amp.png";
import coming from "./assets/coming.jpg";
import booksmart from "./assets/booksmart.png";
import booksmart_demo from "./assets/booksmart_demo.png";
import wholesome from "./assets/wholesome.png";
import quolesomeness from "./assets/quolesomeness.png";
import seg from "./assets/seg.jpg";
import inspirit from "./assets/inspirit.jpg";
import teaching1 from "./assets/teaching1.jpg";
import classes from "./assets/classes.jpg";
import rtc from "./assets/rtc.jpg";
import alyssano from "./assets/alyssano.jpg";
import paris from "./assets/paris.jpg";
import cambridge_logo from "./assets/cambridge_logo.jpg";
import greymatters from "./assets/greymatters.jpg";
import davachi from "./assets/davachi.jpg";
import neurotech from "./assets/neurotech.jpg";

import { Container, Row, Image, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";

class Content extends Component {
  bio() {
    return (
      <Container fluid className="App">
        <Col xs={12} md={5}>
          <p className="letter hidden" style={{ textAlign: "left" }}>
            <br />I graduated from Columbia University in 2023 with B.A. in
            Computer Science and Psychology.
            <br />
            <br />
            Academically, I'm so fascinated about the brain. 
            I want to understand the cognitive mechanism behind our perception of time
            and how we segment our continuous experience into discrete events.
            <br />
            <br />
            I'm also passionate about math and building a computational model 
            of state transitions in the brain.
          </p>

          <p className="title hidden" style={{ textAlign: "left" }}>
            {"/research"}
          </p>

          <p className="letter hidden" style={{ textAlign: "left" }}>
            • I've been working with an{" "}
            <a
              href={"https://naturalistic-data.org/content/Event_Segmentation.html"}
              target="_blank"
              rel="noreferrer noopener"
            >
              Event Segmentation Hidden Markov Model
            </a>{" "}
            at Columbia University and UC Berkeley advised by Prof.{" "}
            <a
              href={"https://www.chrisbaldassano.com/about.html"}
              target="_blank"
              rel="noreferrer noopener"
            >
              Chris Baldassano
            </a>{" "}
            and Prof.{" "}
            <a
              href={"https://www.alylab.org/mariam"}
              target="_blank"
              rel="noreferrer noopener"
            >
              Mariam Aly
            </a>{" "}
            . <br />
            &emsp; - I delivered a talk for {" "}
            <a
              href={"https://www.youtube.com/watch?v=hCmX8ZFIVf8"}
              target="_blank"
              rel="noreferrer noopener"
            >
              the Society of Neuroscience Conference 2024
            </a>{" "}
            on 
            <a
              href={"https://github.com/narjes-al/Budapest-TimescaleChanges"}
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              The Fine-Tuning and Chunking of Events in Repeated Naturalistic Stimuli
            </a>{" "}
            .
            <br />
            &emsp; - I'm also aiming to study predictive mechanisms in the brain.
          </p>

          <p className="title hidden" style={{ textAlign: "left" }}>
            {"/Tutoring"}
          </p>

          <p className="letter hidden" style={{ textAlign: "left" }}>
            • I enjoy teaching and have tutored an introductory course in AI with{" "}
            <a
              href={"https://www.inspiritai.com/"}
              target="_blank"
              rel="noreferrer noopener"
            >
              Inspirit AI
            </a>{" "}
            to elementary school and middle school students in NYC.
          </p>

          <p className="title hidden" style={{ textAlign: "left" }}>
            {"/me"}
          </p>

          <p className="letter hidden" style={{ textAlign: "left" }}>
            In my free time, I enjoy climbing, reading and watching TV. :)
            <br />
            <br />
            [Last updated: Oct.2024]
          </p>
        </Col>
      </Container>
    );
  }

  comp() {
    return (
      <Container fluid className="App">
        <Col xs={8}>
          <Row className="pt-4">
            <Image src={seg} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">Event Segmentation Hidden Markov Model</p>
              <p className="letter">
                HMM-based research project advised by Prof. Chris Baldassano at the Columbia Dynamic Perception
                and Memory Lab and Prof. Mariam Aly at the UC Berkeley Aly Lab.
                <br />
                Looked for timescale changes in the brain with repeated movie viewing using the HMM model across searchlights in the brain.
                <br />
                Conducted statistical analysis with well-defined metrics using Brainiak.
                <br />
                My first-authored paper delivered as a talk in the Long-Term Memory Nanosymposium at the Society for Neuroscience Conference (Oct, 2024).
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href={""}
                >
                  {"Paper"}
                </Button>
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://github.com/narjes-al/Budapest-TimescaleChanges"
                >
                  {"GitHub"}
                </Button>
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://brainiak.org/tutorials/12-hmm/"
                >
                  {"HMM"}
                </Button>
              </p>
            </Col>
          </Row>

          <br />

          <Row className="pt-4">
            <Image src={inspirit} roundedCircle height="150px" />

            <Col>
              <p className="title">Teaching AI (Nov 2023 - Now)</p>
              <p className="letter">
                Guided high-school students through coding projects based on current AI problems, 
                such as developing music recommendation systems, implementing named entity recognition 
                in Siri voice commands, and understanding unbiased large language models.
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://www.inspiritai.com/"
                >
                  {"Inspirit AI"}
                </Button>
              </p>
            </Col>
          </Row>

          <br />

          <Row className="pt-4">
            <Image src={teaching1} roundedCircle height="150px" />

            <Col>
              <p className="title">Teaching Assistance </p>
              <p className="letter">
                • Computer Science Department | Discrete Mathematics | Prof. Ansaf Salleb-Aouissi
                <br /> Developed coursework and guided students with problems on proofs, sets, graph theory and more.
                <br /> <br />
                • Physics Department | Physics for Poets | Prof. Szabolcs Marka
                <br /> Created courseworks to introduce modern physics concepts, from quantum mechanics to cosmology.
                <br /> <br />
              </p>
            </Col>
          </Row>

          <br />

          <Row className="pt-4">
            <Image src={classes} roundedCircle height="150px" />

            <Col>
              <p className="title"> Courses </p>
              <p className="letter">
                • Computer Science Department: Artificial Intelligence | Computer Vision | Natural Language Processing | Machine Learning | Computational Robotics | Databases | Data Structures
                <br /> <br />
                • Math & Physics Departments: Multi-Variable Calculus | Linear Algebra | Ordinary & Partial Differential Equations | Complex Variables | Accelerated Physics | Mechanics | Electricity & Magneticism
                <br /> <br />
              </p>
            </Col>
          </Row>

          <br />

          <Row className="pt-4">
            <Image src={rtc} roundedCircle height="150px" />

            <Col>
              <p className="title"> Rewriting The Code </p>
              <p className="letter">
                Attend workshops and social networking events for Women in Computer Science.
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://rewritingthecode.org/?utm_source=adwords&utm_medium=ppc&utm_campaign=cBC%20-%20Branded&utm_term=rewriting%20the%20code&hsa_acc=6694899998&hsa_cam=19866510712&hsa_grp=150229457027&hsa_ad=652085058848&hsa_src=g&hsa_tgt=kwd-879003061187&hsa_kw=rewriting%20the%20code&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwvKi4BhABEiwAH2gcw_KrNYRwzmQ_VdzKsn1dF_Cb0yPMR84jBOgOlZ1Eznean2iEbbfBhxoCfywQAvD_BwE"
                >
                  {"RTC"}
                </Button>
              </p>
            </Col>
          </Row>

          <br />
        </Col>
      </Container>
    );
  }

  psych() {
    return (
      <Container fluid className="App">
        <Col xs={8}>
          <Row className="pt-4">
            <Image src={alyssano} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Research Assistant & Lab Manager @ Alyssano Group (Oct.2023 - Now)
              </p>
              <p className="letter">
                Worked on event segmentation, advised by Prof. Mariam Aly @ UC Berkeley and Prof. Chris Baldassano @ Columbia.
                <br /> Led a research on the fine-tuning and chunking of events in repeated naturalistic stimuli.
                <br /> Used a hidden markov event segmentation model and the Budapest dataset.
                <br /> • Administration: Oversee two labs, managing IRB protocols, subject recruitment and website maintenance.
                <br /> • Research: Conduct research on Changes in Event Timescales using naturalistic stimuli (movies) and Event
                Segmentation analysis based on Hidden Markov Models.
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://github.com/narjes-al/Budapest-TimescaleChanges"
                >
                  {"GitHub/Timescale-Changes"}
                </Button>
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://www.alylab.org/"
                >
                  {"Aly Lab"}
                </Button>
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://www.dpmlab.org/"
                >
                  {"Dynamic Perception & Memory Lab"}
                </Button>
              </p>
            </Col>
          </Row>

          <Row className="pt-4">
            <Image src={paris} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Global Neuroscience Scholar @ Columbia Summer Practicum
                (Paris Brain Institute (ICM) & Columbia Global Center, Summer 2023)
              </p>
              <p className="letter">
                • Lab Rotations: Rotated through leading labs at Paris Brain Institute.
                <br /> • Scientific Discussion: Connected with leading scientists like Lionel Naccache and Bassem Hassan.
                <br /> • Brain Measurement: Gained knowledge and practical skills in diverse brain measuring techniques (e.g. MRI, EEG, TMS).
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://global.undergrad.columbia.edu/gsp-hc"
                >
                  {"Columbia Global Neuroscience"}
                </Button>
              </p>
            </Col>
          </Row>

          <Row className="pt-4">
            <Image src={cambridge_logo} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Global Research Scholar @ Columbia Summer Practicum
                (Cambridge, UK - Summer 2022)
              </p>
              <p className="letter">
                • Research Design: Designed novel experiment to study positive deviance in 36 countries.
                <br />
                • Data Analysis: Utilized various statistical methods (e.g. chi-square, ANOVA, Bayesian Model Averaging).
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://global.undergrad.columbia.edu/program/columbia-summer-research-practicum-global-behavioral-science-globes"
                >
                  {"GLOBES"}
                </Button>
              </p>
            </Col>
          </Row>

          <Row className="pt-4">
            <Image src={greymatters} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Scientific Review Editor @ Grey Matters Journal
              </p>
              <p className="letter">
                • Scientific Edition: Verified scientific integrity and validity of articles.
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://www.greymattersjournalcu.org/"
                >
                  {"Grey Matters Journal Columbia"}
                </Button>
              </p>
            </Col>
          </Row>

          <Row className="pt-4">
            <Image src={davachi} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Research Assistant @ Davachi Lab
                (May.2022 - Nov.2022)
              </p>
              <p className="letter">
                • Menteeship: Worked with postdoc Amir Tal, studying Unconscious Memory Relearning.
                <br /> • Subject Recruitment & Eye-Tracking: Proctored experiments with student subjects using eye-tracking technology.
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://davachilab.psychology.columbia.edu/"
                >
                  {"CORE Lab"}
                </Button>
              </p>
            </Col>
          </Row>

          <Row className="pt-4">
            <Image src={neurotech} roundedCircle height="150px" />

            <Col>
              <p className="title"> Neurotech X Columbia </p>
              <p className="letter">
                Attend project workshops and social networking events in the field of neurotechnology.
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://www.neurotechxcolumiauniversity.com/"
                >
                  {"Neurotech X Columbia"}
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

export default Content;
