import React from 'react'
import styles from "../components.style/page.module.scss"
import { Home, PhoneCall ,MapPin } from 'lucide-react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer>
        <Link to={"/"}>
        <Home color='#11176b'/>
        </Link>
        <a target="_blank"  href="tel:02634001215">
        <PhoneCall color='#11176b'/>
        </a>
        <a target="_blank" href="https://balad.ir/p/6Y7fXmb8EJT1lJ">
        <MapPin src="\icons\whatsapp.svg" color='#11176b'/>
        </a>
        <a  target="_blank" href="https://t.me/apamehtabligh">
        <img src="\icons\telegram.svg" />
        </a>
        <a target="_blank"  href="https://wa.me/+989033020318">
        <img src="\icons\whatsapp.svg" />
        </a>
        <a target="_blank"  href="https://www.instagram.com/apametabligh/">
        <img src="\icons\instagram.svg" />
        </a>
    </footer>
  )
}

export default Footer