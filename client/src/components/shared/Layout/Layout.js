import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
const Layout = ({ children }) => {

	

	
return (
	
      <>
 <div className="header">
        <Header />
      </div>
      <div className="row g-0">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">{children}</div>
 
        <Footer/>

      </div>
	  </>
	);
  };

export default Layout;
