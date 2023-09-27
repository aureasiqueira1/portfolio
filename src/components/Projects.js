import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import capputeeno from "../assets/img/capputeeno.png";
import mycontacts from "../assets/img/mycontacts.png";
import financeiro from "../assets/img/financeiro.png";
import kanban from "../assets/img/kanban.png";
import githubsearch from "../assets/img/githubsearch.png";
import quiz from "../assets/img/quiz.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Capputeeno",
      description: "Design & Development",
      imgUrl: capputeeno,
    },
    {
      title: "My Contacts",
      description: "Design & Development",
      imgUrl: mycontacts,
    },
    {
      title: "Kanban",
      description: "Design & Development",
      imgUrl: kanban,
    },
    {
      title: "Financeiro",
      description: "Design & Development",
      imgUrl: financeiro,
    },

    {
      title: "GitHub Search",
      description: "Design & Development",
      imgUrl: githubsearch,
    },
    {
      title: "Quiz",
      description: "Design & Development",
      imgUrl: quiz,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projetos</h2>
                  <p>
                    Foram desesenvolvidos com o objetivo de aumentar meus
                    conhecimentos através de cursos e projetos pessoais.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p></p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p></p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
