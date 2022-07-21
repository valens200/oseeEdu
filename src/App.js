import './App.css'
import NavBar from './components/NavBar'
import Meeting from './pages/Meeting'
import Home from './pages/Home'
import Header from './components/Header'
import Main from './components/main'

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
    <div className="App h-screen">
      {/* <Meeting /> */}
      {/* <Courses /> */}
      <Home />
    </div>
  )
}

export default App
