import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import perfil from "../assets/img/perfil.jpg";

import {
  AiOutlineMail,
  AiFillPhone,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import DownloadButton from "./DownloadButton";
export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <>
      <section className="footer" id="footer">
        <Col lg={12}>
          <div className="newsletter-bx wow slideInUp">
            <img className="perfil" src={perfil} alt="Logo" />

            <form onSubmit={handleSubmit}>
              <div className="contact-title">CONTATOS</div>

              <div className="icon-label">
                <a href="https://www.linkedin.com/in/aureasiqueira/">
                  <AiFillLinkedin />
                  <div>LinkedIn</div>
                </a>
              </div>

              <div className="icon-label">
                <a href="https://github.com/aureasiqueira1">
                  <AiOutlineGithub />
                  <div>GitHub</div>
                </a>
              </div>

              <div className="icon-label">
                <a>
                  <AiOutlineMail />
                  <div>E-mail: aurea@gec.inatel.br</div>
                </a>
              </div>

              <div className="icon-label">
                <a>
                  <AiFillPhone />
                  <div>Telefone: (35) 9 9772-3099</div>
                </a>
              </div>
            </form>
          </div>
        </Col>
      </section>
      <DownloadButton />
    </>
  );
};
