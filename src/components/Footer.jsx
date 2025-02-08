import React from 'react'
import styles from "../components.style/page.module.scss"
import { PhoneCall } from 'lucide-react'

const Footer = () => {
  return (
    <footer>
        <a href="">
        <PhoneCall color='#11176b'/>
        </a>
        <a href="">
        <img src="\icons\telegram.svg" alt="" />
        </a>
        <a href="">
        <img src="\icons\whatsapp.svg" alt="" />
        </a>
        <a href="">
        <img src="\icons\instagram.svg" alt="" />
        </a>
    </footer>
  )
}

export default Footer