import React from 'react'
import style from './Layout.module.css'

type LayoutProps = {
  children: React.ReactNode
}

export function Layout(properties: LayoutProps) {
  const { children } = properties

  return (
    <div className={style.app}>
      <header>
        <h1>Navbar</h1>
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