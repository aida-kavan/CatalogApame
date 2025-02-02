
import styles from '../components.style/page.module.scss'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <header>
        <div className={styles.headerCont}>
        <Link to={"/"} >
        <img src="/logo.png" alt="" />
        </Link>
        <h1>کاتالوگ خدمات مجموعه آپامه</h1>
        </div>
    </header>
  )
}

export default header
