import {coding_tech, other_tech} from "../data/techs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutPage() {
    return (
      <div className="about-container pt-4">
          <div className="about-left m-3">
            <div className="profile-img">
              <img className="headshot" src="/assets/HeadshotTransparency.png"></img>
              
            </div>
            <div className="welcome-text">
              <h5><span className="title">Hello!</span><br></br>My name is Matt and I am a web developer with a background in graphic design and sales across various industries. Please check out my portfolio to see some of the work I've done. </h5>
            </div>
          </div>
          <div className="about-right m-3">
              <div className="profile">
                <div className="technologies-title">
                <h3>Technologies:</h3>
                </div>
                <div className="technologies">
                  <div className="coding_tech">
                  {coding_tech.map((tech, index) => (
            <div key={index} className="coding-item">
                {tech.icon && <FontAwesomeIcon icon={tech.icon} />}
                {tech.svg && <img src={tech.svg} alt={tech.name} />}
                <p>{tech.name}</p>
            </div>
                  ))}

                  </div>
                  <div className="other-tech-title">
                      <h4>Design Software:</h4>
                    </div>
                  <div className="other_tech">
                    
                  {other_tech.map((other_tech, index) => (
            <div key={index} className="other-item">
                <img src={other_tech.icon} />
                <p>{other_tech.name}</p>
            </div>
                  ))}
                  </div>
                </div>
            </div>
          </div>
        </div>
        )}