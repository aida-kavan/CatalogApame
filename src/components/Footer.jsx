import React from 'react'
import styles from "../components.style/page.module.scss"
import { Home, PhoneCall } from 'lucide-react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer>
        <Link to={"/"}>
        <Home color='#11176b'/>
        </Link>
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