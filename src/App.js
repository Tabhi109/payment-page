import './App.css';
import Navbar from './Components/navbar';
import Info from './Components/Info';
import PayForm from './Components/payForm';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <>
    <Navbar/>
    <div className='App'>
      <div className='container'>
        <div className='row'>
        <div className='col-md-6 mt-5'>
        <Info/>
        </div>
        <div className='col-md-4 mt-5 payform'>
        <PayForm/>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
