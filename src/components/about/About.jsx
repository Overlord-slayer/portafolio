import React, { useRef, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import foto from '@fotos/samuel.jpg'

import styles from './About.module.css'

export default function About() {
  const tiltRef = useRef(null)

  useEffect(() => {
    const tiltNode = tiltRef.current
    VanillaTilt.init(tiltNode, {
      max: 20,
      speed: 400,
    })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.specificData}>
        <div>
          <strong>
            <h1>
              Josúe Samuel Argueta Hernández
            </h1>
          </strong>
        </div>
        <div>
          <h3>Desarrollador web junior</h3>
        </div>
        <div>
          <img src={foto} alt="" />
        </div>
      </div>
      <div ref={tiltRef} className={styles.card}>
        <div className={styles.content}>
          <strong>
            <p>
              <br />
              Samuel es una persona que le encanta el deporte, prefiere disfrutar con las
              amistades aunque no parezca. Le gustan los videojuegos, pero algo que le encanta
              es programar. Quizas no sea el mejor en ello, pero consigue los resultados necesarios
              <br />
              <br />
              Actualemnte es estudiante de la Universidad del Valle de Guatemala, cursando su 3era
              año de la carrera Ciencias de la Computación. Considera que ha aprendido mucho, tanto
              por medio de la Universidad, como por medio personal, pues este mundo requiere poner
              de parte de uno para poder llegar más alla.
            </p>
          </strong>
        </div>
      </div>
    </div>
  )
}
