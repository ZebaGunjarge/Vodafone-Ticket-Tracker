/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react'

function LoginForm({Login, error}) {
    const [details, setDetails]= useState({name:"", email:"", password:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
            <div style={{marginLeft:"20px", marginRight:"20px",fontWeight:"500",fontSize:"48px",marginTop:"20px", marginBottom:"20px",textAlign:"center"}}>Welcome back to Status Tracker
            <div style={{fontSize:"24px",fontWeight:"300",marginTop:"30px",marginBottom:"40px"}}>Login to MeinVodafone</div></div>
             
                {(error !== "") ? (<div className="error">{error}</div>): ""}
               
                
                <div className="from-group" style={{fontWeight:"200",fontSize:"24px",marginTop:"20px" }}>
                    <label htmlFor="email" style={{marginRight:"70px"}}>Email</label>
                    <input type="text" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}
                    style={{height:"59px",width:"550px", fontSize:"18px", borderRadius:"10px", border:"1px solid grey", paddingLeft:"10px"}}  placeholder="Enter Email ID"/>
                </div>
                <div className="from-group" style={{fontWeight:"200",fontSize:"24px",marginTop:"30px"}}>
                    <label htmlFor="Password" style={{marginRight:"15px"}}>Password</label>
                    <input type="text" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}
                    style={{height:"59px",width:"550px", fontSize:"18px", borderRadius:"10px",  marginLeft:"10px",border:"1px solid grey", paddingLeft:"10px"}}  placeholder="Enter Password"/>
                </div>    

                <input style={{marginTop:"40px",marginLeft:"260px",color:"white",backgroundColor:"#E600000",border:"0px",borderRadius:"10px",height:"59px",fontSize:"24px",width:"256px", boxShadow:"2px 2px 2px 2px grey", marginBottom:"50px"}} type="submit" value="Login"/>
            </div>
            
        </form>
    )
}

export default LoginForm



