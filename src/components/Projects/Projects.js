

import React from 'react';

import horiseonImg from '../../assets/images/Horiseon.png';
import budgetImg from '../../assets/images/Budget-App.png';
import quizImg from '../../assets/images/Code-Quiz.png';
import meditateImg from '../../assets/images/HowRU-screenshot.png';
import employeeImg from '../../assets/images/Employee-Manager.png';

import WorkItems from '../Workitems/index';

const items = [

  {
    title: "Horiseon",
    desc: "start-up business website",
    link: "https://github.com/WayneEdwards/horiseon-refractor-remodel/",
    img: {
      src: `${horiseonImg}`,
      alt: "Horiseon webpage"
    }
  },
  {
    title: "Budget App",
    desc: "An app used to quickly keep track of funds",
    link: "https://github.com/WayneEdwards/supreme-carnival/",
    img: {
      src: `${budgetImg}`,
      alt: "money tracker"
    }
  },
  {
    title: "Code Quiz",
    desc: "An app that that runs a multiple choice quiz",
    link: "https://github.com/WayneEdwards/didactic-lamp/",
    img: {
      src: `${quizImg}`,
      alt: "code quiz"
    }
  },
  {
    title: "Employee Manager",
    desc: "SQL app to manage employees",
    link: "https://github.com/WayneEdwards/didactic-lamp/",
    img: {
      src: `${employeeImg}`,
      alt: "sql application"
    }
  }
];

function Projects() {
  return (
    <div className="work-right">
      <div className="work-top">
        <div className="work-top-title">
          <p>HowRU</p>
          
        </div>
        <a href="https://howru-meditation.herokuapp.com/">
          <img src={meditateImg} alt="howRU" />
        </a>
      </div>

      {
        items.map(item => <WorkItems {...item} />)
      }

    </div>
  )
};

export default Projects;