import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import API from '../../services/API';
import moment from 'moment';

const HospitalList = () => {
 
  const [data, setData ] = useState();

  const getDonars = async()=>{
    try {
      const { data} = await API.get("/admin/hospital-list");
      
      
      console.log(data);
      if(data?.success)
      {
        setData(data?.hospitalData);

      }
      
      

     
      
    } catch (error) {
      console.log(error);
      
    }


  }
  useEffect(() => {
    getDonars()
   }, [])

   const handelDelete = async (id)=>{
            try {
                let  answer = window.prompt('Are You Sure Want to delete Hospital account',"Sure")
                if(!answer) return ;
                const  {data } = await  API.delete(`/admin/delete-hospital/${id}`)
                alert(data?.message);
                window.location.reload();
                
            } catch (error) {
                console.log(error);

                
            }
   }
   
return (




<>
<Layout>
<table className="table ">
          <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

           {Array.isArray(data)   && data.length > 0 ? (
           data?.map((record,index) => (
            <tr key={record._id}>
              <td>{index+1}</td>
              <td>{record.hospitalName}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
               <td> <button
              className="btn btn-danger"
              onClick={() => handelDelete(record._id)}
            >
              Delete
            </button></td>
            </tr>
           
          ))
        ) : (
          <tr>
            <td colSpan="5" style={{ textAlign: 'center' }}>
              <img  src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg?size=626&ext=jpg&ga=GA1.1.541085954.1687882189&semt=ais" alt="No Data" />
            </td>
          </tr>
        )}

          </tbody>
        </table>
</Layout>
</>

  )
}

export default HospitalList