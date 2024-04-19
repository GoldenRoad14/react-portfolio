import projects from '../data/projects';

export default function PortfolioPage() {


    return (
      <div className="container pt-4">
        <h1 className="portfolio-header">Web Development</h1>
        <div className="portfolio-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card m-3" style={{backgroundImage: `url(${project.backgroundImage})`}}>
            <div className="card-overlay p-2">
              <h4 className="card-header">{project.name}</h4>
              <a href={project.githubLink} target="_blank">
                <img className="portfolio-social-icon" src="src/assets/github_white_transparent.png" alt="GitHub" />
              </a>
              {project.deployedLink && (
                <a href={project.deployedLink} target="_blank">
                  <img className="portfolio-social-icon" src="src/assets/WebLinkIcon.png" alt="Web Link" />
                </a>
              )}
              <p>{project.description}</p>
            </div>
          </div>
        ))}
        </div>
        </div>
    );
  }  