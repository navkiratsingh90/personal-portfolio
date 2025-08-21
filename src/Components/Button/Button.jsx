import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
  
  return (
    <>
        <button className={`${styles.btn}`}>{props.value}</button>
    </>
  )
}

export default Button