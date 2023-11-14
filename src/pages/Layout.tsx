import style from './Layout.module.css'

export function Layout() {
  return (
    <div className={style.app}>
      <header>
        <h1>Navbar</h1>
      </header>

      <main className={style.content}>
        <p>Content Here</p>
      </main>

      <footer>
        <p>Kodeloftet</p>
      </footer>
    </div>
  )
}