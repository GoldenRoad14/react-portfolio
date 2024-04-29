import { faJs, faNodeJs, faHtml5, faGithub, faBootstrap, faReact} from '@fortawesome/free-brands-svg-icons';
import { faMobileScreenButton, faNetworkWired, faGears, faServer, faDatabase, faCode, faList} from '@fortawesome/free-solid-svg-icons';

const coding_tech = [
    {
      name: "JavaScript",
      icon: faJs
    },
    {
      name: "HTML/CSS",
      icon: faHtml5
    },
    {
      name: "React",
      icon: faReact
    },
    {
      name: "NodeJS",
      icon: faNodeJs
    },
    {
      name: "Express",
      icon: faServer
    },
    {
      name: "mySQL",
      icon: faDatabase
    },
    {
      name: "MongoDB",
      icon: faDatabase
    },
    {
      name: "jQuery",
      svg: "../src/assets/techicons-06.svg"
    },
    {
      name: "JSON",
      svg: "../src/assets/techicons-07.svg"
    },
    {
      name: "REST APIs",
      icon: faGears
    },
    {
      name: "Bootstrap",
      icon: faBootstrap
    },
    {
      name: "Sequelize",
      svg: "../src/assets/techicons-08.svg"
    },
    {
      name: "GraphQL",
      icon: faCode
    },
    {
      name: "PWAs",
      icon: faMobileScreenButton
    },
    {
      name: "MVC",
      icon: faNetworkWired
    },
    {
      name: "Agile",
      icon: faList
    },
    {
      name: "GitHub",
      icon: faGithub
    }
  ];

const other_tech = [
    {
        name: "Photoshop",
        icon: "../src/assets/AdobeIcons-01.svg"
      },
      {
        name: "Illustrator",
        icon: "../src/assets/AdobeIcons-02.svg"
      },
      {
        name: "InDesign",
        icon: "../src/assets/AdobeIcons-03.svg"
      },
      {
        name: "After Effects",
        icon: "../src/assets/AdobeIcons-04.svg"
      },
      {
        name: "Premier Pro",
        icon: "../src/assets/AdobeIcons-05.svg"
      }
];

export { coding_tech, other_tech};