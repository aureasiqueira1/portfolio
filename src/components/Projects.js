import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import capputeeno from "../assets/img/capputeeno.png";
import financeiro from "../assets/img/financeiro.png";
import kanban from "../assets/img/kanban.png";
import githubsearch from "../assets/img/githubsearch.png";
import shoppingcart from "../assets/img/shoppingcart.png";
import quiz from "../assets/img/quiz.png";
import mycontacts from "../assets/img/mycontacts.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Shopping",
      description: "Development",
      imgUrl: shoppingcart,
      url: "https://shopping-umber.vercel.app/",
      git: "https://github.com/aureasiqueira1/Shopping",
    },
    {
      title: "Kanban",
      description: "Design & Development",
      imgUrl: kanban,
      url: "https://project-schedule-neon.vercel.app/",
      git: "https://github.com/aureasiqueira1/ProjectSchedule",
    },
    {
      title: "Financeiro",
      description: "Design & Development",
      imgUrl: financeiro,
      url: "https://app-financeiro-nu.vercel.app/",
      git: "https://github.com/aureasiqueira1/App-financeiro",
    },
  ];

  const projects2 = [
    {
      title: "GitHub Search",
      description: "Design & Development",
      imgUrl: githubsearch,
      url: "https://front-end-desafio-eight.vercel.app/",
      git: "https://github.com/aureasiqueira1/FrontEndDesafio",
    },
    {
      title: "My Contacts",
      description: "Development",
      imgUrl: mycontacts,
      url: "https://project-my-contacts.vercel.app/",
      git: "https://github.com/aureasiqueira1/ProjectMyContacts",
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
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third"></Tab.Pane>
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
