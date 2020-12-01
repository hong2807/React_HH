import './App.css';
import ClassDatabinding from './ReactClass/ClassDatabinding/ClassDatabinding';
import ClassState from './ReactClass/ClassState/ClassState';
import ClassProps from './ReactClass/ClassProps/ClassProps';
import FuncDatabinding from './ReactFunction/FuncDatabinding/FuncDatabinding';
import FuncState from './ReactFunction/FuncState/FuncState';
import FuncProp from './ReactFunction/FuncProps/FuncProp';


function App() {
  return (
    <div className="App">
      {/* Databinding */}
          {/* <FuncDatabinding></FuncDatabinding> */}
          {/* <ClassDatabinding></ClassDatabinding> */}

      {/* State */}
          {/* <ClassState></ClassState> */}
          {/* <FuncState></FuncState> */}

      {/* Props */}
          {/* <ClassProps></ClassProps> */}
          <FuncProp></FuncProp>
    </div>  
  );
}

export default App;
