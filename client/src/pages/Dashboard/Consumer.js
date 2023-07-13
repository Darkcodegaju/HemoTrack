import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import moment from 'moment'
import API from '../../services/API';
import { useSelector } from 'react-redux';

const Consumer = () => {
    const { user } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);
    //find donar records
    const getDonars = async () => {
      try {
        const { data } = await API.post("/inventory/get-inventory-hospital", {
          filters: {
            inventoryType: "out",
            hospital: user?._id,
          },
        });
        if (data?.success) {
          setData(data?.inventory);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getDonars();
    }, []);
   
      

  return (
         <>
           <Layout>
           <table className="table ">
              <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Blood Group</th>
              <th scope="col">Inventory Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Email</th>
              <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>

               {Array.isArray(data)  && data.length > 0 ? (
               data?.map((record,index) => (
                <tr key={record._id}>
                  <td>{index+1}</td>
                  <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity}</td>
                <td>{record.email}</td>
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

export default Consumer