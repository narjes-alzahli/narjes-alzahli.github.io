import React, { Component } from "react";
import seg from "./assets/seg.png";
import inspirit from "./assets/inspirit.png";
import teaching1 from "./assets/teaching2.png";
import classes from "./assets/classes.png";
import rtc from "./assets/rtc.png";
import alyssano from "./assets/alyssano.png";
import paris from "./assets/paris.png";
import cambridge_logo from "./assets/cambridge_logo.png";
import greymatters from "./assets/greymatters.png";
import davachi from "./assets/davachi1.png";
import neurotech from "./assets/neurotech.png";
import psichi from "./assets/psichi.png";

import { Container, Row, Image, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
            Personally, I'm so puzzled by the brain. 
            I want to understand the cognitive mechanism behind our perception of time
            and how we segment our continuous experience into discrete events.
            <br />
            <br />
            I also love math and hope to use it to build computational models
            that help explain how the brain works.
          </p>

          <p className="title hidden" style={{ textAlign: "left" }}>
            {"/research"}
          </p>

          <p className="letter hidden" style={{ textAlign: "left" }}>
            I've been researching Event Timescale Changes with an Event Segmentation{" "}
            <a
              href={"https://naturalistic-data.org/content/Event_Segmentation.html"}
              target="_blank"
              rel="noreferrer noopener"
            >
              Hidden Markov Model
            </a>
            , advised by Prof.{" "}
            <a
              href={"https://www.chrisbaldassano.com/about.html"}
              target="_blank"
              rel="noreferrer noopener"
            >
              Chris Baldassano
            </a>{" "}
            at Columbia University and Prof.{" "}
            <a
              href={"https://www.alylab.org/mariam"}
              target="_blank"
              rel="noreferrer noopener"
            >
              Mariam Aly
            </a>{" "}
            at UC Berkeley.
            <br />
            &emsp; - I delivered a{" "}<a
              href={"https://github.com/narjes-al/Budapest-TimescaleChanges"}
              target="_blank"
              rel="noreferrer noopener"
            >
              talk
            </a>{" "}
            at the Society for Neuroscience Conference (Chicago, 2024) on "The Fine-Tuning and Chunking of Events in Repeated Naturalistic Stimuli".
            <br />
            &emsp; - I'm currently working on a preprint.
          </p>

          <p className="title hidden" style={{ textAlign: "left" }}>
            {"/scholarship"}
          </p>

          <p className="letter hidden" style={{ textAlign: "left" }}>
            • In 2016, I joined{" "}
            <a
              href={"https://www.inspiritai.com/"}
              target="_blank"
              rel="noreferrer noopener"
            >
              Takatuf Scholars
            </a>, a competitive program in Oman that prepares youth for personal and professional success.
            <br /> <br /> 
            • I was fortunate to be selected as 1 of 2 students nationally to receive a full-ride scholarship to study overseas for boarding school and college.
          </p>

          <p className="title hidden" style={{ textAlign: "left" }}>
            {"/me"}
          </p>

          <p className="letter hidden" style={{ textAlign: "left" }}>
            In my free time, I love to climb, read and watch TV. :)
            <br />
            <br />
            [Last updated: Oct.2024]
            <br />
             [Template from {" "}
            <a
              href={"https://anya-ji.github.io/"}
              target="_blank"
              rel="noreferrer noopener"
            >
              Anya Ji
            </a>]
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
                • HMM-based research project advised by Prof. Chris Baldassano at the Columbia Dynamic Perception
                and Memory Lab and Prof. Mariam Aly at the UC Berkeley Aly Lab.
                <br /> <br />
                • Investigated changes in the timescale of events in the brain using repeated movie viewing.
                <br />
                • Conducted statistical analysis with well-defined metrics using libraries like Brainiak, nibabel, sklearn & deepdish.
                <br />
                • Currently writing my first-authored paper, delivered as a talk in the Long-Term Memory Nanosymposium at SfN (Chicago, Oct 2024).
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
                • Discrete Mathematics Class with Prof. Ansaf Salleb-Aouissi:
                <br /> Developed coursework and guided students with problems on proofs, sets, graph theory and more.
                <br /> <br />
                • Physics for Poets Class with Prof. Szabolcs Marka:
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
                • Computer Science Department:
                <br /> Artificial Intelligence | Computer Vision | Natural Language Processing | Machine Learning | Computational Robotics | Databases | Data Structures
                <br /> <br />
                • Math & Physics Departments:
                <br /> Multi-Variable Calculus | Linear Algebra | Ordinary & Partial Differential Equations | Complex Variables | Accelerated Physics | Mechanics | Electricity & Magneticism
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
                Attend workshops and social networking events for women in Computer Science.
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
                Research Assistant & Lab Manager @ Alyssano Group
                <br /> (Oct 2023 - Now)
              </p>
              <p className="letter">
                • Research:
                <br />
                &emsp; - Advised by Prof. Chris Baldassano @ Columbia & Prof. Mariam Aly @ UC Berkeley.
                <br />
                &emsp; - Led a research project on the fine-tuning and chunking of events in repeated naturalistic stimuli (movies) using an Event Segmentation Hidden Markov Model (more can be found under the computer science section).
                <br /> <br />
                • Administration:
                <br />
                &emsp; - Oversee two labs, managing IRB protocols, subject recruitment and website maintenance.
                <br />
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

          <br />

          <Row className="pt-4">
            <Image src={paris} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Global Neuroscience Scholar @ Columbia Summer Practicum
                <br /> (Paris Brain Institute, Summer 2023)
              </p>
              <p className="letter">
                • Lab Rotations: 
                Rotated through leading labs at Paris Brain Institute (
                <a
                  href={"https://parisbraininstitute.org/paris-brain-institute-research-teams/picnic-neuropsychology-and-functional-neuroimaging"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  PICNIC
                </a>
                ,{" "}
                <a
                  href={"https://www.movit.paris/teams/dream-team-sleep-dreams-and-cognition"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  DreamTeam
                </a>
                ,{" "}
                <a
                  href={"https://parisbraininstitute.org/paris-brain-institute-research-teams/frontlab-system-functions-and-malfunctions"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  FrontLab
                </a>
                ,{" "}
                <a
                  href={"https://www.aramislab.fr/"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  ARAMIS
                </a>), guided by Prof.{" "}
                <a
                  href={"http://www.alfredospagna.com/"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Alfredo Spagna
                </a>.
                <br /> • Scientific Discussion: Connected with leading scientists and engageg in weekly immersive discussions.
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

          <br />

          <Row className="pt-4">
            <Image src={cambridge_logo} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Global Research Scholar @ Columbia Summer Practicum
                <br /> (Cambridge, UK - Summer 2022)
              </p>
              <p className="letter">
                • Research Design: Designed novel experiment to study positive deviance in 36 countries.
                <br />
                • Data Analysis: Utilized various statistical methods (e.g. chi-square, ANOVA, multinomial logistic regression, Bayesian Model Averaging), to process and analyze vast, international data set.
                <br /> • Collaboration: Collaborated with international team to dissect literature and refine research direction.
                <br /> • Publication: Authored and published two papers on positive deviance and cognitive biases.
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

          <br />

          <Row className="pt-4">
            <Image src={greymatters} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Scientific Review Editor @ Grey Matters Journal
              </p>
              <p className="letter">
                • Scientific Review: Verified scientific integrity and validity of articles.
                <br /> • Collaborative Publishing: Co-authored article on Integrated Information Theory of Consciousness.
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

          <br />

          <Row className="pt-4">
            <Image src={davachi} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Research Assistant @ Davachi Lab
                (May.2022 - Nov.2022)
              </p>
              <p className="letter">
                • Menteeship: Worked with postdoc Amir Tal, studying Unconscious Memory Relearning.
                <br /> • Subject Recruitment & Eye-Tracking: Proctored experiments with student subjects using eye-tracking.
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

          <br />

          <Row className="pt-4">
            <Image src={psichi} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Member @ Psi Chi, the International Honors Society in Psychology
              </p>
              <p className="letter">
                Attend grad school workshops and social networking events in the field of psychology.
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://psychology.columbia.edu/content/columbia-university-psi-chi-honors-society"
                >
                  {"Psi Chi Columbia"}
                </Button>
              </p>
            </Col>
          </Row>

          <br />

          <Row className="pt-4">
            <Image src={neurotech} roundedCircle height="150px" width="150px" />

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
