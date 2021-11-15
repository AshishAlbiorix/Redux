import {useDispatch } from "react-redux"
import { formData } from "../actions/Index";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
function FormComponent() {
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const dispatch = useDispatch();
    const handler = () => {
        let dataArray = [{
                firstName:firstName
              },{
                lastName:lastName 
              }];
        dispatch(formData(dataArray))
      };
  return (
    <div className="form-block">
      <input
        type="text"
        className="form-control"
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <Button type="submit" onClick={handler}>
        Save
      </Button>
    </div>
  );
}
export default FormComponent;
