import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import MovieInfo from './pages/MovieInfo';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/:movie' element={<MovieInfo/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
