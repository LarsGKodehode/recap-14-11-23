import { Layout } from './pages/Layout'
import { LandingPage } from './pages/LandingPage'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { AboutPage } from './pages/about/AboutPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ArticlePage } from './pages/article/ArticlePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />
          {/* path = "/" + "about" = "/about" */}
          <Route path='about' element={<AboutPage />} />

          <Route path='article/:articleId' element={<ArticlePage />} />

          <Route path='*' element={<NotFoundPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
