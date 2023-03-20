import './App.css'
import Header from "./common/header/Header"
import { BrowserRouter as Router,Routes,Route} from "react-router-dom" 
import Pages from "./pages/Pages"

function App() {

  return (
    <div>
      <Router>
        <Header />
         <Routes>
          <Route path="/" element = {<Pages />}exact> 
              
            </Route> 
          </Routes> 
      </Router>
  </div>
  )
}

export default App
