import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './ReUseableComponents/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route
        path="/home"
        element={<Home/>}
        />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
