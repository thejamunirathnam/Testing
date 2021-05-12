import logo from './logo.svg';
import './App.css';
import LifeCycleA from './components/LifeCycleA'
import UpdateCycleA from './components/UpdateCycleA';
import Header from './components/testing';
import VirtualDOM from './components/VirtualDOM';
import LifeCycle from './components/Mounting/LifeCycle';
import LifeCycleUpdateA from './components/Updating/LifeCycleUpdateA';



function App() {


  return (
    <div className="App">
      <LifeCycleUpdateA/>
      {/* <LifeCycle  pass="red"/> */}
       {/* <LifeCycleA></LifeCycleA> */}
       {/* <UpdateCycleA/> */}
       {/* <Header favcol="yellow"/> */}
        {/* <VirtualDOM/> */}
    </div>
  );
}
export default App;


