import { Route , Routes} from 'react-router-dom';
import './App.css';
import Labs from './components/Labs';
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import NotFound from './components/NotFound';
import { NavLink} from 'react-router-dom';
import MainHeader from './components/MainHeadre';


function App() {
  return (
    <div className="App">

      <div>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/labs'>Labs</NavLink>
          </li>
          <li>
            <NavLink to='/support'>Support</NavLink>
          </li>
        </ul>
      </div>

      <Routes>
        {/* First Routr is parent for all the others routes */}
        <Route path='/' element={<MainHeader />}>
          {/* index represent default Route/page */}
          <Route index element={<Home />} />
          <Route path='/support' element={<Support />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/labs' element={<Labs />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
