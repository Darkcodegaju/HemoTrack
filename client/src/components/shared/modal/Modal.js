import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputType from "../Form/inputType";
import API from "../../../services/API";
import { toast } from "react-toastify";



const Modal = () => {
	const [inventoryType, setInventoryType] = useState("in");
	const [bloodGroup, setBloodGroup] = useState("");
	const [quantity, setQuantity] = useState(0);
	const [email, setEmail] = useState("");
	const { user } = useSelector((state) => state.auth);
       // handle modal data
    const handleSubmit =async()=>{
        try {
            if(!bloodGroup || !quantity)
            {
                return alert('Please Fill all Filelds')
            }
            const {data} = await API.post("/inventory/create-inventory",{
                bloodGroup,
                quantity,
                inventoryType,
                email,
                organisation : user?._id
                
            })
            if(data?.success){
              alert('New Record Created Successfully')
              toast.success("New Record Created Successfully")
               window.localtion.reload()
            }
            
            
        } catch (error) {
          
            console.log(error);
            window.location.reload();
            
        }
    }
	return (
		<div
			className="modal fade"
			id="exampleModal"
			tabIndex={-1}
			role="dialog"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">
							Manage Blood Record
						</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
					</div>
					<div className="modal-body">
						<div className="d-flex"  >
							Blood-Type : &nbsp; &nbsp;
							<div className="form-cheak">
								<input
									type="radio"
									name="inRadio"
									defaultChecked
									value={"in"}
									onChange={(e) => setInventoryType(e.target.value)}
									className="form-check-input"
								/>
								<label htmlFor="in" className="form-check-label" style={{marginRight:"20px"}}>
									In
								</label>
							</div>
                            <div className="form-cheak"   >
								<input
                                  
									type="radio"
									name="inRadio"
									
									value={"out"}
									onChange={(e) => setInventoryType(e.target.value)}
									className="form-check-input"
                                    
                                   
								/>
								<label htmlFor="out" className="form-check-label" >
									Out
								</label>
							</div>
						</div>
                        <select
                className="form-select"
                aria-label="Default select example"
                style={{marginTop:"15px"}}
                onChange={(e) => setBloodGroup(e.target.value)}
              >
                <option defaultValue={"Open this select menu"}>
                  Select Blood Group
                </option>
                <option value={"O+"}>O+</option>
                <option value={"O-"}>O-</option>
                <option value={"AB+"}>AB+</option>
                <option value={"AB-"}>AB-</option>
                <option value={"A+"}>A+</option>
                <option value={"A-"}>A-</option>
                <option value={"B+"}>B+</option>
                <option value={"B-"}>B-</option>
              </select>
              
              <InputType
              
                labelText={"Donar Email"}
                labelFor={"donarEmail"}
                inputType={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputType
                labelText={"Quanitity (ML)"}
                labelFor={"quantity"}
                inputType={"Number"}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
					</div>
					<div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
