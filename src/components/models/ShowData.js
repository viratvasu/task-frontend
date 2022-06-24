import React, { useEffect,useState } from 'react';
import axios from 'axios';
const ShowData = ({closeModal}) => {
    const [data,setData] = useState("")
    useEffect(()=>{
        axios.get('/get_all/', { headers: { Authorization: 'Bearer ' + window.localStorage.getItem('token') } })
        .then(resp => setData(resp.data))
        .catch(error => setData("error"))
    },[])
    const renderData = ()=>{
        if(data.length === 0){
            return <p>There is No Data</p>
        }
        return (
        <React.Fragment>
            {data.map(element=>{
                return (
                    <div className='data-box' key={element.id}>
                        <h4 className='title'>{element.title}</h4>
                        <div className='divider'></div>
                        <p className='body'>{element.body}</p>
                        <p className='author'>- {element.user.name}(id-{element.user.id})</p>
                    </div>
                    )
            })}
        </React.Fragment>
        )
    }
    return (
        <div className="backdrop">
            <div className="modal-content">
                <button className="close-btn" onClick={() => closeModal()}>x</button>
                <div class="data-container">
                        {data === ""?<p>loading...</p>:data === "error"?<p>Something went wrong while fetching data</p>:<React.Fragment>{renderData()}</React.Fragment>}
                </div>
            </div>
        </div> 
     );
}
 
export default ShowData;