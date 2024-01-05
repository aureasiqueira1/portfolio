import { Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import financeiro from "../assets/img/financeiro.png";
import kanban from "../assets/img/kanban.png";
import githubsearch from "../assets/img/githubsearch.png";
import shoppingcart from "../assets/img/shoppingcart.png";
import mycontacts from "../assets/img/mycontacts.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "react-multi-carousel/lib/styles.css";

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
      <TrackVisibility>
        <h2>Projetos</h2>
        <p></p>
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
          <Tab.Pane eventKey="first">
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Tab.Pane>

          <Tab.Pane eventKey="third"></Tab.Pane>
        </Tab.Container>
      </TrackVisibility>
    </section>
  );
};
