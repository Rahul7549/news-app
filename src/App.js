import { Routes,Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar'
import News from './components/news/News';

function App() {
// business entertainment general health science sports technology
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<News category="general"/>} />
        </Routes>
        <Routes>
          <Route exact path='/business' element={<News category="business"/>} />
        </Routes>
        <Routes>
          <Route exact path='/entertainment' element={<News category="entertainment"/>} />
        </Routes>
        <Routes>
          <Route exact path='/health' element={<News category="health"/>} />
        </Routes>
        <Routes>
          <Route exact path='/science' element={<News category="science"/>} />
        </Routes>
        <Routes>
          <Route exact path='/sports' element={<News category="sports"/>} />
        </Routes>
        <Routes>
          <Route exact path='/technology' element={<News category="technology"/>} />
        </Routes>
    </div>
  );
}


export default App;
