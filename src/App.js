import './App.css';
import ClassDatabinding from './ReactClass/ClassDatabinding/ClassDatabinding';
import ClassState from './ReactClass/ClassState/ClassState';
import FuncDatabinding from './ReactFunction/FuncDatabinding/FuncDatabinding';


function App() {
  return (
    <div className="App">
      {/* Databinding */}
          {/* <FuncDatabinding></FuncDatabinding> */}
          {/* <ClassDatabinding></ClassDatabinding> */}

      {/* State */}
          <ClassState></ClassState>
    </div>
  );
}

export default App;
