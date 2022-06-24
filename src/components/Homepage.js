import React, { useState } from "react";
import UploadData from "./models/UploadData";
import ShowData from "./models/ShowData";
const Homepage = () => {
    const [showUploadDataModal, setShowUploadDataModal] = useState(false)
    const [showDataModal, setShowDataModal] = useState(false)
    const closeUploadModal = ()=>setShowUploadDataModal(false)
    const closeShowDataModal = ()=> setShowDataModal(false)
    return ( 
      <React.Fragment>
        <div class="login-page">
            <div class="form">
            <button onClick={()=>setShowUploadDataModal(true)}>upload data</button>
            <button onClick={()=>setShowDataModal(true)}>See data</button>
            <button onClick={() => {
              window.localStorage.removeItem("token")
              window.location = "/"
            }} className="logout">Logout</button>
            </div>
        </div>
        {showUploadDataModal ? <UploadData closeUploadModal={closeUploadModal} /> : null}
        {showDataModal ? <ShowData closeModal={closeShowDataModal} /> : null}
      </React.Fragment>
     );
}
 
export default Homepage;