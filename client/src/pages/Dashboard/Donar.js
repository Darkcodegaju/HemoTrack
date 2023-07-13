import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import API from '../../services/API';
import moment  from 'moment';

const Donar = () => {

    const [data, setData ] = useState();

      const getDonars = async()=>{
        try {
          const { data} = await API.get("/inventory/get-donar");
          
          
          console.log(data);
          if(data?.success)
          {
            setData(data?.donars);

          }
          
          

         
          
        } catch (error) {
          console.log(error);
          
        }


      }
      useEffect(() => {
        getDonars()
       }, [])
       
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
                </tr>
              </thead>
              <tbody>

               {Array.isArray(data)  && data.length > 0 ? (
               data?.map((record,index) => (
                <tr key={record._id}>
                  <td>{index+1}</td>
                  <td>{record.name || record.organisationName + " (ORG)"}</td>
                  <td>{record.email}</td>
                  <td>{record.phone}</td>
                  <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
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

export default Donar