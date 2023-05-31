import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './Contact.module.css'

const iconStyle = {
  color:"white",
  fontSize:"3em",
}

const buttonStyle = {
  border:"1px solid rgba(255,255,255, 0.4)",
  borderRadius:"3px",
  backdropFilter:"blur(4px)",
  maxWidth: "100px",
  maxHeight: "80px",
  boxShadow:"0 5px 45px rgba(0,0,0,0.1)",
  transition: "0.5s",
  "&:hover":{
    opacity: "0.5",
    transform: "translateY(-50px)",
    transition: "0.5s"
  },
}

export default function Contact(){
  const handleEmailClick = () => {
    const recipientEmail = "samuelargueta992@gmail.com"
    const subject = "Contactar"
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(subject)}`
    window.open(url, '_blank')
  }
  return (
    <div className={styles.container}>
      <div className={styles.innerDiv}>
        <Button sx={buttonStyle} size="small"
          href="https://www.linkedin.com/in/samuel-argueta-1b0480200/"
        >
          <LinkedInIcon sx={iconStyle} fontSize="inherit"/>
        </Button>
      </div>
      <div className={styles.innerDiv}>
        <Button sx={buttonStyle} size="small"
          
          onClick={handleEmailClick}
        >
          <EmailIcon sx={iconStyle} fontSize="inherit"/>
        </Button>
      </div>
      <div className={styles.innerDiv}>
        <Button sx={buttonStyle} size="small"
          href="https://github.com/Overlord-slayer"
          >
          <GitHubIcon sx={iconStyle}/>
        </Button>
      </div>
    </div>
  )
}
