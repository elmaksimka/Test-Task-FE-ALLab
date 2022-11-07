import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import JobBoard from './pages/JobBoard'
import JobDetailed from './pages/JobDetailed'

function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<JobBoard />} />
                <Route path=":id" element={<JobDetailed />} />
            </Routes>
        </Router>
    </>
  )
}

export default App