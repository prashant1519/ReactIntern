
import './App.css';
import {Routes,Route} from "react-router-dom"
import Summary from './Component/Summary';
import Form from './Component/Form';
import Screen from './Component/Screen';

function App() {
 
  return (
    <div className="App">
      
      <Routes>
      <Route path='/' element={<Screen/>}/>
      <Route  path='/show' element={<Summary/>}/>
      <Route path='/form' element={<Form/>}/>
    
      </Routes>

    </div>
  );
}

export default App;
