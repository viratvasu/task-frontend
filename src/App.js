import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Homepage from './components/Homepage';
import Login from './components/Login';
import './App.css';
import './styles/login.css';
import './styles/modal.css';

function App() {
  const [user, setUser] = useState({ 'is_logged': false,'user_name':''})
  useEffect(() => {
    const token = window.localStorage.getItem("token")
    if (token) {
      axios.get('/handshake/', { headers: { Authorization: 'Bearer ' + window.localStorage.getItem('token') } })
        .then(resp => setUser({ 'is_logged': true, 'user_name': resp.data.name }))
        .catch(error => console.log(error))
    }
  }, [])

  return (
    <React.Fragment>
      {user.is_logged ? <Homepage />: <Login />}
    </React.Fragment>
  );
}

export default App;
