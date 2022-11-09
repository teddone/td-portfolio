import React from 'react'
import './portfolio.css'
import imgMoPhinDark from '../../assets/project-images/mophin-dark.jpg'
import imgTravelApp from '../../assets/project-images/travelling.jpg'
import imgShoesWebsite from '../../assets/project-images/legitor.jpg'
import imgResponsiveDashboard from '../../assets/project-images/responsive-dashboard.jpg'
import imgResponsiveDashboardDark from '../../assets/project-images/responsive-dashboard-dark.jpg'
import imgSpaceX from '../../assets/project-images/spacex-clone.jpg'

const projectList = [
  {
    id: 1,
    title: 'Movies Website',
    image: imgMoPhinDark,
    github: 'https://github.com/teddone/td-portfolio',
    demo: '#'
  },
  {
    id: 2,
    title: 'Responsive Dashboard Dark',
    image: imgResponsiveDashboardDark,
    github: 'https://github.com/teddone/td-portfolio',
    demo: '#'
  },
  {
    id: 3,
    title: 'Travel Website',
    image: imgTravelApp,
    github: 'https://github.com/teddone/td-portfolio',
    demo: '#'
  },
  {
    id: 4,
    title: 'SpaceX Website',
    image: imgSpaceX,
    github: 'https://github.com/teddone/td-portfolio',
    demo: '#'
  },  
  {
    id: 5,
    title: 'Shoes Website',
    image: imgShoesWebsite,
    github: 'https://github.com/teddone/td-portfolio',
    demo: '#'
  },
  {
    id: 6,
    title: 'Responsive Dashboard',
    image: imgResponsiveDashboard,
    github: 'https://github.com/teddone/td-portfolio',
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
