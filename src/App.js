import logo from './assets/full_logo.png';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <img src={logo} className='logo' alt="Emmy's Doodles Logo" />
        <h1 className='maintenanceText'>We're currently down for maintenance. Please check back for an update soon.</h1>
      </div>
    </div>
  );
}

export default App;
