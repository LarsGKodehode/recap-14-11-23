import {
  Outlet,
  Link,
} from 'react-router-dom'
import { FaHome, FaGithub, FaLinkedinIn, FaInfo } from "react-icons/fa";
import { Logo } from '../components/Logo/Logo';

import style from './Layout.module.css'

export function Layout() {
  return (
    <div className={style.app}>
      <header className={style.header}>
        <a href="/">
          <Logo />
        </a>

        <nav className={style.navbar}>
          <ul>
            <li>
              <Link to="/">
                <FaHome size="4rem" />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FaInfo size="4rem" />
              </Link>
            </li>
            <li>
              <FaGithub size="4rem" />
            </li>
            <li>
              <FaLinkedinIn size="4rem" />
            </li>
          </ul>
        </nav>
      </header>

      <main className={style.content}>
        <Outlet />
      </main>

      <footer>
        <p>Kodeloftet</p>
      </footer>
    </div>
  )
}