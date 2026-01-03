import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Video from './pages/Video'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video" element={<Video />} />
    </Routes>
  )
}
