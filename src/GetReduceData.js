import { useSelector } from "react-redux";
function GetReduceData() {
  const formData = useSelector((state) => state.formReducer);
  const counterData = useSelector((state) => state.changeTheNumber);
  return (
    <>
    <h1>{counterData}</h1>
      <table>
      <thead>
        <tr>
        <td>NO#</td>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Country</td>
        <td>Gender</td>
        <td>Language</td>
        </tr>
        </thead>
        <tbody>
        {formData.map((item, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.country}</td>
            <td>{item.gender}</td>
            <td>{item.language}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
}
export default GetReduceData;
