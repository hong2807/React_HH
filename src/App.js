import './App.css';
import ClassDatabinding from './ReactClass/ClassDatabinding/ClassDatabinding';
import ClassState from './ReactClass/ClassState/ClassState';
import ClassProps from './ReactClass/ClassProps/ClassProps';
import FuncDatabinding from './ReactFunction/FuncDatabinding/FuncDatabinding';
import FuncState from './ReactFunction/FuncState/FuncState';
import FuncProp from './ReactFunction/FuncProps/FuncProp';
import ClassBTDanhSachSanPham from './ReactClass/ClassRedux/ClassMapStateToProps/ClassMapStateToProps';
import ClassMapStateToProps from './ReactClass/ClassRedux/ClassMapStateToProps/ClassMapStateToProps';
import FuncUseSelector from './ReactFunction/FuncRedux/FuncUseSelector/FuncUseSelector';
import ClassMapDispatchToProps from './ReactClass/ClassRedux/ClassMapDispatchToProps/ClassMapDispatchToProps';
import FuncUseDispatch from './ReactFunction/FuncRedux/FuncUseDispatch/FuncUseDispatch';


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
          {/* <FuncProp></FuncProp> */}

      {/* Redux */}
          {/* <ClassMapStateToProps></ClassMapStateToProps> */}
          {/* <FuncUseSelector></FuncUseSelector> */}
          {/* <ClassMapDispatchToProps></ClassMapDispatchToProps> */}
          <FuncUseDispatch></FuncUseDispatch>
    </div>  
  );
}

export default App;
