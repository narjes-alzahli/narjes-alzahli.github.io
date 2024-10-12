import React, { Component } from "react";
import triviac from "./assets/triviac.jpg";
import mercury from "./assets/mercury.png";
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
import wholesome from "./assets/wholesome.png";
import quolesomeness from "./assets/quolesomeness.png";
import tangram from "./assets/tangram.png";
import music from "./assets/music.jpeg";

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
            <br />
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
            <Image src={tangram} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                ABSTRACT VISUAL REASONING WITH TANGRAM SHAPES
              </p>
              <p className="letter">
                NLP research project advised by Prof. Yoav Artzi at the Cornell
                Language, Interaction, and Learning Lab.
                <br />
                <br />
                Built a richly annotated tangram dataset, KiloGram, for studying
                abstract visual reasoning in humans and machines (over 13,000
                annotations for 1,016 tangrams).
                <br />
                <br />
                Created an interface for selecting and annotating tangram puzzle
                pieces that collects descriptions from MTurk & a data
                visualization dashboard, using Javascript, HTML/CSS, ReactJS and
                Firebase. Conducted statistical analysis with well-defined
                metrics and fine-tuned CLIP and ViLT models with PyTorch.
                <br />
                <br />
                My first-authored paper received Best Long Paper at EMNLP
                (Empirical Methods in Natural Language Processing) in 2022.
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href={"https://arxiv.org/abs/2211.16492"}
                >
                  {"Paper"}
                </Button>
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href={"https://www.youtube.com/watch?v=hCmX8ZFIVf8"}
                >
                  {"Talk"}
                </Button>
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://github.com/lil-lab/kilogram"
                >
                  {"GitHub"}
                </Button>
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://tangram-online.web.app/"
                >
                  {"Annotation Interface"}
                </Button>
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://lil.nlp.cornell.edu/kilogram/dashboard/"
                >
                  {"Data Dashboard"}
                </Button>
              </p>
            </Col>
          </Row>

          <br />

          <Row className="pt-4">
            <Image src={triviac} roundedCircle height="150px" />

            <Col>
              <p className="title">TRIVIAC - TRIVIA GAMES</p>
              <p className="letter">
                An iOS app for generating, playing, and archiving single- or
                multi-player trivia games. <br />
                <br />
                Built with UIKit, Firebase, and OpenTriviaDatabase.
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://github.com/anya-ji/triviac"
                >
                  {"GitHub"}
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
                All-in-one platform for better online office hours experiences!
                Supports separate roles for students and TAs, queuing, and
                video/audio conferencing.
                <br />
                <br />
                Built with ReactJS and PostgreSQL.
                {/* <br />
                Designed mock-ups on Figma and implemented UI components with
                SemanticUI, worked with Google OAuth for user login and web
                sockets to signal joining/leaving calls and broadcast messages,
                and made API calls with Axios to update the server with current
                users. */}
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://github.com/MercuryOH/mercury"
                >
                  {"GitHub"}
                </Button>
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
                <br />
                Built with Kivy in Python and Firebase.
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
                {/* <br />
                Integrated Anagramica API to validate created words.
                <br />
                Final project for functional programming (CS 3110). Collaborated
                with Bahar Tehranipoor and Ashley Yu. */}
                <br />
                <br />
                Built with OCaml.
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

          <Row className="pt-4">
            <Image src={wholesome} height="150px" width="150px" />
            <Col>
              <p className="title">QUOLESOMENESS - WHOLESOME QUOTES FINDER</p>
              <p className="letter">
                An information retrieval system to find personalized wholesome
                quotes based on categories, emotion, and your input text,
                integrating the Latent Semantic Indexing (LSI) Model, sentiment
                analysis, Wordnet word embeddings, pointwise mutual information
                (PMI) for tags merging, etc.
                <br />
                <br />
                Built with ReactJS, Python (information retrieval system), and
                Heroku.
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://github.com/anya-ji/quolesomeness"
                >
                  {"GitHub"}
                </Button>
              </p>
            </Col>
          </Row>
          <br />
          <Row className="player-wrapper justify-content-center">
            <Image src={quolesomeness} height="400px" />
          </Row>

          <br />

          <Row className="pt-4">
            <Image src={booksmart} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">BOOKSMART - BOOK EXCHANGE</p>
              <p className="letter">
                An iOS app for selling and purchasing second-hand textbooks on
                campus.
                <br />
                <br />
                Built with UIKit, Firestore, SQLite3, Amazon S3, and Heroku.
                <br />
                {/* Lead a team of 6 with a designer and developers and work on both
                iOS and backend.
                <br />
                Use UIKit to create informative yet easy-to-navigate UI; support
                real-time messaging with Firestore; create efficient relational
                database models of user and book information with SQLite3; store
                images on Amazon S3, and deploy the database using Docker and
                Heroku.
                <br /> */}
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
        <Col xs={8}>
          <Row className="pt-4">
            <Image src={amp} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Research Assistant & Lab Manager @ Alyssano Group
                (Oct.2023 - Now)
              </p>
              <p className="letter">
                Worked on event segmentation, advised by Prof. Mariam Aly @ UC Berkeley and Prof. Chris Baldassano @ Columbia.
                <br /> <br />
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
                  {"Dynamic Perpcetion & Memory Lab"}
                </Button>
              </p>
            </Col>
          </Row>

          <Row className="pt-4">
            <Image src={aclab} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Global Neuroscience Scholar @ Columbia Summer Practicum
                (Paris Brain Institute (ICM) & Columbia Global Center, Summer 2023)
              </p>
              <p className="letter"> https://parisbraininstitute.org/paris-brain-institute-research-teams/picnic-neuropsychology-and-functional-neuroimaging
                <br /> • Lab Rotations: Rotated through leading labs at Paris Brain Institute ({" "}
                <a
                  href={"https://parisbraininstitute.org/paris-brain-institute-research-teams/picnic-neuropsychology-and-functional-neuroimaging"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  PICNIC
                </a>{" "}
                ,{" "}
                <a
                  href={"https://www.movit.paris/teams/dream-team-sleep-dreams-and-cognition"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  DreamTeam
                </a>{" "}
                ,{" "}
                <a
                  href={"https://parisbraininstitute.org/paris-brain-institute-research-teams/frontlab-system-functions-and-malfunctions"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  FrontLab
                </a>{" "}
                ,{" "}
                <a
                  href={"https://www.aramislab.fr/"}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  ARAMIS
                </a>{" "}
                , delving into cutting-edge consciousness research with Prof. Alfredo Spagna.
                <br /> • Scientific Discussion: Connected with leading scientists like Lionel Naccache and Bassem Hassan, engaging in immersive discussion to deepen understanding of brain research.
                <br /> • Brain Measurement: Gained knowledge and practical skills in diverse brain measuring techniques (e.g. MRI, EEG, TMS) through comprehensive learning and hands-on experience at the labs.
                <br /> <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://global.undergrad.columbia.edu/gsp-hc"
                >
                  {"Columbia Global Neuroscience"}
                </Button>
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="http://www.alfredospagna.com/"
                >
                  {"Alfredo Spagna"}
                </Button>
                <br />
              </p>
            </Col>
          </Row>

          <Row className="pt-4">
            <Image src={aclab} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Global Research Scholar @ Columbia Summer Practicum
                (Cambridge, UK - Summer 2022)
              </p>
              <p className="letter">
                • Research Design: Designed novel experiment to study positive deviance in 36 countries.
                <br />
                • Data Analysis: Utilized various statistical methods (e.g. chi-square, ANOVA, multinomial logistic
                regression, Bayesian Model Averaging), to process and analyze vast, international data set.
                <br />
                • Collaboration: Collaborated with international team to dissect literature and refine research direction.
                <br />
                • Publication: Co-authored two papers on positive deviance and cognitive biases, successfully published below.
                <br /> <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://global.undergrad.columbia.edu/program/columbia-summer-research-practicum-global-behavioral-science-globes"
                >
                  {"GLOBES"}
                </Button>
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://www.cambridge.org/core/journals/behavioral-and-brain-sciences/article/psychology-and-policy-of-overcoming-economic-inequality/92FA5CA209A91B608F8493FAF95CAA1B?utm_campaign=shareaholic&utm_medium=copy_link&utm_source=bookmark"
                >
                  {"Cambridge Press BBS: 'Psychology & Policy of Overcoming Econominc Inequality'"}
                </Button>
                <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://www.nature.com/articles/s41598-023-36339-2"
                >
                  {"Nature Scientific Reports: 'Cognitive Biases in Financial Decisions Across Economic Groups'"}
                </Button>
              </p>
            </Col>
          </Row>

          <Row className="pt-4">
            <Image src={psichi} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Member @ Psi Chi, the International Honors Society in Psychology
              </p>
              <p className="letter">
                Attend grad school workshops and social networking events in the
                field of psychology.
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
          
          <Row className="pt-4">
            <Image src={music} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Research Assistant @ Davachi Lab
                (May.2022 - Nov.2022)
              </p>
              <p className="letter">
                <br /> <br />
                • Menteeship: Worked with postdoc Amir Tal, studying Unconscious Memory Relearning.
                <br />
                • Literature Review: Delved into extensive research on unconscious memory relearning.
                <br />
                • Training: Completed Human Subjects Research (IRB) Training. 
                <br />
                • Subject Recruitment & Eye-Tracking: Proctored experiments with student subjects using 
                eye-tracking technology and entered data on computer.
                <br /> <br />
                <Button
                  className="mt-4 mr-4 letter"
                  variant="outline-light"
                  href="https://davachilab.psychology.columbia.edu/"
                >
                  {"CORE (Construction, Organization & Reactivation of Experience) Lab"}
                </Button>
              </p>
            </Col>
          </Row>

          <Row className="pt-4">
            <Image src={music} roundedCircle height="150px" width="150px" />
            <Col>
              <p className="title">
                Courses
              </p>
              <p className="letter">
                <br /> <br />
                <br /> •  Research Methods & Cognitive Neuroscience with Lila Davachi
                <br /> •  Evolution of Intelligence, Language & Consciousness with Prof. Herbert Terrace
                <br /> •  Brain, Mind & Language with Prof. William A. Foley
                <br /> •  Consciousness Science with Prof. Nora Isacoff
                <br /> •  Consciousness and Attention with Prof. Alfredo Spagna
                <br /> •  Evolutionary Psychology with Prof. Ian Lawrence Reed
                <br /> <br />
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
