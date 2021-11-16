import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

function GetReduceData() {
  const formData = useSelector((state) => state.formReducer);
  const counterData = useSelector((state) => state.changeTheNumber);

  return (
    <div className="container">
    <h1>{counterData}</h1>
      <table className="table table-hover">
      <thead>
        <tr>
        <td><strong>NO#</strong></td>
        <td><strong>Name</strong></td>
        <td><strong>User Name</strong></td>
        <td><strong>Email</strong></td>
        <td><strong>Address</strong></td>
        <td><strong>Language</strong></td>
        <td><strong>Gender</strong></td>
        <td><strong>Image</strong></td>
        </tr>
        </thead>
        <tbody>
        {
          formData.map((item,index)=>{
            return (
              <tr key={index}>
                <td>
                  {index+1}
                </td>
                <td>
                  {item.name}
                </td>
                <td>
                  {item.last_name}
                </td>
                <td>{item.email}</td>
                 <td>                   
                  { item.mobile }
                 </td>
                 <td>                   
                  { item.language }
                 </td>
                 <td>                   
                  { item.gender }
                 </td>
                 <td>                   
                  <img src={item.store_path+item.file} width="100" />
                 </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  );
}
export default GetReduceData;
