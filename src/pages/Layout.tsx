import React from 'react'
import style from './Layout.module.css'

import { FaHome, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Logo } from '../components/Logo/Logo';

type LayoutProps = {
  children: React.ReactNode
}

export function Layout(properties: LayoutProps) {
  const { children } = properties

  return (
    <div className={style.app}>
      <header>
        <Logo />

        <nav>
          <ul>
            <li>
              <FaHome size="4rem" />
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
        {children}
      </main>

      <footer>
        <p>Kodeloftet</p>
      </footer>
    </div>
  )
}