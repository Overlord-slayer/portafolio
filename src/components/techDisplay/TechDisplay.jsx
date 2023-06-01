import React from 'react'

import Technology from '@components/technologies'

import reactimg from '@iconos/React-icon.svg.png'
import viteimg from '@iconos/vite.svg'
import npm from '@iconos/npm.svg'
import yarn from '@iconos/yarnIcon.svg'
import postgres from '@iconos/postgresLogo.svg.png'
import css from '@iconos/cssLogo.svg.png'
import html from '@iconos/htmlLogo.svg.png'
import js from '@iconos/javascriptLogo.png'

import styles from './TechDisplay.module.css'

const technologiesData = [
  {
    name: 'vite',
    image: viteimg,
  },
  {
    name: 'yarn',
    image: yarn,
  },
  {
    name: 'npm',
    image: npm,
  },
  {
    name: 'react',
    image: reactimg,
  },
  {
    name: 'postgres',
    image: postgres,
  },
  {
    name: 'html',
    image: html,
  },
  {
    name: 'css',
    image: css,
  },
  {
    name: 'javaScript',
    image: js,
  },
]

export default function TechDisplay() {
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>
        <h1>Tecnologias</h1>
      </div>

      <div className={styles.technologies}>
        {technologiesData.map((technology) => (
          <Technology
            name={technology.name}
            img={technology.image}
          />
        ))}
      </div>
    </div>
  )
}
