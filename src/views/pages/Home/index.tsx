import React from "react";

import FormSignIn from "../../../components/Form";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <div>
        <Container>
          <div>
            <section className="signup-section">
              <div className="signup-text">textos</div>
              <div className="signup-form">
                <FormSignIn />
              </div>
            </section>

            <section className="cta-section">
              <div>CTA</div>
            </section>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Home;
