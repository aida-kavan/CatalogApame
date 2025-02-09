import React from 'react'
import styles from "../components.style/page.module.scss"
import { PhoneCall } from 'lucide-react'

const Footer = () => {
  return (
    <footer>
        <a href="tel:02634001215">
        <PhoneCall color='#11176b'/>
        </a>
        <a href="https://t.me/apamehtabligh">
        <img src="\icons\telegram.svg" alt="" />
        </a>
        <a href="https://wa.me/+989033020318">
        <img src="\icons\whatsapp.svg" alt="" />
        </a>
        <a href="https://www.instagram.com/apametabligh/">
        <img src="\icons\instagram.svg" alt="" />
        </a>
    </footer>
  )
}

export default Footer