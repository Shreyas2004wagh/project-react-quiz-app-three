import Home from "./Components/Home.jsx"
import Quiz from "./Components/Quiz.jsx"
import Result from "./Components/Result.jsx"
import './App.css'
import {BrowserRouter , Routes , Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/quiz'} element={<Quiz />} />
        <Route path={'/result'} element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App