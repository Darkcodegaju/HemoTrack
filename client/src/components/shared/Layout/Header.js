import React from "react";

import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Header = () => {

  const location = useLocation();
    const { user } = useSelector((state) => state.auth);
     const Navigate = useNavigate();
    const handleLogout =()=>{
        localStorage.clear();
        Navigate('/login');
        toast.success("LogOut Successfully")
    }
  

    
    return (
			<>
				<nav className="navbar" style={{ backgroundColor: "#ff4d4d" ,margin:"auto" }}>
					<div className="container-fluid ">
						<div className="navbar-brand h1 " style={{ color: "white" }}>
							<img
								style={{ width: "20px", marginRight: "10px" }}
								src={
									"data:image/png;base64,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"
								}
								alt="not found"
							/>
							HemoTrack
						</div>
						<ul className="navbar-nav flex-row">
							<i
								class="far fa-user-circle"
								style={{ fontSize: "35px", marginTop: "5px" }}
							></i>
							<li className="nav-item mx-3">
              <p className="nav-link" style={{ color: "white" }}>
  	Welcome{" "}
										{user?.name || user?.hospitalName || user?.organisationName}
									<span>
									 &nbsp;
										<span className="badge bg-secondary">{user?.role}</span>
									</span>
								</p>
							</li>
							{location.pathname === "/" ||
							location.pathname === "/donar" ||
							location.pathname === "/hospital" ? (
								<li className="nav-item mx-3">
									<Link
										to="/analytics"
										className="nav-link"
										style={{ color: "white" }}
									>
										Analytics
									</Link>
								</li>
							) : (
								<li className="nav-item mx-3">
									<Link to="/" className="nav-link" style={{ color: "white" }}>
										Home
									</Link>
								</li>
							)}
							<li className="nav-item mx-3">
								<button
									className="btn btn-danger"
									onClick={handleLogout}
									style={{ color: "white", backgroundColor: "gray" }}
								>
									Logout
								</button>
							</li>
						</ul>
					</div>
				</nav>
			</>
		);
};

export default Header;
