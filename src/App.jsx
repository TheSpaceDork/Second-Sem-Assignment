import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import AllRepos from './pages/AllRepos'
import IndividualRepo from './pages/IndividualRepo'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Octokit } from "octokit";
import { useState, useEffect } from "react"
import ErrorBoundary from './components/ErrorBoundary'
import Errortest from './components/Errortest'
import NotFound from './components/NotFound'

function App() {
  const [items, setItems] = useState([])
  const [repos, setRepos] = useState([])
 const octokit = new Octokit({});
  useEffect(() => {
    const fetchRepos = async () => {
      const res = await octokit.request(`GET /users/TheSpaceDork`)
      const data = await res.data
      setItems(data)

    }
    fetchRepos()
  }, [])
  useEffect(() => {
    const fetchRepos = async () => {
      const res = await octokit.request(`GET /users/TheSpaceDork/repos`)
         const data = await res.data
      setRepos(data)

    }
    fetchRepos()
  }, [])
  
  return (
    <>
      <BrowserRouter >
        <ErrorBoundary>

        <Navbar/>
        <Routes>
          <Route path="/" element={<Home items={items} repos={repos} />} />
          <Route path="/allrepos" element={<AllRepos items={items} repos={repos} />} />
            <Route path="/allrepos/:id" element={<IndividualRepo items={items} repos={repos} />} />
            <Route path="/test" element={<Errortest/> } />
            <Route path="*" element={<NotFound/> } />
        </Routes>
        <Footer/>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  )
}

export default App
