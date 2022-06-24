import { useState } from 'react';
import axios from 'axios';

const UploadData = ({closeUploadModal}) => {
    const [uploadFile,setUploadFile] = useState()
    console.log(uploadFile)
    const handleUpload = e=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append("file",uploadFile)
        axios.post('/parse_and_save_data/', formData, { headers: { Authorization: 'Bearer ' + window.localStorage.getItem('token') } })
        .then(resp => closeUploadModal())
        .catch(error => document.getElementById("message").innerHTML = "** Problem while parsing your data **")
    }
    return ( 
        <div className="backdrop">
            <div className="modal-content">
                <button className="close-btn" onClick={() => closeUploadModal()}>x</button>
                <div class="login-page">
                    <div class="form">
                        <form class="login-form" onSubmit={e=>handleUpload(e)}>
                            <input type="file" name="file" id="file" accept=".json" required onChange={e=>setUploadFile(e.target.files[0])}/>
                            <button>Upload</button>
                        </form>
                        <p id="message"></p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default UploadData;