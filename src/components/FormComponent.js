import {useDispatch } from "react-redux"
import { formData } from "../actions/Index";
import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import axios from "axios";
function FormComponent() {
  const dispatch = useDispatch();
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [country,setCountry] = useState();
    const [gender,setGender] = useState();
    const [language,setLanguage] = useState([]);
    const tempLangugae = [...language];
    const getLanguage = (data) => {
      if(language.includes(data)){
        let index = language.indexOf(data);
        tempLangugae.splice(index, 1);
      }else{
        tempLangugae.push(data);
      }
      setLanguage(tempLangugae);
    };
    
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/student').then((response)=>{
        dispatch(formData(response.data.data))
      });
    },[])
    
    const handler = () => {
        let dataArray = [{firstName:firstName,lastName:lastName,country:country,gender:gender,language:language}];
      };
  return (
    <div className="container form-block">
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
      <select className="form-control" onChange={(e)=>setCountry(e.target.value)}>
        <option>--Select Country--</option>
        <option value="India">India</option>
        <option value="Pakistan">Pakistan</option>
        <option value="Nepal">Nepal</option>
        <option value="Sir Lanka">Sir Lanka</option>
        <option value="Bhutan">Bhutan</option>
        <option value="China">China</option>
        <option value="Bangladesh">Bangladesh</option>
      </select>
      Male<input type="radio" name="gender" value="Male" onChange={(e)=>setGender(e.target.value)}/>
      Female<input type="radio" name="gender" value="Female" onChange={(e)=>setGender(e.target.value)}/>
      English<input type="checkbox" name="language" onChange={(e)=>getLanguage("Englsih")} />
      Hindi<input type="checkbox" name="language" onChange={(e)=>getLanguage("Hindi")}/>
      Gujarati<input type="checkbox" name="language" onChange={(e)=>getLanguage("Gujarati")}/>
      <Button type="submit" onClick={handler}>
        Save
      </Button>
    </div>
  );
}
export default FormComponent;
