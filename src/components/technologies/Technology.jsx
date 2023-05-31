import React from 'react'
import styles from './Technology.module.css'

export default function Technology({name,img}){
  return (
    <div className={styles.card}>
      <img 
        className={styles.image}
        src={img}
        alt={name} 
      />
    </div>
  )
}
