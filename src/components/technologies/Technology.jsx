import React from 'react'
import { PropTypes } from 'prop-types'
import styles from './Technology.module.css'

export default function Technology({ name, img }) {
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

Technology.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}
