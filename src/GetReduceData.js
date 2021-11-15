import { useSelector } from "react-redux";
import { useLinkClickHandler } from "react-router-dom";
function GetReduceData() {
  const myState = useSelector((state) => state.formReducer);
  return (
    <>
      <table>
        <tr>
        <td>NO#</td>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Country</td>
        <td>Gender</td>
        <td>Language</td>
        </tr>
        {myState.map((item, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.country}</td>
            <td>{item.gender}</td>
            <td>{item.language}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
export default GetReduceData;
