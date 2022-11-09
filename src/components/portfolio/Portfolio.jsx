import React from 'react'
import './portfolio.css'
import PI1 from '../../assets/project-image-1.png'
import PI2 from '../../assets/project-image-2.png'
import PI3 from '../../assets/project-image-3.png'
import PI4 from '../../assets/project-image-4.png'
import PI5 from '../../assets/project-image-5.png'
import PI6 from '../../assets/project-image-6.png'

const projectList = [
  {
    id: 1,
    title: 'Project Title 01',
    image: PI1,
    github: 'https://github.com/teddone',
    demo: '#'
  },
  {
    id: 2,
    title: 'Project Title 02',
    image: PI2,
    github: 'https://github.com/teddone',
    demo: '#'
  },
  {
    id: 3,
    title: 'Project Title 03',
    image: PI3,
    github: 'https://github.com/teddone',
    demo: '#'
  },
  {
    id: 4,
    title: 'Project Title 04',
    image: PI4,
    github: 'https://github.com/teddone',
    demo: '#'
  },
  {
    id: 5,
    title: 'Project Title 05',
    image: PI5,
    github: 'https://github.com/teddone',
    demo: '#'
  },
  {
    id: 6,
    title: 'Project Title 06',
    image: PI6,
    github: 'https://github.com/teddone',
    demo: '#'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projectList.map(({id, title, image, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__cta">
                <a href={github} className="btn">Github</a>
                <a href={demo} className="btn btn-primary">Live Demo</a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
