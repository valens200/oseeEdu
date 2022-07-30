import './App.css'
import NavBar from './components/NavBar'
import Meeting from './pages/Meeting'
import Home from './pages/Home'
import Header from './components/Header'
import Main from './components/main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogRocket from 'logrocket'
import Courses from './pages/courses'
const appAssets = [
  {
    id: 1,
    name: 'links',
    links: [
      'HOME',
      'COURSES',
      'APPLY NOW',
      'SCIENCE',
      'TECHNOLOGY',
      'ENGINIEERING',
      'MATHS',
      'CONTACT US',
    ],
  },
  {
    id: 2,
    name: 'buttons',
    buttons: ['AFFORDABLE', 'EMPLOYABLE'],
  },
]
function App() {
  return (
    <BrowserRouter className="App h-screen">
      <Routes>
        <Route path="/meetings" element={<Meeting />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
