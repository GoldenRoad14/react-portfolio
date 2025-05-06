import { projects, graphicDesignProjects } from "../data/projects";
import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };
  const closeModal = () => {
    setSelectedProject(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
  };

  return (
    <div className="container pt-4">
      <div className="portfolio-container gd-container">
        <h1 className="portfolio-header">Graphic Design & Photography</h1>
          {graphicDesignProjects.map((project, index) => (
            <div
              key={index}
              className="project-card m-3"
              style={{ backgroundImage: `url(${project.backgroundImage})` }}
              onClick={() => openModal(project)}
            >
              <div className="card-overlay p-2">
                <h4 className="card-header">{project.name}</h4>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      <div className="portfolio-container">
      <h1 className="portfolio-header">Web Development</h1>
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card m-3"
            style={{ backgroundImage: `url(${project.backgroundImage})` }}
          >
            <div className="card-overlay p-2">
              <h4 className="card-header">{project.name}</h4>
              <a href={project.githubLink} target="_blank">
                <img
                  className="portfolio-social-icon"
                  src="/assets/github_white_transparent.png"
                  alt="GitHub"
                />
              </a>
              {project.deployedLink && (
                <a href={project.deployedLink} target="_blank">
                  <img
                    className="portfolio-social-icon"
                    src="/assets/WebLinkIcon.png"
                    alt="Web Link"
                  />
                </a>
              )}
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={selectedProject !== null}
        onRequestClose={closeModal}
        contentLabel="Project Modal"
        className="modal-content"
      >
        {selectedProject && (
          <div className="modal-layout">
            <div className="modal-header">
              <h2>{selectedProject.name}</h2>
              <button className="close-modal" onClick={closeModal}>
                ✖️
              </button>
            </div>
            <div className="modal-container">
              <Slider {...settings}>
                {selectedProject.images.map((image, index) => (
                  <div key={index} className="image-slide">
                    <img
                      src={image.src}
                      className="modal-img main-image"
                      alt={image.description}
                    />
                    {/* <p className="slider-img-description">{image.description}</p> */}
                  </div>
                ))}
              </Slider>
            </div>
            <p className="project-description">{selectedProject.description}</p>
          </div>
        )}
      </Modal>
      {/* <div className="gd-container pt-4"> */}
        
        
      </div>
    // </div>
  );
}
