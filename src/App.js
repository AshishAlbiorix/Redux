import "./App.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useSelector,useDispatch } from "react-redux"
import { incNumber,decNumber} from "./actions/Index";
import GetReduceData from "./GetReduceData";
import FormComponent from "./components/FormComponent";
function App() {
  const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className="App">
      
      <GetReduceData/>
      <FormComponent/>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React Js Redux</h4>
        <div className="quantity">
          <Button variant="danger" type="button" onClick={()=>dispatch(decNumber())}>-</Button>
          <input name="quantity" type="text" className="form-control quantity_input" value={myState} readOnly/>
          <Button type="button" variant="success" onClick={()=>dispatch(incNumber(5))}>+</Button>
        </div>
      </div>
      <hr/>
     
    </div>
  );
}
export default App;
