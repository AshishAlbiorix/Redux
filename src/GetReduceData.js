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
        </tr>
        </thead>
        <tbody>
        {
          formData.map((item,index)=>{
            console.log(item.address);
            return (
              <tr key={index}>
                <td>
                  {index+1}
                </td>
                <td>
                  {item.name}
                </td>
                <td>
                  {item.username}
                </td>
                <td>{item.email}</td>
                 <td>
                   <ul>
                     <li>
                        {
                        item.address.street
                        },
                     </li>
                     <li>
                      {item.address.suite},
                     </li>
                     <li>
                      {item.address.city},
                     </li>
                     <li>
                     {item.address.zipcode},
                     </li>
                     <li>
                     Lat{ item.address.geo.lat } Log{item.address.geo.lng}
                     </li>
                     </ul>
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
