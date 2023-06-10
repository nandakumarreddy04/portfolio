import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bestbuy from "../../Assets/Projects/bestbuy.png";
import yelpcamp from "../../Assets/Projects/yelpcamp.png";
import moonflix from "../../Assets/Projects/moonflix.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bestbuy}
              isBlog={false}
              title="Best Buy"
              description=" Users can buy Products, can manage their orders under userProfile. It Supports Authen- tication and Authorization for a
              User on order and review schema.Admin can manage all products,orders, users and can
              mark orders as delivered.Checkout process (shipping, payment method,
                payment, etc.) and Payment through Credit Card
"
              ghLink="https://github.com/nandakumarreddy04/Best_Buy-official_online_store"
              demoLink="https://plain-hoodie-foal.cyclic.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yelpcamp}
              isBlog={false}
              title="Yelpcamp-India"
              description=" Dark themed yelpcamp populated with Indian Cities
dataset.
Users can create their own campgrounds or review
others campgrounds.

Supports authen-tication by allowing only logged-in
users to add a new campground or edit an existing
one.
Supports authorization by restricting the access to
edit campgrounds or delete reviews added by other
users."
              ghLink="https://github.com/nandakumarreddy04/Yelpcamp_India"
              demoLink="https://yelpcamp-india.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moonflix}
              isBlog={false}
              title="Moonflix"
              description="MoonFlix -

Fullstack Movie Web App Buit With MERN Stack.
MERN Stack Movie Application with Stunning UI and Dark Mode.
Features are
Secured Authentication Using JWT ,
Realtime Search Functionality ,
Add Movies to Liked Section ,
Add/Delete Reviews ,
Light/Dark Mode With Fully Responsive UI"
              ghLink="https://github.com/nandakumarreddy04/moonflix"
              demoLink="https://moonflix-vercel.vercel.app/"              
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
