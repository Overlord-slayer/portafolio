import React from 'react'
import Contact from '@components/contact'
import TechDisplay from '@components/techDisplay'
import ProjectDisplay from '@components/projectDisplay'
import About from '@components/about'
import styles from './Home.module.css'

export default function Home(){
  return (
    <div className={styles.contain}>
      <div className={styles.extra}>

      </div>
      <About/>
      <TechDisplay/>
      <ProjectDisplay/>
      <Contact/>
    </div>
  )
}