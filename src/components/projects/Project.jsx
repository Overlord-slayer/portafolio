import React from 'react'
import { Button } from '@mui/material'
import styles from './Project.module.css'

export default function Project({id,name, text,image, demoLink}){
  console.log(image)
	return (
	<div className={styles.container}>
		<div className={styles.card}>
			<div className={styles.box}>
				<div className={styles.content}>
					<h2>{id}</h2>					
					<h3>{name}</h3>
					<img src={image} alt={name} />
					<strong>
						<p>{text}</p>
					</strong>
					<Button
						className={styles.projectLink}
						href={demoLink}
					>
						Demo
					</Button>
					
				</div>
			</div>
		</div>
	</div>
	)
}