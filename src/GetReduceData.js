import { useSelector } from "react-redux"
function GetReduceData(){
    const myState = useSelector((state)=>state.formReducer);
    return (
        <div>
            {
              myState.map((item,index)=>
              <div key={index}>
                <h1>{item.firstName}</h1>
                <h2>{item.lastName}</h2>
                </div>
              )  
            }
        </div>
    )
}
export default  GetReduceData;