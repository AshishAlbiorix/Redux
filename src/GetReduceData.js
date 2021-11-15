import { useSelector } from "react-redux"
import { useLinkClickHandler } from "react-router-dom";
function GetReduceData(){
    const myState = useSelector((state)=>state.formReducer);
    return (
        <>
            <ul>
            {
              myState.map((item,index)=>
                <li key={index}>
                  {item.firstName} { item.lastName }
                </li>
                )  
              }
            </ul>
        </>
    )
}
export default  GetReduceData;