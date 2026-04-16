import { Navigate, Route, Routes } from 'react-router-dom'
import { DEFAULT_SLUG } from './data/practices'
import PracticeSite from './pages/PracticeSite'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${DEFAULT_SLUG}`} replace />} />
      <Route path="/:slug" element={<PracticeSite />} />
    </Routes>
  )
}
