

import React from 'react';
import horiseonImg from '../../assets/Horiseon.png';
import budgetImg from 'src\assets\Budget-App.png';
import quizImg from 'src\assets\Code-Quiz.png';
import pizzaImg from 'src\assets\Pizza-Hunt.png'

import WorkItems from 'src\components\Workitems\Workitems.js';

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
          <p>Pizza Hunt</p>
          
        </div>
        <a href="https://pacific-ridge-26359.herokuapp.com//">
          <img src={pizzaImg} alt="Pizza Hunt" />
        </a>
      </div>

      {
        items.map(item => <WorkItems {...item} />)
      }

    </div>
  )
};

export default Projects;