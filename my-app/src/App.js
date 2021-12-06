
import './App.css';
import Header from './components/Header.js';
// import { Tickets } from './components/Tickets';
import React, { useState } from 'react';

import LoginForm from './login';
import TicketStatus from './TicketStatus';

function App() {
  const adminUser = {
    email : "zeba.gunjarge@gmail.com",
    password : "zeba123"
  }

  const [user, setUser]= useState({name: "", email: ""});
  const [error, setError]= useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("logged in");
      setUser({
        name: details.name,
        email: details.email
      })
    }else{
      console.log("details dont match");
      setError("Details don't match");
    }
  }

  const Logout=() => {
    setUser({name:"", email:""})
  }
  return (
    <div className="App">

      <Header/>
     
     
      {(user.email != "") ? (

      <TicketStatus/>

    ) : (
     
      <LoginForm Login={Login} error={error}/>
  )} 
    </div>
  );
}

export default App;
