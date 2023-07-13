import React, { useEffect, useState } from "react";

import Header from "../../components/shared/Layout/Header";
import API from "../../services/API";
import { Chart } from "chart.js/auto";
import {  Line } from "react-chartjs-2";
import moment from "moment";

const Analytics = () => {
	const [data, setData] = useState([]);
	const [inventoryData, setInventoryData] = useState([]);
  const colors = [
    "#884A39",
    "#C38154",
    "#FFC26F",
    "#4F709C",
    "#4942E4",
    "#0079FF",
    "#FF0060",
    "#22A699",
  ];

	const getBloodRecordsData = async () => {
		try {
			const { data } = await API.get("/analytics/bloodGroups-data");
			if (data?.success) {
				setData(data?.bloodGroupData);
				
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getBloodRecordsData();
	}, []);
	 //get function
	 const getBloodRecords = async () => {
		try {
		  const { data } = await API.get("/inventory/get-recent-inventory");
		  if (data?.success) {
			setInventoryData(data?.inventory);
			console.log(data);
		  }
		} catch (error) {
		  console.log(error);
		}
	  };
	
	  useEffect(() => {
		getBloodRecords();
	  }, []);

	let labels = [];
	let totalInData = [];
	let totalOutData = [];
	let availableBloodData = [];

	if (Array.isArray(data)) {
		labels = data.map((item) => item.bloodGroup);
		totalInData = data.map((item) => item.totalIn);
		totalOutData = data.map((item) => item.totalOut);
		availableBloodData = data.map((item) => item.availabeBlood);
	}
	
	const datasets1 = {
		label: "Total In Blood",
		backgroundColor: "rgba(255, 99, 132, 0.2)", // Light fill color for dataset 1
		borderColor: "rgb(255, 99, 132)",
		data: totalInData,
		
	};

	const datasets2 = {
		label: "Total out Blood",
		backgroundColor: "rgba(54, 162, 235, 0.2)", // Light fill color for dataset 2
		borderColor: "rgb(54, 162, 235)",
		data: totalOutData,
		
	};
	const datasets3 = {
		label: "Avalible Blood ",
		backgroundColor: "rgba(75, 192, 192, 0.2)", // Light fill color for dataset 3
		borderColor: "rgb(75, 192, 192)",
		fill:true,

		data: availableBloodData,
	};

	const charti = {
		labels: labels,
		datasets: [datasets1, datasets2, datasets3],
	};
	const options = {
		scales: {
			x: {
				title: {
					display: true,
					text: "Blood Group Name",
					font: {
						weight: "bold",
					}
				},
			},
			y: {
				title: {
					display: true,
					text: "Quantity(ML)",
					font: {
						weight: "bold",
					},
				},
			},
		},
	};

	return (
		<>
			<div>
				<Header />
				<div style={{ width: "100%", height: "auto", margin: "auto" }}>
					<h1 style={{ textAlign: "center" }}>Blood Group Data</h1>
					<div style={{ width: "100%", maxWidth: "1000px", margin: "auto" }}>
						<Line data={charti} options={options} />
					</div>
				</div>
				<h1 style={{ textAlign: "center" ,marginTop:"40px", marginBottom:"50px"}}>Blood Group Data</h1>
					
				<div
					className="d-flex flex-row flex-wrap"
					 style={{ width: "100%", maxWidth: "1000px", margin: "auto" }}>
					 
				
					{data?.map((record, i) => (
						<div
							className="card m-2 p-1"
							key={i}
							style={{ width: "18rem", backgroundColor: `${colors[i]}` }}
						>
							<div className="card-body">
								<h1 className="card-title bg-light text-dark text-center mb-3">
									{record.bloodGroup}
								</h1>
								<p className="card-text">
									Total In : <b>{record.totalIn}</b> (ML)
								</p>
								<p className="card-text">
									Total Out : <b>{record.totalOut}</b> (ML)
								</p>
							</div>
							<div className="card-footer text-light bg-dark text-center">
								Total Available : <b>{record.availabeBlood}</b> (ML)
							</div>
						</div>
					))}

					<div className="container my-3">
						<h1 className="my-3">Recent Blood Transactions</h1>
						<table className="table ">
							<thead>
								<tr>
									<th scope="col">Blood Group</th>
									<th scope="col">Inventory Type</th>
									<th scope="col">Quantity</th>
									<th scope="col">Donar Email</th>
									<th scope="col">TIme & Date</th>
								</tr>
							</thead>
							<tbody>
								{inventoryData?.map((record) => (
									<tr key={record._id}>
										<td>{record.bloodGroup}</td>
										<td>{record.inventoryType}</td>
										<td>{record.quantity} (ML)</td>
										<td>{record.email}</td>
										<td>
											{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default Analytics;
