import React from 'react'
import Project from '../projects/Project'

import styles from './ProjectDisplay.module.css'

import freecodecamp from '@proyectos/freecodecampreply.jpg'
import memoryGame from '@proyectos/simplememorygame.jpg'
import calcreact from '@proyectos/calcreact.jpg'

const simpleProjects = [
  {
    "id": "01",
    "name": "Memory game",
    "text": "Este proyecto funcionó para aprender el manejo de estados en React.",
    "img": memoryGame,
    "demoLink": "https://simpleprojectgame.netlify.app"
  },
  {
    "id": "02",
    "name": "Calculadora",
    "text": "Desarrollo de una calculadora web con React",
    "img": calcreact,
    "demoLink": "https://calcrct.netlify.app"
  },
  {
    "id": "03",
    "name": "Free code camp reply",
    "text": "Este proyecto consistió en replicar el sitio free code camp. Simplemente para aprender a diseñar sitios con React",
    "img": freecodecamp,
    "demoLink": "https://freecodecampreply.s3.us-east-2.amazonaws.com/dist/client/index.html"
  }
]

const realProjects = [
  {
    "id": "01",
    "name": "Proximamente",
    "text": "Detalles no disponibles",
    "img": "",
    "demoLink":"#"
  },
  {
    "id": "02",
    "name": "Proximamente",
    "text": "Detalles no disponibles",
    "img": "",
    "demoLink":"#"
  },
  {
    "id": "03",
    "name": "Proximamente",
    "text": "Detalles no disponibles",
    "img": "",
    "demoLink":"#"
  }
]

export default function ProjectDisplay() {

  const renderProjects = (projects) => {
    return projects.map((project) => (
      <Project
        key={project.id}
        id={project.id}
        name={project.name}
        text={project.text}
        image={project.img}
        demoLink={project.demoLink}
      />
    ))
  }

  return (
    <div className={styles.container}>
      
      <div className={styles.organize}>
        <div>
          <h1>Proyectos simples</h1>
        </div>
        <div className={styles.projectOrganize}>
          {renderProjects(simpleProjects)}  
        </div>
      </div>

      <div className={styles.organize}>
        <div>
          <h1>Proyectos</h1>
        </div>
        <div className={styles.projectOrganize}>
          {renderProjects(realProjects)}
        </div>
      </div>
    </div>
  )
}
