import { Col } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 10px;
  width: 350px;
  height: 350px;
  margin-bottom: 24px;

  background: #f1f1f1;
  transition: 0.4s ease-in-out;
`;

export const ProjectCard = ({ title, description, imgUrl, url, git }) => {
  return (
    <Col size={12} sm={4} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        <div className="proj-txtx-button">
          <a href={git}>
            <button className="proj-git">{"Acessar repositório"}</button>
          </a>
          <a href={url}>
            <button className="proj-git">{"Acessar projeto"}</button>
          </a>
        </div>
      </div>
    </Col>
  );
};
